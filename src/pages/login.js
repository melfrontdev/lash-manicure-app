import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image'; // Importando Image do Next.js
import logo from '/public/logo.png'; // Ajuste o caminho da imagem conforme necessário

const Login = () => {
  const router = useRouter(); // Obtendo a instância do roteador
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica para autenticação do usuário
    console.log('Login:', email, password);

    // Redirecionar para a página inicial após o login bem-sucedido
    router.push('/home');
  };

  const handleForgotPassword = () => {
    router.push('/forgotpassword');
  };

  const handleRegister = () => {
    router.push('/register');
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          textAlign: 'center',
          marginTop: 4,
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: '#fff',
        }}
      >
        {/* Logo */}
        <Image src={logo} alt="Logo" width={150} height={150} />

        <Typography variant="h5" gutterBottom marginTop={2}>
          Login
        </Typography>

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
        <TextField
          label="Senha"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
          onClick={handleLogin}
        >
          Entrar
        </Button>
        <Grid container spacing={2} marginTop={2}>
          <Grid item xs={6}>
            <Button
              variant="text"
              color="secondary"
              fullWidth
              onClick={handleForgotPassword}
            >
              Esqueceu a senha?
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="text"
              color="primary"
              fullWidth
              onClick={handleRegister}
            >
              Não tem uma conta? Registre-se
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
