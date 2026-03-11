export default function RootLoading() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <div style={{
        minHeight: 'clamp(360px, 50vh, 580px)',
        background: 'linear-gradient(135deg, #1a3535 0%, #0d2b2b 100%)',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(100px, 15vw, 160px) 20px clamp(40px, 6vw, 80px)',
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', width: '100%' }}>
          <div style={{ width: 180, height: 14, borderRadius: 7, background: 'rgba(255,255,255,0.12)', marginBottom: 24 }} />
          <div style={{ width: 'clamp(280px, 50%, 560px)', height: 'clamp(40px, 6vw, 60px)', borderRadius: 12, background: 'rgba(255,255,255,0.1)' }} />
        </div>
      </div>
      <div style={{ padding: '80px 20px', maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ width: 120, height: 28, borderRadius: 14, background: '#eef3f2', marginBottom: 20 }} />
        <div style={{ width: '60%', height: 40, borderRadius: 8, background: '#f0f0f0' }} />
      </div>
    </div>
  )
}
