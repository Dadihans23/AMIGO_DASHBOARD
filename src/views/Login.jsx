'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Alert from '@mui/material/Alert'

// Component Imports
import Logo from '@components/layout/shared/Logo'
import Illustrations from '@components/Illustrations'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

// API Imports
import { login } from '@/lib/api/login'

const Login = ({ mode }) => {
  // States
  const [formData, setFormData] = useState({
    phone_number_or_email: '',
    password: '',
  })
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  // Vars
  const darkImg = '/images/pages/auth-v1-mask-dark.png'
  const lightImg = '/images/pages/auth-v1-mask-light.png'

  // Hooks
  const router = useRouter()
  const authBackground = useImageVariant(mode, lightImg, darkImg)
  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const data = await login(formData)
      // Stocke les tokens et user_id
      localStorage.setItem('access_token', data.access)
      localStorage.setItem('refresh_token', data.refresh)
      localStorage.setItem('user_id', data.user_id)

      // Redirige selon require_password_change
      if (data.require_password_change) {
        router.push('/change-password')
      } else {
        router.push('/dashboard')
      }f
    } catch (err) {
      setError(err.error || 'Échec de la connexion')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center min-bs-[100dvh] relative p-6'>
      <Card className='flex flex-col sm:is-[450px]'>
        <CardContent className='p-6 sm:!p-12'>
          <Link href='/' className='flex justify-center items-center mbe-6'>
            <Logo />
          </Link>
          <div className='flex flex-col gap-5'>
            <div>
              <Typography variant='h4'>{`Bienvenue sur ${themeConfig.templateName}!👋🏻`}</Typography>
              <Typography className='mbs-1'>Veuillez vous connecter à votre compte et commencer l&apos;aventure</Typography>
            </div>
            {error && <Alert severity='error'>{error}</Alert>}
            <form noValidate autoComplete='off' onSubmit={handleSubmit} className='flex flex-col gap-5'>
              <TextField
                autoFocus
                fullWidth
                label='Téléphone ou Email'
                name='phone_number_or_email'
                value={formData.phone_number_or_email}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label='Mot de passe'
                name='password'
                id='outlined-adornment-password'
                type={isPasswordShown ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        size='small'
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={e => e.preventDefault()}
                      >
                        <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <div className='flex justify-between items-center gap-x-3 gap-y-1 flex-wrap'>
                <FormControlLabel control={<Checkbox />} label='Se souvenir de moi' />
                <Typography className='text-end' color='primary' component={Link} href='/forgot-password'>
                  Mot de passe oublié ?
                </Typography>
              </div>
              <Button
                fullWidth
                variant='contained'
                type='submit'
                disabled={loading}
              >
                {loading ? 'Connexion...' : 'Connexion'}
              </Button>
              <div className='flex justify-center items-center flex-wrap gap-2'>
                <Typography>Vous êtes nouveau sur notre plateforme ?</Typography>
                <Typography component={Link} href='/' color='primary'>
                  Contactez notre administrateur
                </Typography>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
      <Illustrations maskImg={{ src: authBackground }} />
    </div>
  )
}

export default Login


// 'use client'

// // React Imports
// import { useState } from 'react'

// // Next Imports
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'

// // MUI Imports
// import Card from '@mui/material/Card'
// import CardContent from '@mui/material/CardContent'
// import Typography from '@mui/material/Typography'
// import TextField from '@mui/material/TextField'
// import IconButton from '@mui/material/IconButton'
// import InputAdornment from '@mui/material/InputAdornment'
// import Checkbox from '@mui/material/Checkbox'
// import Button from '@mui/material/Button'
// import FormControlLabel from '@mui/material/FormControlLabel'
// import Divider from '@mui/material/Divider'

// // Component Imports
// import Logo from '@components/layout/shared/Logo'
// import Illustrations from '@components/Illustrations'

// // Config Imports
// import themeConfig from '@configs/themeConfig'

// // Hook Imports
// import { useImageVariant } from '@core/hooks/useImageVariant'

// const Login = ({ mode }) => {
//   // States
//   const [isPasswordShown, setIsPasswordShown] = useState(false)

//   // Vars
//   const darkImg = '/images/pages/auth-v1-mask-dark.png'
//   const lightImg = '/images/pages/auth-v1-mask-light.png'

//   // Hooks
//   const router = useRouter()
//   const authBackground = useImageVariant(mode, lightImg, darkImg)
//   const handleClickShowPassword = () => setIsPasswordShown(show => !show)

//   const handleSubmit = e => {
//     e.preventDefault()
//     router.push('/')
//   }

//   return (
//     <div className='flex flex-col justify-center items-center min-bs-[100dvh] relative p-6'>
//       <Card className='flex flex-col sm:is-[450px]'>
//         <CardContent className='p-6 sm:!p-12'>
//           <Link href='/' className='flex justify-center items-center mbe-6'>
//             <Logo />
//           </Link>
//           <div className='flex flex-col gap-5'>
//             <div>
//               <Typography variant='h4'>{`Bienvenue sur ${themeConfig.templateName}!👋🏻`}</Typography>
//               <Typography className='mbs-1'>Veuillez vous connecter à votre compte et commencer l&apos;aventure</Typography>
//             </div>
//             <form noValidate autoComplete='off' onSubmit={handleSubmit} className='flex flex-col gap-5'>
//               <TextField autoFocus fullWidth label='Email' />
//               <TextField
//                 fullWidth
//                 label='Mot de passe'
//                 id='outlined-adornment-password'
//                 type={isPasswordShown ? 'text' : 'password'}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position='end'>
//                       <IconButton
//                         size='small'
//                         edge='end'
//                         onClick={handleClickShowPassword}
//                         onMouseDown={e => e.preventDefault()}
//                       >
//                         <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
//                       </IconButton>
//                     </InputAdornment>
//                   )
//                 }}
//               />
//               <div className='flex justify-between items-center gap-x-3 gap-y-1 flex-wrap'>
//                 <FormControlLabel control={<Checkbox />} label='Se souvenir de moi' />
//                 <Typography className='text-end' color='primary' component={Link} href='/forgot-password'>
//                   Mot de passe oublié ?
//                 </Typography>
//               </div>
//               <Button component={Link} href='/' fullWidth variant='contained' type='submit'>
//                 Connexion
//               </Button>
//               <div className='flex justify-center items-center flex-wrap gap-2'>
//                 <Typography>Vous êtes nouveau sur notre plateforme ?</Typography>
//                 <Typography component={Link} href='/' color='primary'>
//                   Contactez notre administrateur
//                 </Typography>
//               </div>
//               {/* <Divider className='gap-3'>ou</Divider>
//               <div className='flex justify-center items-center gap-2'>
//                 <IconButton size='small' className='text-facebook'>
//                   <i className='ri-facebook-fill' />
//                 </IconButton>
//                 <IconButton size='small' className='text-twitter'>
//                   <i className='ri-twitter-fill' />
//                 </IconButton>
//                 <IconButton size='small' className='text-github'>
//                   <i className='ri-github-fill' />
//                 </IconButton>
//                 <IconButton size='small' className='text-googlePlus'>
//                   <i className='ri-google-fill' />
//                 </IconButton>
//               </div> */}
//             </form>
//           </div>
//         </CardContent>
//       </Card>
//       <Illustrations maskImg={{ src: authBackground }} />
//     </div>
//   )
// }

// export default Login
