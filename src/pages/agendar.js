// src/pages/agendar.js
import React, { useState } from 'react';
import { Container, Button, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'; // Importação necessária
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; // Adaptador de datas
import { useRouter } from 'next/router';

export default function Agendar() {
  const [local, setLocal] = useState('');
  const [servico, setServico] = useState('');
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [etapa, setEtapa] = useState(1); // Etapas: 1 = Escolha Local, 2 = Escolha Serviço, 3 = Calendário, 4 = Confirmação
  const router = useRouter();

  const handleLocalChange = (event) => {
    setLocal(event.target.value);
    setEtapa(2);
  };

  const handleServicoChange = (event) => {
    setServico(event.target.value);
    setEtapa(3);
  };

  const handleDataChange = (newDate) => {
    setDataSelecionada(newDate);
    setEtapa(4);
  };

  const handleConfirmarAgendamento = () => {
    // Aqui você pode enviar os dados para o backend
    router.push('/meus-agendamentos');
  };

  return (
    <Container maxWidth="sm">
      {etapa === 1 && (
        <>
          <Typography variant="h6">Escolha o Local de Atendimento</Typography>
          <FormControl component="fieldset">
            <RadioGroup value={local} onChange={handleLocalChange}>
              <FormControlLabel value="salon" control={<Radio />} label="No Salão" />
              <FormControlLabel value="home" control={<Radio />} label="A Domicílio" />
            </RadioGroup>
          </FormControl>
        </>
      )}

      {etapa === 2 && (
        <>
          <Typography variant="h6">Escolha o Tipo de Serviço</Typography>
          <FormControl component="fieldset">
            <RadioGroup value={servico} onChange={handleServicoChange}>
              <FormControlLabel value="lashdesign" control={<Radio />} label="Lash Design" />
              <FormControlLabel value="manicure" control={<Radio />} label="Manicure" />
              <FormControlLabel value="cabeleireiro" control={<Radio />} label="Cabeleireiro" />
            </RadioGroup>
          </FormControl>
        </>
      )}

      {etapa === 3 && (
        <>
          <Typography variant="h6">Selecione uma Data Disponível</Typography>
          {/* Adicionando LocalizationProvider */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={dataSelecionada}
              onChange={handleDataChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </>
      )}

      {etapa === 4 && (
        <>
          <Typography variant="h6">Confirme as Informações do Agendamento</Typography>
          <Box>
            <Typography>Local: {local === 'salon' ? 'No Salão' : 'A Domicílio'}</Typography>
            <Typography>Serviço: {servico}</Typography>
            <Typography>Data: {dataSelecionada ? dataSelecionada.toLocaleDateString() : 'Nenhuma data selecionada'}</Typography>
          </Box>
          <Box mt={2}>
            <Button variant="contained" onClick={handleConfirmarAgendamento}>
              Confirmar Agendamento
            </Button>
            <Button variant="outlined" onClick={() => setEtapa(3)} style={{ marginLeft: '10px' }}>
              Alterar Data
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
}

