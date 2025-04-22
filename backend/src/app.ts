import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth.routes';
import clienteRoutes from './routes/cliente.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/clientes', clienteRoutes);   // 👈 NUEVA RUTA

/* 404 */
app.use((_req, res) => res.status(404).json({ error: 'Ruta no encontrada.' }));

/* Handler de errores */
app.use((err: any, _req: express.Request, res: express.Response) => {
  console.error(err);
  res.status(500).json({ error: 'Error del servidor.' });
});

/* Server */
const PORT = process.env.PORT ?? 3001;
app.listen(PORT, () =>
  console.log(`🚀 Backend escuchando en http://localhost:${PORT}`),
);
