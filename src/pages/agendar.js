import React, { useState } from 'react';
import { Container, Box, Typography, IconButton, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, createTheme, ThemeProvider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useRouter } from 'next/router';
import Image from 'next/image';  // Importando Image do Next.js
import logo from '/public/logo.png';  // Certifique-se de que sua logo está em public/logo.png


const Agendar = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleBack = () => {
    router.back();
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Container maxWidth="sm">
          <Box sx={{ textAlign: 'center', marginTop: 4 }}>
            {/* Logo */}
            <Image src={logo} alt="Logo" width={150} height={150} />

            <IconButton onClick={handleBack} sx={{ position: 'absolute', top: 16, left: 16 }}>
              <ArrowBackIcon />
            </IconButton>

            <Typography variant="h5" gutterBottom>
              Agendar Horário
            </Typography>

            <Box>
              <Button onClick={() => handleOptionChange('salao')} variant="contained" color="primary">
                Atendimento no Salão
              </Button>
              <Button onClick={() => handleOptionChange('domicilio')} variant="contained" color="secondary">
                Atendimento a Domicílio
              </Button>
            </Box>

            {selectedOption && (
              <Box sx={{ marginTop: 4 }}>
                <DateCalendar />
                <Button variant="contained" color="primary" onClick={handleDialogOpen}>
                  Confirmar
                </Button>
                <Dialog open={openDialog} onClose={handleDialogClose}>
                  <DialogTitle>Confirmar Agendamento</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Você tem certeza que deseja agendar o atendimento para {selectedOption}?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleDialogClose}>Cancelar</Button>
                    <Button onClick={() => {
                      handleDialogClose();
                      // Adicione lógica para confirmar o agendamento
                    }} color="primary">
                      Confirmar
                    </Button>
                  </DialogActions>
                </Dialog>
              </Box>
            )}
          </Box>
        </Container>
      </LocalizationProvider>
  
  );
};

export default Agendar;
