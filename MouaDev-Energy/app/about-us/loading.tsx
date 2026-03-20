export default function AboutLoading() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <div style={{
        minHeight: 'clamp(360px, 50vh, 580px)',
        background: 'linear-gradient(135deg, var(--color-primary-dark, #2c6262) 0%, var(--color-primary, #2a9b96) 100%)',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(100px, 15vw, 160px) 20px clamp(40px, 6vw, 80px)',
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', width: '100%' }}>
          <div style={{ width: 180, height: 14, borderRadius: 7, background: 'rgba(255,255,255,0.12)', marginBottom: 24 }} />
          <div style={{ width: 'clamp(280px, 50%, 500px)', height: 'clamp(40px, 6vw, 72px)', borderRadius: 12, background: 'rgba(255,255,255,0.1)' }} />
        </div>
      </div>
      <div style={{ padding: '80px 20px', maxWidth: 1400, margin: '0 auto', display: 'flex', gap: 60 }}>
        <div style={{ flex: 1 }}>
          <div style={{ width: 120, height: 28, borderRadius: 14, background: '#eef3f2', marginBottom: 20 }} />
          <div style={{ width: '80%', height: 44, borderRadius: 8, background: '#f0f0f0', marginBottom: 16 }} />
          <div style={{ width: '60%', height: 44, borderRadius: 8, background: '#f0f0f0', marginBottom: 32 }} />
          {[1, 2, 3].map(i => (
            <div key={i} style={{ width: '100%', height: 16, borderRadius: 6, background: '#f5f5f5', marginBottom: 12 }} />
          ))}
        </div>
        <div style={{ width: 480, flexShrink: 0, borderRadius: 24, background: 'linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite', aspectRatio: '4/3' }} />
      </div>
      <style>{`@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
    </div>
  )
}
