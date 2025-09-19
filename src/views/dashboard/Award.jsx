// MUI Imports

import Link from 'next/link'
  
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Award = () => {
  return (
    <Card>
      <CardContent className='flex flex-col gap-2 relative items-start'>
        <div>
          <Typography variant='h5'>Hello Harlen </Typography>
          <Typography>Bienvenue sur votre tableau de bord marchand !</Typography>
        </div>
        <div>
          <Typography variant='h6' >
            Montant dû
          </Typography>
          <Typography variant='h4' color='primary'>
            42.8k cfa
          </Typography>
        </div>
        <Button size='small' variant='contained' component={Link} href='/statistiques'>
          En savoir plus
        </Button>

        <img
          src='/images/profil/verify.png'
          alt='trophy image'
          height={102}
          className='absolute inline-end-7 bottom-6'
        />
        <Typography className='absolute inline-end-5 bottom-4'> Compte Vérifié</Typography>

        {/* <Link href='/' className='text-red-500'>
      Completer la verification

    </Link> */}
      </CardContent>
    </Card>
  )
}

export default Award
