import React, { useState } from 'react';
import { Container, Button, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Box, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useRouter } from 'next/router';
import { addMonths } from 'date-fns'; // Import para adicionar meses às datas

export default function Agendar({ isAdmin }) {
  const [local, setLocal] = useState('');
  const [servico, setServico] = useState('');
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [etapa, setEtapa] = useState(1);
  const router = useRouter();

  // Definindo a data mínima como o primeiro dia do mês atual
  const minDate = new Date(); // A data de hoje
  const maxDate = isAdmin ? addMonths(minDate, 3) : addMonths(minDate, 1); // Admin pode liberar até 3 meses à frente, cliente só 1 mês

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
    router.push('/meus-agendamentos');
  };

  return (
    <Container maxWidth="sm" className="centered">
      {etapa === 1 && (
        <>
          <Typography variant="h6">Escolha o Local de Atendimento</Typography>
          <FormControl component="fieldset">
            <RadioGroup value={local} onChange={handleLocalChange}>
              <FormControlLabel value="salon" control={<Radio />} label="No Salão" />
              <FormControlLabel value="home" control={<Radio />} label="A Domicílio" />
            </RadioGroup>
          </FormControl>
          <Box mt={2}>
            <Button variant="contained" onClick={() => setEtapa(2)} disabled={!local}>
              Próximo
            </Button>
          </Box>
        </>
      )}

      {etapa === 3 && (
        <>
          <Typography variant="h6">Selecione uma Data Disponível</Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={dataSelecionada}
              onChange={handleDataChange}
              minDate={minDate}
              maxDate={maxDate}
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
