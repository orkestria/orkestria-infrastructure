# Backend OrkestrIA

Backend básico en Node.js/Express para OrkestrIA.

## Instalación

```bash
npm install
```

## Ejecución

### Modo desarrollo (con auto-reload):
```bash
npm run dev
```

### Modo producción:
```bash
npm start
```

El servidor se ejecutará en `http://localhost:3001`

## Endpoints

### POST /api/asistente
Recibe información de la empresa y devuelve una confirmación.

**Body:**
```json
{
  "companyInfo": "Descripción de la empresa"
}
```

**Respuesta:**
```json
{
  "status": "ok",
  "message": "Mensaje de confirmación"
}
```
