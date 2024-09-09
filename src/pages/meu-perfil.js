import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, IconButton, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import LockIcon from '@mui/icons-material/Lock';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router'; // Para navegação

export default function MeuPerfil() {
  const [perfil, setPerfil] = useState({
    nome: 'Cliente Exemplo',
    email: 'cliente@example.com',
    telefone: '(11) 99999-9999',
    senha: '',
    foto: '', // URL da foto de perfil
  });

  const [editMode, setEditMode] = useState({
    nome: false,
    email: false,
    telefone: false,
    senha: false,
  });

  const router = useRouter(); // Para navegação

  const handleEditClick = (field) => {
    setEditMode({ ...editMode, [field]: !editMode[field] });
  };

  const handleSaveClick = () => {
    // Aqui você pode implementar a lógica para salvar as alterações no servidor
    setEditMode({
      nome: false,
      email: false,
      telefone: false,
      senha: false,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfil({ ...perfil, [name]: value });
  };

  const handleBack = () => {
    router.back(); // Volta para a página anterior
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPerfil({ ...perfil, foto: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', marginTop: 4, position: 'relative' }}>
        <IconButton onClick={handleBack} sx={{ position: 'absolute', top: 16, left: 16 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" gutterBottom>
          Meu Perfil
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
          <label htmlFor="upload-photo">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-photo"
              type="file"
              onChange={handlePhotoUpload}
            />
            <IconButton component="span">
              <Avatar
                src={perfil.foto || '/default-profile.png'}
                sx={{ width: 100, height: 100 }}
              />
            </IconButton>
          </label>
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Nome"
            name="nome"
            value={perfil.nome}
            onChange={handleChange}
            fullWidth
            InputProps={{
              readOnly: !editMode.nome,
              endAdornment: (
                <IconButton onClick={() => handleEditClick('nome')}>
                  {editMode.nome ? <SaveIcon /> : <EditIcon />}
                </IconButton>
              ),
            }}
          />
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="E-mail"
            name="email"
            value={perfil.email}
            onChange={handleChange}
            fullWidth
            InputProps={{
              readOnly: !editMode.email,
              endAdornment: (
                <IconButton onClick={() => handleEditClick('email')}>
                  {editMode.email ? <SaveIcon /> : <EditIcon />}
                </IconButton>
              ),
            }}
          />
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Telefone"
            name="telefone"
            value={perfil.telefone}
            onChange={handleChange}
            fullWidth
            InputProps={{
              readOnly: !editMode.telefone,
              endAdornment: (
                <IconButton onClick={() => handleEditClick('telefone')}>
                  {editMode.telefone ? <SaveIcon /> : <EditIcon />}
                </IconButton>
              ),
            }}
          />
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Senha"
            name="senha"
            type="password"
            value={perfil.senha}
            onChange={handleChange}
            fullWidth
            InputProps={{
              readOnly: !editMode.senha,
              endAdornment: (
                <IconButton onClick={() => handleEditClick('senha')}>
                  {editMode.senha ? <SaveIcon /> : <LockIcon />}
                </IconButton>
              ),
            }}
          />
        </Box>

        {editMode.senha && (
          <Button variant="contained" onClick={handleSaveClick}>
            Salvar
          </Button>
        )}
      </Box>
    </Container>
  );
}
