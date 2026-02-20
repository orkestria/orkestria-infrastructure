const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const OpenAI = require('openai');
const fs = require('node:fs');
const path = require('node:path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

if (!process.env.OPENAI_API_KEY) {
  console.warn('AVISO: OPENAI_API_KEY no está definida.');
}

// Cargar contexto
let CONTEXT = 'Eres un asistente experto de OrkestrIA.';
try {
  const ctxPath = path.join(__dirname, 'context.txt');
  if (fs.existsSync(ctxPath)) {
    CONTEXT = fs.readFileSync(ctxPath, 'utf8').trim();
  }
} catch (e) {
  console.error('No se pudo leer context.txt:', e.message);
}

const MODEL = 'gpt-4o-mini';

// CORS
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map(o => o.trim())
  : ['http://localhost:3000'];

app.use(cors({ origin: allowedOrigins }));

// Seguridad: cabeceras HTTP
app.use(helmet());

// Límite de tamaño de body
app.use(express.json({ limit: '10kb' }));

// Rate limiting: 60 peticiones por IP cada 15 minutos
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
  message: { status: 'error', message: 'Demasiadas peticiones. Inténtalo más tarde.' }
});

// Rate limiting más estricto para el endpoint de IA
const aiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { status: 'error', message: 'Límite de consultas alcanzado. Inténtalo más tarde.' }
});

app.use(limiter);

// Ruta de health check
app.get('/', (req, res) => {
  res.json({ message: 'Backend de OrkestrIA funcionando' });
});

// Endpoint del asistente
app.post('/api/asistente', aiLimiter, async (req, res) => {
  try {
    const { companyInfo, message } = req.body;

    // Validación de input
    const rawText = message || companyInfo || '';
    if (typeof rawText !== 'string') {
      return res.status(400).json({ status: 'error', message: 'Entrada no válida.' });
    }
    const userText = rawText.trim().slice(0, 2000) || 'Hola';

    const completion = await openai.chat.completions.create({
      model: MODEL,
      messages: [
        { role: 'system', content: CONTEXT },
        { role: 'user', content: userText }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    const text = completion.choices[0].message.content;

    res.json({
      status: 'ok',
      message: text,
      model: MODEL
    });
  } catch (error) {
    console.error('Error en /api/asistente:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Error al procesar la solicitud. Inténtalo de nuevo.'
    });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
