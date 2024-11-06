'use client'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Image from 'next/image'
import SignUpForm from './(components)/SignUpForm'

export default function SignupPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Paper sx={{width: '90vw', height: '90vh', overflow: 'hidden'}}>
        <Stack direction="row-reverse">
          <Box
            display={{xs: 'none', md: 'none', lg: 'block'}}
            width="50%"
            height="100%"
          >
            <Image
              alt="Imágen decorativa"
              src="/stock/v6.jpg"
              width={4208}
              height={3120}
              style={{objectFit: 'cover', width: '100%', height: '90vh'}}
            />
          </Box>
          <Box
            width={{xs: '100%', md: '100%', lg: '50%'}}
            height="100%"
            padding={{xs: '20px', md: '30px', lg: '40px'}}
          >
            <SignUpForm />
          </Box>
        </Stack>
      </Paper>
    </Box>
  )
}
