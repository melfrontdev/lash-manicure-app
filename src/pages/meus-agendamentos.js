// src/pages/meus-agendamentos.js (Next.js) ou src/MeusAgendamentos.js (React Puro)
import React, { useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, IconButton, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router'; // Para navegação

export default function MeusAgendamentos() {
  const router = useRouter(); // Para navegação
  const [agendamentos, setAgendamentos] = useState([
    { id: 1, data: '2024-09-05', hora: '09:00', tipo: 'No Salão' },
    // Adicione mais agendamentos conforme necessário
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedAgendamento, setSelectedAgendamento] = useState(null);

  const handleDeleteClick = (agendamento) => {
    setSelectedAgendamento(agendamento);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedAgendamento(null);
  };

  const handleConfirmDelete = () => {
    setAgendamentos(agendamentos.filter(a => a.id !== selectedAgendamento.id));
    handleCloseDialog();
  };

  const handleReagendarClick = (agendamento) => {
    // Navegar para a tela de agendamento com dados do agendamento selecionado
    router.push('/agendar');
  };

  const handleBack = () => {
    router.back(); // Volta para a página anterior
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', marginTop: 4, position: 'relative' }}>
        <IconButton onClick={handleBack} sx={{ position: 'absolute', top: 16, left: 16 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" gutterBottom>
          Meus Agendamentos
        </Typography>

        <List>
          {agendamentos.map((agendamento) => (
            <ListItem key={agendamento.id}>
              <ListItemText
                primary={`${agendamento.data} - ${agendamento.hora} (${agendamento.tipo})`}
              />
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteClick(agendamento)}>
                <DeleteIcon />
              </IconButton>
              <IconButton edge="end" aria-label="edit" onClick={() => handleReagendarClick(agendamento)}>
                <EditIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Confirmar Cancelamento</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Você tem certeza que deseja cancelar este atendimento?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancelar</Button>
            <Button onClick={handleConfirmDelete} color="primary">Confirmar</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
}
