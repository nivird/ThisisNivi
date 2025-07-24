import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import apiRouter from './routes/api.js'; // ✅ Import the router

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

// Allow requests from your Vite frontend
app.use(cors({ origin: 'http://localhost:5173' }));

// Enable JSON parsing
app.use(express.json());

// ✅ Mount the API router
app.use('/api', apiRouter);

// Serve static frontend
app.use(express.static(path.join(__dirname, 'client/dist')));

// Catch-all to serve React SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
