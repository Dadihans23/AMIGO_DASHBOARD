// src/hooks/useUserRole.js
'use client'

import { usePathname } from 'next/navigation'

export const useUserRole = () => {
  const pathname = usePathname()

  // Définir les rôles selon les routes
  const getUserRole = () => {
    // Routes d'administration
    if (pathname.startsWith('/amigo-dash')) {
      return 'admin'
    }
    
    // Routes de client (si vous en avez plus tard)
    if (pathname.startsWith('/client-dash')) {
      return 'client'
    }
    
    // Par défaut, toutes les autres routes sont pour les marchands
    return 'merchant'
  }

  const role = getUserRole()

  return {
    role,
    isAdmin: role === 'admin',
    isMerchant: role === 'merchant',
    isClient: role === 'client',
    
    // Helper functions pour des cas plus complexes
    canAccessAdminFeatures: () => role === 'admin',
    canAccessMerchantFeatures: () => ['admin', 'merchant'].includes(role),
    canAccessClientFeatures: () => role === 'client'
  }
}