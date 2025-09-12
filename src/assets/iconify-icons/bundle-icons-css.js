/**
 * This is an advanced example for creating icon bundles for Iconify SVG Framework.
 * It creates a bundle from:
 * - All SVG files in a directory.
 * - Custom JSON files.
 * - Iconify icon sets.
 * - SVG framework.
 * This example uses Iconify Tools to import and clean up icons.
 * For Iconify Tools documentation visit https://docs.iconify.design/tools/tools2/
 */

// ESM-compatible utils
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { createRequire } from 'module'
import { promises as fs } from 'node:fs'

// Iconify tools
import { cleanupSVG, importDirectory, isEmptyColor, parseColors, runSVGO } from '@iconify/tools'
import { getIcons, getIconsCSS, stringToIcon } from '@iconify/utils'

// Simulate CommonJS globals
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const require = createRequire(import.meta.url)

const sources = {
  json: [
    require.resolve('@iconify/json/json/ri.json'),
    {
      filename: require.resolve('@iconify/json/json/line-md.json'),
      icons: ['home-twotone-alt', 'github', 'document-list', 'document-code', 'image-twotone']
    }
  ],
  icons: [
    'bx-basket',
    'bi-airplane-engines',
    'tabler-anchor',
    'uit-adobe-alt',
    'twemoji-auto-rickshaw'
  ],
  svg: [
    // Uncomment if needed:
    /*
    {
      dir: 'src/assets/iconify-icons/svg',
      monotone: false,
      prefix: 'custom'
    },
    {
      dir: 'src/assets/iconify-icons/emojis',
      monotone: false,
      prefix: 'emoji'
    }
    */
  ]
}

const target = join(__dirname, 'generated-icons.css')

;(async function () {
  try {
    await fs.mkdir(dirname(target), { recursive: true })
  } catch {}

  const allIcons = []

  // Convert `icons` list to organized JSON input
  if (sources.icons) {
    const sourcesJSON = sources.json || (sources.json = [])
    const organizedList = organizeIconsList(sources.icons)

    for (const prefix in organizedList) {
      const filename = require.resolve(`@iconify/json/json/${prefix}.json`)
      sourcesJSON.push({ filename, icons: organizedList[prefix] })
    }
  }

  // Load JSON icons
  if (sources.json) {
    for (const item of sources.json) {
      const filename = typeof item === 'string' ? item : item.filename
      const content = JSON.parse(await fs.readFile(filename, 'utf8'))

      if (typeof item !== 'string' && item.icons?.length) {
        const filtered = getIcons(content, item.icons)
        if (!filtered) throw new Error(`Missing icons in ${filename}`)
        allIcons.push(filtered)
      } else {
        allIcons.push(content)
      }
    }
  }

  // Load SVG icons
  if (sources.svg) {
    for (const source of sources.svg) {
      const iconSet = await importDirectory(source.dir, { prefix: source.prefix })

      await iconSet.forEach(async (name, type) => {
        if (type !== 'icon') return

        const svg = iconSet.toSVG(name)
        if (!svg) return iconSet.remove(name)

        try {
          await cleanupSVG(svg)

          if (source.monotone) {
            await parseColors(svg, {
              defaultColor: 'currentColor',
              callback: (attr, colorStr, color) =>
                !color || isEmptyColor(color) ? colorStr : 'currentColor'
            })
          }

          await runSVGO(svg)
        } catch (err) {
          console.error(`Error parsing ${name} in ${source.dir}:`, err)
          iconSet.remove(name)
          return
        }

        iconSet.fromSVG(name, svg)
      })

      allIcons.push(iconSet.export())
    }
  }

  // Generate CSS from icon sets
  const cssContent = allIcons
    .map(iconSet =>
      getIconsCSS(iconSet, Object.keys(iconSet.icons), {
        iconSelector: '.{prefix}-{name}'
      })
    )
    .join('\n')

  await fs.writeFile(target, cssContent, 'utf8')
  console.log(`✅ CSS saved to ${target}`)
})().catch(console.error)

// Utility: group icons by prefix
function organizeIconsList(icons) {
  const sorted = {}
  for (const icon of icons) {
    const item = stringToIcon(icon)
    if (!item) continue
    const prefix = item.prefix
    const name = item.name
    if (!sorted[prefix]) sorted[prefix] = []
    if (!sorted[prefix].includes(name)) sorted[prefix].push(name)
  }
  return sorted
}
