// src/pages/index.js
import Link from 'next/link';
import { Container, Typography, Button, Box } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
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
}
