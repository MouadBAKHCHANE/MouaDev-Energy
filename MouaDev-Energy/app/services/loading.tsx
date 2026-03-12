export default function ServicesLoading() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      {/* Hero skeleton */}
      <div style={{
        minHeight: 'clamp(360px, 50vh, 580px)',
        background: 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(100px, 15vw, 160px) 20px clamp(40px, 6vw, 80px)',
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', width: '100%' }}>
          <div style={{ width: 180, height: 14, borderRadius: 7, background: 'rgba(255,255,255,0.12)', marginBottom: 24 }} />
          <div style={{ width: 'clamp(280px, 50%, 560px)', height: 'clamp(40px, 6vw, 60px)', borderRadius: 12, background: 'rgba(255,255,255,0.1)', marginBottom: 12 }} />
          <div style={{ width: 'clamp(200px, 35%, 380px)', height: 'clamp(30px, 4vw, 44px)', borderRadius: 10, background: 'rgba(255,255,255,0.07)' }} />
        </div>
      </div>

      {/* Cards skeleton */}
      <div style={{ padding: '80px 20px', maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ width: 120, height: 28, borderRadius: 14, background: '#eef3f2', marginBottom: 20 }} />
        <div style={{ width: '60%', height: 40, borderRadius: 8, background: '#f0f0f0', marginBottom: 60 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28 }}>
          {[0, 1, 2, 3].map(i => (
            <div key={i} style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid #e8e8e8' }}>
              <div style={{ aspectRatio: '16/10', background: 'linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite' }} />
              <div style={{ padding: '24px 28px 28px' }}>
                <div style={{ width: '70%', height: 20, borderRadius: 6, background: '#f0f0f0', marginBottom: 12 }} />
                <div style={{ width: '90%', height: 14, borderRadius: 4, background: '#f5f5f5', marginBottom: 8 }} />
                <div style={{ width: '75%', height: 14, borderRadius: 4, background: '#f5f5f5' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  )
}
