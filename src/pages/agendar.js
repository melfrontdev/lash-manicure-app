import React, { useState } from 'react';
import { Container, Box, Typography, IconButton, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import AdapterDateFns from '@mui/x-date-pickers/AdapterDateFns';
import dateFnsLocalizer from 'date-fns'; // Verifique se isso está correto

const Agendar = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleBack = () => {
    // Função para voltar para a página anterior
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
