import React, { useState } from 'react';
import { Container, Button, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Box, TextField } from '@mui/material';
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
  };

  const handleServicoChange = (event) => {
    setServico(event.target.value);
  };

  const handleDataChange = (newDate) => {
    setDataSelecionada(newDate);
  };

  const handleConfirmarAgendamento = () => {
    // Aqui você pode enviar os dados para o backend
    router.push('/meus-agendamentos');
  };

  const handleVoltar = () => {
    if (etapa > 1) {
      setEtapa(etapa - 1); // Volta para a etapa anterior
    } else {
      router.back(); // Volta para a página anterior
    }
  };

  const handleProximo = () => {
    if (etapa === 1 && local) {
      setEtapa(2);
    } else if (etapa === 2 && servico) {
      setEtapa(3);
    }
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
            <Button variant="contained" onClick={handleProximo} disabled={!local}>
              Próximo
            </Button>
          </Box>
          {/* Botão de Voltar */}
      {etapa > 1 && (
        <Box mt={2}>
          <Button variant="outlined" onClick={handleVoltar}>
            Voltar
          </Button>
        </Box>
      )}
          
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
          <Box mt={2}>
            <Button variant="contained" onClick={handleProximo} disabled={!servico}>
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
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
          <Box mt={2}>
            <Button variant="contained" onClick={handleConfirmarAgendamento} disabled={!dataSelecionada}>
              Confirmar Agendamento
            </Button>
          </Box>
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

      {/* Botão de Voltar */}
      {etapa > 1 && (
        <Box mt={2}>
          <Button variant="outlined" onClick={handleVoltar}>
            Voltar
          </Button>
        </Box>
      )}
    </Container>
  );
}
