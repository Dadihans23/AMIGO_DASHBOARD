// // MUI Imports
// import Chip from '@mui/material/Chip'
// import { useTheme } from '@mui/material/styles'

// // Third-party Imports
// import PerfectScrollbar from 'react-perfect-scrollbar'

// // Component Imports
// import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'

// // Hook Imports
// import useVerticalNav from '@menu/hooks/useVerticalNav'

// // Styled Component Imports
// import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// // Style Imports
// import menuItemStyles from '@core/styles/vertical/menuItemStyles'
// import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

// const RenderExpandIcon = ({ open, transitionDuration }) => (
//   <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
//     <i className='ri-arrow-right-s-line' />
//   </StyledVerticalNavExpandIcon>
// )

// const VerticalMenu = ({ scrollMenu }) => {
//   // Hooks
//   const theme = useTheme()
//   const { isBreakpointReached, transitionDuration } = useVerticalNav()
//   const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

//   return (
//     // eslint-disable-next-line lines-around-comment
//     /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
//     <ScrollWrapper
//       {...(isBreakpointReached
//         ? {
//             className: 'bs-full overflow-y-auto overflow-x-hidden',
//             onScroll: container => scrollMenu(container, false)
//           }
//         : {
//             options: { wheelPropagation: false, suppressScrollX: true },
//             onScrollY: container => scrollMenu(container, true)
//           })}
//     >
//       {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
//       {/* Vertical Menu */}
//       <Menu
//         menuItemStyles={menuItemStyles(theme)}
//         renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
//         renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
//         menuSectionStyles={menuSectionStyles(theme)}
//       >
//         <MenuSection label='Amigo|Marchand'>
//           <MenuItem href='/' icon={<i className='ri-home-smile-line' />}>
//             Tableau de bord
//           </MenuItem>

//           <MenuItem href='/transactions' icon={<i className='ri-exchange-dollar-line' />}>
//             Transactions
//           </MenuItem>

//           <MenuItem href='/statistiques' icon={<i className='ri-bar-chart-line' />}>
//             Statistiques
//           </MenuItem>
//           <MenuItem href='/account-settings' icon={<i className='ri-user-settings-line' />}>
//             Gestion Compte
//           </MenuItem>

//           {/* <SubMenu label='Miscellaneous' icon={<i className='ri-question-line' />}>
//             <MenuItem href='/error' target='_blank'>
//               Error
//             </MenuItem>
//             <MenuItem href='/under-maintenance' target='_blank'>
//               Under Maintenance
//             </MenuItem>
//           </SubMenu> */}
//           {/* <MenuItem href='/card-basic' icon={<i className='ri-bar-chart-box-line' />}>
//             Cards
//           </MenuItem> */}
//         </MenuSection>
//         <MenuSection label='Administration Amigo'>
//           <MenuItem href='/amigo-dash' icon={<i className='ri-dashboard-line' />}>
//             Tableau de Bord
//           </MenuItem>

//           <SubMenu label='Finances' icon={<i className='ri-money-dollar-circle-line' />}>
//             <MenuItem href='/amigo-dash/transactions' target='_blank'>
//               Transactions
//             </MenuItem>
//             <MenuItem href='/amigo-dash/ristournes' target='_blank'>
//               Ristournes Marchand
//             </MenuItem>
//           </SubMenu>

//           <SubMenu label='Gestion Comptes' icon={<i className='ri-user-2-line' />}>
//             <MenuItem href='/amigo-dash/merchants' target='_blank'>
//               Gérer les Marchands
//             </MenuItem>
//             <MenuItem href='/amigo-dash/userprofile' target='_blank'>
//               Gérer les Utilisateurs
//             </MenuItem>
//           </SubMenu>



//           <MenuItem href='/admin-stats' icon={<i className='ri-bar-chart-horizontal-line' />}>
//             Statistiques et Rapports
//           </MenuItem>
//           <MenuItem href='/admin-offers' icon={<i className='ri-price-tag-line' />}>
//             Gestion des Offres
//           </MenuItem>
//         </MenuSection>

//       </Menu>
//     </ScrollWrapper>
//   )
// }

// export default VerticalMenu



// src/components/layout/vertical/VerticalMenu.jsx
'use client'

// MUI Imports
import Chip from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Component Imports
import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'
import { useUserRole } from '@/hooks/useUserRole'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

const RenderExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ scrollMenu }) => {
  // Hooks
  const theme = useTheme()
  const { isBreakpointReached, transitionDuration } = useVerticalNav()
  const { isAdmin, isMerchant, isClient, role } = useUserRole()
  
  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      <Menu
        menuItemStyles={menuItemStyles(theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(theme)}
      >
        
        {/* 🔹 SIDEBAR MARCHAND */}
        {isMerchant && (
          <MenuSection label='Amigo|Marchand'>
            <MenuItem href='/' icon={<i className='ri-home-smile-line' />}>
              Tableau de bord
            </MenuItem>

            <MenuItem href='/transactions' icon={<i className='ri-exchange-dollar-line' />}>
              Transactions
            </MenuItem>

            <MenuItem href='/cashbackUser'  icon={<i className='ri-exchange-dollar-line' />}>
                cashback utilisateur
            </MenuItem>
            <MenuItem href='/cashbackMarchand'  icon={<i className='ri-exchange-dollar-line' />}>
                Mon Cashback
            </MenuItem>
            <MenuItem href='/statistiques' icon={<i className='ri-bar-chart-line' />}>
              Statistiques
            </MenuItem>
            
            <MenuItem href='/account-settings' icon={<i className='ri-user-settings-line' />}>
              Gestion Compte
            </MenuItem>
            <MenuItem href='/notifications'  icon={<i className='ri-notification-line' />}>
                Notififications
            </MenuItem>
          </MenuSection>
        )}

        {/* 🔹 SIDEBAR ADMIN */}
        {isAdmin && (
          <MenuSection label='Administration Amigo'>
            <MenuItem href='/amigo-dash' icon={<i className='ri-dashboard-line' />}>
              Tableau de Bord
            </MenuItem>

            <SubMenu label='Marchand' icon={<i className='ri-money-dollar-circle-line' />}>
              <MenuItem href='/amigo-dash/merchants'>
                Marchand
              </MenuItem>
              <MenuItem href='/amigo-dash/SalesManagement'>
                Ventes totales
              </MenuItem>
               <MenuItem href='/amigo-dash/categories'>
                Ajouter une categorie
              </MenuItem>
            </SubMenu>

            <SubMenu label='Utilisateur' icon={<i className='ri-money-dollar-circle-line' />}>
              <MenuItem href='/amigo-dash/userprofile'>
                Liste des utilisateurs
              </MenuItem>
              <MenuItem href='/amigo-dash/purchasesManagement'>
                  Achat totales
              </MenuItem>
            </SubMenu>

            <SubMenu label='Finances' icon={<i className='ri-money-dollar-circle-line' />}>
              <MenuItem href='/amigo-dash/transactions'>
                Transactions
              </MenuItem>
              <MenuItem href='/amigo-dash/ristournes'>
                Ristournes Marchand
              </MenuItem>
              <MenuItem href='/amigo-dash/revenueAmigo'>
                Revenue Amigo
              </MenuItem>
               <MenuItem href='/amigo-dash/usercashback'>
                Cashback utilisateurs
              </MenuItem>
            </SubMenu>

            <SubMenu label='Alerte et Action' icon={<i className='ri-notification-line' />}>
              <MenuItem href='/amigo-dash/notifications'>
                Notififications
              </MenuItem>
              
            </SubMenu>

            {/* <SubMenu label='Gestion Comptes' icon={<i className='ri-user-2-line' />}>
              <MenuItem href='/amigo-dash/merchants'>
                Gérer les Marchands
              </MenuItem>
              <MenuItem href='/amigo-dash/userprofile'>
                Gérer les Utilisateurs
              </MenuItem>
            </SubMenu> */}

            <MenuItem href='/amigo-dash/stats' icon={<i className='ri-bar-chart-horizontal-line' />}>
              Statistiques et Rapports
            </MenuItem>
{/*             
            <MenuItem href='/amigo-dash/offers' icon={<i className='ri-price-tag-line' />}>
              Gestion des Offres
            </MenuItem> */}
          </MenuSection>
        )}

        {/* 🔹 SIDEBAR CLIENT (pour le futur) */}
        {isClient && (
          <MenuSection label='Amigo|Client'>
            <MenuItem href='/client-dash' icon={<i className='ri-user-line' />}>
              Mon Profil
            </MenuItem>
            
            <MenuItem href='/client-dash/wallet' icon={<i className='ri-wallet-line' />}>
              Mon Wallet
            </MenuItem>
            
            <MenuItem href='/client-dash/rewards' icon={<i className='ri-gift-line' />}>
              Mes Ristournes
            </MenuItem>
          </MenuSection>
        )}

      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu