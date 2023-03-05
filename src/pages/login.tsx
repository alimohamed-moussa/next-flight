import React from 'react';
import Link from 'next/link';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { fontSize } from '../lib/theme/globals';

const Login = () => {
  return (
    <Box
      sx={{
        margin: '0 auto',
        width: '400px'
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography component='h1' variant='h5'>
          Sign In
        </Typography>
        <Box component='form' noValidate sx={{ mt: 3 }}>
          <TextField
            required
            fullWidth
            id='email'
            label='Email'
            name='email'
            autoComplete='email'
            sx={{ marginTop: '15px' }}
          />

          <TextField
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='new-password'
            sx={{ marginTop: '15px' }}
          />
          {/*     <Box sx={{ display: 'flex', marginTop: '15px', justifyContent: 'space-between', fontSize: fontSize.xl }}>
            <Typography component='span'>Pas encore de compte?</Typography>
            <Link href='/register'>Créer un compte</Link>
          </Box> */}

          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{
              pt: 1,
              pb: 1,
              textAlign: 'center',
              marginTop: '15px',
              textTransform: 'capitalize',
              fontSize: fontSize.xl
            }}
          >
            log in
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Login;
