import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Grid, Link } from '@mui/material';
import { useRouter } from 'next/router';

const Register = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);  // Etapa do registro
  const [name, setName] = useState('');  
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
    if (password === confirmPassword) {
      console.log('Register:', {
        name,
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

  // Função para avançar para o próximo passo
  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  // Função para voltar ao passo anterior
  const handleBack = () => {
    setStep(prev => prev - 1);
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
          maxHeight: '100vh',
          overflowY: 'auto'
        }}
      >
        <Typography variant="h5" gutterBottom>
          Registrar
        </Typography>

        {step === 1 && (
          <>
            <TextField
              label="Nome"
              type="text"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
              onClick={handleNext}
              disabled={!name}  // Desabilitar o botão se o campo estiver vazio
            >
              Próximo
            </Button>
          </>
        )}

        {step === 2 && (
          <>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
              onClick={handleNext}
              disabled={!email}
            >
              Próximo
            </Button>
            <Button
              variant="outlined"
              fullWidth
              sx={{ marginTop: 1 }}
              onClick={handleBack}
            >
              Voltar
            </Button>
          </>
        )}

        {step === 3 && (
          <>
            <TextField
              label="Telefone (WhatsApp)"
              type="tel"
              fullWidth
              margin="normal"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
              onClick={handleNext}
              disabled={!phone}
            >
              Próximo
            </Button>
            <Button
              variant="outlined"
              fullWidth
              sx={{ marginTop: 1 }}
              onClick={handleBack}
            >
              Voltar
            </Button>
          </>
        )}

        {step === 4 && (
          <>
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
            {/* Adicionar mais campos de endereço aqui */}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
              onClick={handleNext}
              disabled={!address.cep || !address.street || !address.number}
            >
              Próximo
            </Button>
            <Button
              variant="outlined"
              fullWidth
              sx={{ marginTop: 1 }}
              onClick={handleBack}
            >
              Voltar
            </Button>
          </>
        )}

        {step === 5 && (
          <>
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
              disabled={!password || !confirmPassword || password !== confirmPassword}
            >
              Registrar
            </Button>
            <Button
              variant="outlined"
              fullWidth
              sx={{ marginTop: 1 }}
              onClick={handleBack}
            >
              Voltar
            </Button>
          </>
        )}

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
