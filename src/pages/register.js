import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Grid, Link } from '@mui/material';
import { useRouter } from 'next/router';

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState('');  // Novo campo para o nome
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({
    cep: '',
    street: '',
    number: '',
    neighborhood: '',
    reference: '',
    city: ''
  });
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Lógica para registro do usuário
    if (password === confirmPassword) {
      console.log('Register:', {
        name,   // Incluindo o nome no registro
        email,
        phone,
        address,
        password
      });
      router.push('/login'); // Redirecionar após registro bem-sucedido
    } else {
      alert('Senhas não coincidem');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          textAlign: 'center',
          marginTop: 4,
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: '#fff',
          maxHeight: '100vh',      // Para garantir que o conteúdo não ultrapasse a altura da tela
          overflowY: 'auto'        // Permite scroll caso o conteúdo seja maior que a tela
        }}
      >
        <Typography variant="h5" gutterBottom>
          Registrar
        </Typography>

        <TextField
          label="Nome"
          type="text"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Telefone (WhatsApp)"
          type="tel"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          label="CEP"
          type="text"
          fullWidth
          margin="normal"
          value={address.cep}
          onChange={(e) => setAddress({ ...address, cep: e.target.value })}
        />
        <TextField
          label="Rua"
          type="text"
          fullWidth
          margin="normal"
          value={address.street}
          onChange={(e) => setAddress({ ...address, street: e.target.value })}
        />
        <TextField
          label="Número"
          type="text"
          fullWidth
          margin="normal"
          value={address.number}
          onChange={(e) => setAddress({ ...address, number: e.target.value })}
        />
        <TextField
          label="Bairro"
          type="text"
          fullWidth
          margin="normal"
          value={address.neighborhood}
          onChange={(e) => setAddress({ ...address, neighborhood: e.target.value })}
        />
        <TextField
          label="Referência"
          type="text"
          fullWidth
          margin="normal"
          value={address.reference}
          onChange={(e) => setAddress({ ...address, reference: e.target.value })}
        />
        <TextField
          label="Cidade"
          type="text"
          fullWidth
          margin="normal"
          value={address.city}
          onChange={(e) => setAddress({ ...address, city: e.target.value })}
        />
        <TextField
          label="Senha"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirmar Senha"
          type="password"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
          onClick={handleRegister}
        >
          Registrar
        </Button>
        <Grid container justifyContent="center" marginTop={2}>
          <Link href="/login" underline="none">
            Já tem uma conta? Faça login
          </Link>
        </Grid>
      </Box>
    </Container>
  );
};

export default Register;
