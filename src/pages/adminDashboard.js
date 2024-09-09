import React, { useState } from 'react';
import { Container, Box, Typography, Button, List, ListItem, ListItemText, Divider, TextField } from '@mui/material';
import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, name: 'Maria Silva', date: '2024-09-15', time: '14:00' },
    { id: 2, name: 'João Souza', date: '2024-09-16', time: '10:00' },
    // Adicione mais agendamentos aqui
  ]);
  const [blockedDays, setBlockedDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleBlockDay = () => {
    if (selectedDate) {
      setBlockedDays([...blockedDays, selectedDate]);
      alert(`Dia ${selectedDate} bloqueado!`);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Painel Administrativo
        </Typography>

        {/* Lista de Agendamentos */}
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h6">Agendamentos</Typography>
          <List>
            {appointments.map((appointment) => (
              <React.Fragment key={appointment.id}>
                <ListItem>
                  <ListItemText
                    primary={`${appointment.name} - ${appointment.date} às ${appointment.time}`}
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Box>

        {/* Calendário para bloquear dias */}
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h6">Bloquear Dias no Calendário</Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateCalendar
              value={selectedDate}
              onChange={(newDate) => setSelectedDate(newDate)}
            />
          </LocalizationProvider>

          <Button
            variant="contained"
            color="secondary"
            sx={{ marginTop: 2 }}
            onClick={handleBlockDay}
          >
            Bloquear Dia
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
