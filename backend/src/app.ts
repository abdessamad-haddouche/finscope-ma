import express from 'express';
import type { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app: Application = express();

// ─── Security ─────────────────────────────────────────────────
app.use(helmet());
app.use(cors());

// ─── Body parsing ─────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Health check ─────────────────────────────────────────────
app.get('/health', (_req, res) => {
	res.status(200).json({ status: 'ok' });
});

export default app;