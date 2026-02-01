const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'Backend de OrkestrIA funcionando' });
});

// Endpoint para el asistente
app.post('/api/asistente', (req, res) => {
  console.log('Solicitud recibida:', req.body);
  
  res.json({ 
    status: 'ok',
    message: 'Hola'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
