import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Grid, Link } from '@mui/material';
import { useRouter } from 'next/router';

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Lógica para enviar o email de redefinição de senha
    console.log('Forgot Password:', email);
    router.push('/login'); // Redirecionar após envio bem-sucedido
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Esqueci Minha Senha
        </Typography>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleForgotPassword}>
          Enviar Redefinição de Senha
        </Button>
        <Grid container justifyContent="center" marginTop={2}>
          <Link href="/login" underline="none">
            Voltar para Login
          </Link>
        </Grid>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
