import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'OrkestrIA - Consultoría IT & Automatización con IA';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 50%, #0a0f1e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Glow circles */}
        <div
          style={{
            position: 'absolute',
            top: 80,
            right: 120,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(59,130,246,0.15)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: 100,
            width: 250,
            height: 250,
            borderRadius: '50%',
            background: 'rgba(99,102,241,0.12)',
            filter: 'blur(60px)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(59,130,246,0.15)',
            border: '1px solid rgba(59,130,246,0.4)',
            borderRadius: 100,
            padding: '8px 24px',
            marginBottom: 32,
          }}
        >
          <span style={{ color: '#60a5fa', fontSize: 18, fontWeight: 600 }}>
            Consultoría IT & Automatización con IA
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 28,
          }}
        >
          <span
            style={{
              color: '#ffffff',
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: '-2px',
              lineHeight: 1.1,
              textAlign: 'center',
            }}
          >
            Orkestr
          </span>
          <span
            style={{
              background: 'linear-gradient(90deg, #3b82f6, #818cf8)',
              backgroundClip: 'text',
              color: 'transparent',
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: '-2px',
              lineHeight: 1.1,
              WebkitBackgroundClip: 'text',
            }}
          >
            IA
          </span>
        </div>

        {/* Description */}
        <p
          style={{
            color: '#94a3b8',
            fontSize: 24,
            textAlign: 'center',
            maxWidth: 700,
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          Transformamos empresas con soluciones de Inteligencia Artificial desde Madrid
        </p>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            gap: 48,
            color: '#64748b',
            fontSize: 16,
          }}
        >
          <span>🤖 Automatización</span>
          <span>💬 Chatbots IA</span>
          <span>📊 Consultoría IT</span>
          <span>📍 Madrid</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
