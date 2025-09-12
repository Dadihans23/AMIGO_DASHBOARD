'use client'

// Importations React
import { useState } from 'react'

// Importations MUI
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

// Variables
const initialData = {
  firstName: 'Aissatou',
  lastName: 'Soglo',
  email: 'aissatou.soglo@exemple.com',
  organization: 'Soglo Enterprises',
  phoneNumber: '+229 21 45 67 89',
  address: '456 Avenue des Martyrs, Cotonou, Bénin',
  state: 'Atlantique',
  zipCode: '01 BP 1235',
  offer: '' // Nouveau champ pour le pourcentage
}

const AccountDetails = () => {
  // États
  const [formData, setFormData] = useState(initialData) // Préremplir avec initialData
  const [fileInput, setFileInput] = useState('')
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')
  const [offerError, setOfferError] = useState(false) // État pour gérer l'erreur du champ offre

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value })

    if (field === 'offer' && value) {
      setOfferError(false) // Réinitialiser l'erreur si le champ est rempli
    }
  }

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return emailPattern.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateEmail(formData.email)) {
      alert('Veuillez entrer un email valide.')

      return
    }

    if (!formData.offer) {
      setOfferError(true) // Définir l'erreur si le champ offre est vide

      return
    }

    console.log('Données du formulaire:', formData) // Affiche les données dans la console
  }

  const handleFileInputChange = file => {
    const reader = new FileReader()
    const { files } = file.target

    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])

      if (reader.result !== null) {
        setFileInput(reader.result)
      }
    }
  }

  const handleFileInputReset = () => {
    setFileInput('')
    setImgSrc('/images/avatars/1.png')
  }

  return (
    <Card>
      <CardContent className='mbe-5'>
        <div className='flex max-sm:flex-col items-center gap-6'>
          <img height={100} width={100} className='rounded' src={imgSrc} alt='Profil' />
          <div className='flex flex-grow flex-col gap-4'>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button component='label' size='small' variant='contained' htmlFor='account-settings-upload-image'>
                Télécharger une nouvelle photo
                <input
                  hidden
                  type='file'
                  value={fileInput}
                  accept='image/png, image/jpeg'
                  onChange={handleFileInputChange}
                  id='account-settings-upload-image'
                />
              </Button>
              <Button size='small' variant='outlined' color='error' onClick={handleFileInputReset}>
                Réinitialiser
              </Button>
            </div>
            <Typography>Formats JPG, GIF ou PNG autorisés. Taille max de 800K</Typography>
          </div>
        </div>
      </CardContent>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Prénom'
                value={formData.firstName}
                placeholder='Aissatou'
                onChange={e => handleFormChange('firstName', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Nom de famille'
                value={formData.lastName}
                placeholder='Soglo'
                onChange={e => handleFormChange('lastName', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Email'
                value={formData.email}
                placeholder='aissatou.soglo@exemple.com'
                onChange={e => handleFormChange('email', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Organisation'
                value={formData.organization}
                placeholder='Soglo Enterprises'
                onChange={e => handleFormChange('organization', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Numéro de téléphone'
                value={formData.phoneNumber}
                placeholder='+229 21 45 67 89'
                onChange={e => handleFormChange('phoneNumber', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Adresse'
                value={formData.address}
                placeholder='Adresse'
                onChange={e => handleFormChange('address', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='État'
                value={formData.state}
                placeholder='Atlantique'
                onChange={e => handleFormChange('state', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type='text'
                label='Code postal'
                value={formData.zipCode}
                placeholder='01 BP 1234'
                onChange={e => handleFormChange('zipCode', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type='number'
                label='Offre Ristourne (%)'
                value={formData.offer}
                placeholder='Ex: 20'
                onChange={e => {
                  const value = e.target.value;

                  handleFormChange('offer', value);
                  setOfferError(value === '' || value < 0 || value > 100); // Validation pour le pourcentage
                }}
                error={offerError} // Active l'erreur si nécessaire
                helperText={offerError ? 'Veuillez entrer un pourcentage valide entre 0 et 100.' : ''} // Message d'erreur
              />
            </Grid>


            <Grid item xs={12} className='flex gap-4 flex-wrap'>
              <Button variant='contained' type='submit'>
                Enregistrer les modifications
              </Button>
              <Button variant='outlined' type='reset' color='secondary' onClick={() => setFormData(initialData)}>
                Réinitialiser
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default AccountDetails
