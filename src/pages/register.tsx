import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { fontSize } from '../lib/theme/globals';
import Link from 'next/link';
import { palette } from '../lib/theme/palette';

interface FormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>();

  const onSubmit = (data: FormInput) => {
    console.log(JSON.stringify(data));
  };

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
          Créer un compte
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          {/* firstName field */}
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                required
                fullWidth
                id='firstName'
                label='First Name'
                placeholder='First Name'
                sx={{ marginTop: '15px' }}
              />
            )}
            name='firstName'
            control={control}
            rules={{
              required: true
            }}
            defaultValue=''
          />
          {errors.firstName && (
            <Typography component='span' sx={{ color: palette.red.main }}>
              Ce champ est obligatoire.
            </Typography>
          )}

          {/* lastName field */}
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                required
                fullWidth
                id='lastName'
                label='Last Name'
                placeholder='Last Name'
                sx={{ marginTop: '15px' }}
              />
            )}
            name='lastName'
            control={control}
            rules={{
              required: true
            }}
            defaultValue=''
          />
          {errors.lastName && (
            <Typography component='span' sx={{ color: palette.red.main }}>
              Ce champ est obligatoire.
            </Typography>
          )}

          {/* phone field */}
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                required
                fullWidth
                id='phone'
                label='Phone'
                sx={{ marginTop: '15px' }}
                placeholder='Ex. 0612345678'
              />
            )}
            name='phone'
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^[(]?(\d{3})[)]?[-|\s]?(\d{3})[-|\s]?(\d{4})$/,
                message:
                  'Votre N° de téléphone doit être valide car il est utilisé comme moyen de contact dans le cadre du suivi de votre dossier.'
              }
            }}
            defaultValue=''
          />
          {errors.phone && (
            <Typography component='span' sx={{ color: palette.red.main }}>
              Votre N° de téléphone portable doit être valide car il est utilisé comme moyen de contact dans le cadre du
              suivi de votre dossier.
            </Typography>
          )}

          {/* email field */}
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                required
                fullWidth
                id='email'
                label='Email'
                sx={{ marginTop: '15px' }}
                placeholder='Email'
              />
            )}
            name='email'
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Veuillez saisir une adresse email correcte.'
              }
            }}
            defaultValue=''
          />
          {errors.email && (
            <Typography component='span' sx={{ color: palette.red.main }}>
              Veuillez saisir une adresse email correcte.
            </Typography>
          )}

          {/* password field */}
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                required
                fullWidth
                id='password'
                label='Password'
                placeholder='Password'
                sx={{ marginTop: '15px' }}
              />
            )}
            name='password'
            control={control}
            rules={{
              required: true
            }}
            defaultValue=''
          />
          {errors.password && (
            <Typography component='span' sx={{ color: palette.red.main }}>
              Ce champ est obligatoire.
            </Typography>
          )}

          {/* links field */}
          <Box sx={{ display: 'flex', marginTop: '15px', justifyContent: 'space-between', fontSize: fontSize.xl }}>
            <Typography component='span' sx={{ fontSize: fontSize.xl }}>
              Avez-vous déjà un compte?
            </Typography>
            <Link href='/login'>Sign In</Link>
          </Box>

          {/* button field */}
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
            Sign up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Register;
