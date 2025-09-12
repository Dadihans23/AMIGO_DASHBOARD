// "use client";
'use client'
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Notifications = () => {
  const [feedback, setFeedback] = useState('')
  const [responses, setResponses] = useState([])

  const handleFeedbackSubmit = e => {
    e.preventDefault()

    if (feedback.trim()) {
      setResponses([...responses, feedback])
      setFeedback('')
    }
  }

  return (
    <Card>
      <CardHeader title='Feedback et Support' />
      <CardContent>
        <Grid container spacing={2}>
          {/* Avis et feedback des clients */}
          <Grid item xs={12}>
            <Card variant='outlined'>
              <CardContent>
                <Typography variant='h6'>Avis et feedback des clients</Typography>
                <Typography>Nous apprécions vos retours et suggestions pour améliorer notre service.</Typography>
                <form onSubmit={handleFeedbackSubmit} style={{ marginTop: '16px' }}>
                  <TextField
                    value={feedback}
                    onChange={e => setFeedback(e.target.value)}
                    label='Votre avis'
                    variant='outlined'
                    fullWidth
                    multiline
                    rows={3}
                    required
                  />
                  <Button type='submit' variant='contained' color='primary' style={{ marginTop: '8px' }}>
                    Soumettre
                  </Button>
                </form>
                <div style={{ marginTop: '16px' }}>
                  {responses.length > 0 ? (
                    responses.map((resp, index) => (
                      <Typography key={index} variant='body2' style={{ marginTop: '4px' }}>
                        {resp}
                      </Typography>
                    ))
                  ) : (
                    <Typography variant='body2'>Aucun feedback disponible.</Typography>
                  )}
                </div>
              </CardContent>
            </Card>
          </Grid>

          {/* Réponses et résolutions de problèmes clients (FAQ) */}
          <Grid item xs={12}>
            <Card variant='outlined'>
              <CardContent>
                <Typography variant='h6'>Réponses et résolutions de problèmes clients</Typography>
                <Typography>Voici quelques questions fréquentes et leurs réponses :</Typography>
                <div style={{ marginTop: '16px' }}>
                  <Typography variant='subtitle1'>
                    <strong>Q1 : Comment réinitialiser mon mot de passe ?</strong>
                  </Typography>
                  <Typography variant='body2'>
                    R : Vous pouvez réinitialiser votre mot de passe en cliquant sur  Mot de passe oublié  sur la page
                    de connexion.
                  </Typography>

                  <Typography variant='subtitle1' style={{ marginTop: '8px' }}>
                    <strong>Q2 : Que faire si je ne reçois pas d&apos;e-mail de confirmation ?</strong>
                  </Typography>
                  <Typography variant='body2'>
                    R : Vérifiez votre dossier de spam ou de courrier indésirable. Si l&apos;e-mail n&apos;est pas là, essayez de
                    le renvoyer.
                  </Typography>

                  <Typography variant='subtitle1' style={{ marginTop: '8px' }}>
                    <strong>Q3 : Comment contacter le support technique ?</strong>
                  </Typography>
                  <Typography variant='body2'>
                    R : Vous pouvez nous contacter par e-mail à support@example.com ou au numéro 01-23-45-67-89.
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>

          {/* Accès au support technique et assistance */}
          <Grid item xs={12}>
            <Card variant='outlined'>
              <CardContent>
                <Typography variant='h6'>Accès au support technique et assistance</Typography>
                <Typography>Contactez-nous pour toute assistance technique ou pour des questions.</Typography>
                <Typography>
                  Email : <a href='mailto:support@example.com'>support@example.com</a>
                </Typography>
                <Typography>
                  Téléphone : <strong>01-23-45-67-89</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Notifications
