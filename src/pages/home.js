import React from 'react';
import { Container, Box, Typography, Button, Link } from '@mui/material';
import Image from 'next/image';
import logo from '/public/logo.png'; // Ajuste o caminho da imagem conforme necessário

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        {/* Logo */}
        <Image src={logo} alt="Logo" width={150} height={150} />

        <Typography variant="h4" gutterBottom>
          Bem-vindo!
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Link href="/agendar" passHref>
            <Button variant="contained" color="primary">
              Agendar um horário
            </Button>
          </Link>
          <Link href="/meus-agendamentos" passHref>
            <Button variant="outlined" color="primary">
              Meus agendamentos
            </Button>
          </Link>
          <Link href="/meu-perfil" passHref>
            <Button variant="text" color="secondary">
              Meu Perfil
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
