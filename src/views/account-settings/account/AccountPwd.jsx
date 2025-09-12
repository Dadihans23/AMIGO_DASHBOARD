// Indique que ce composant est un composant client
'use client'
import { useState } from 'react'

// Importations MUI
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio'

import FormControlLabel from '@mui/material/FormControlLabel'



const AccountPwd = () => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isUpdating, setIsUpdating] = useState(false)

  const handlePasswordUpdate = () => {
    if (newPassword === confirmPassword) {
      console.log('Mot de passe mis à jour avec succès')
      
      // Logique pour mettre à jour le mot de passe
    } else {
      console.error('Les mots de passe ne correspondent pas')
    }
  }

  return (
    <Card>
      <CardHeader title='Mise à Jour du Mot de Passe' />
      <CardContent className='flex flex-col items-start gap-6'>
        <FormControlLabel
          control={
            <Radio
              checked={isUpdating}
              onChange={() => setIsUpdating(!isUpdating)} // Alterne l'état
            />
          }
          label='Mettre à jour mon mot de passe'
        />

        {isUpdating && (
          <>
            <TextField
              fullWidth
              label='Mot de Passe Actuel'
              type='password'
              value={currentPassword}
              onChange={e => setCurrentPassword(e.target.value)}
            />
            <TextField
              fullWidth
              label='Nouveau Mot de Passe'
              type='password'
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
            />
            <TextField
              fullWidth
              label='Confirmer le Nouveau Mot de Passe'
              type='password'
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
            <Button variant='contained' color='primary' onClick={handlePasswordUpdate}>
              Mettre à Jour le Mot de Passe
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  )
}

export default AccountPwd
