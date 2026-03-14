import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL;

// Rate limiting en memoria: 10 mensajes por IP cada 10 minutos
const WINDOW_MS = 10 * 60 * 1000; // 10 minutos
const MAX_REQUESTS = 10;

const ipStore = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipStore.get(ip);

  if (!entry || now > entry.resetAt) {
    ipStore.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) return true;

  entry.count++;
  return false;
}

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  );
}

export async function POST(req: NextRequest) {
  if (!BACKEND_URL) {
    return NextResponse.json({ status: 'error', message: 'Backend no configurado.' }, { status: 500 });
  }

  const ip = getClientIp(req);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { status: 'error', message: 'Has alcanzado el límite de mensajes. Inténtalo en unos minutos.' },
      { status: 429 }
    );
  }

  const body = await req.json();

  const response = await fetch(`${BACKEND_URL}/api/asistente`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}
