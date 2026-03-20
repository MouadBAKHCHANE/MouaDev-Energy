export default function ContactLoading() {
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
          <div style={{ width: 'clamp(200px, 40%, 400px)', height: 'clamp(40px, 6vw, 72px)', borderRadius: 12, background: 'rgba(255,255,255,0.1)' }} />
        </div>
      </div>
      <div style={{ padding: '80px 20px', maxWidth: 1400, margin: '0 auto', display: 'flex', gap: 80 }}>
        <div style={{ flex: '0 0 48%' }}>
          <div style={{ width: 200, height: 28, borderRadius: 14, background: '#eef3f2', marginBottom: 20 }} />
          <div style={{ width: '90%', height: 40, borderRadius: 8, background: '#f0f0f0', marginBottom: 8 }} />
          <div style={{ width: '70%', height: 40, borderRadius: 8, background: '#f0f0f0', marginBottom: 32 }} />
          {[1, 2, 3].map(i => (
            <div key={i} style={{ width: '100%', height: 80, borderRadius: 16, background: 'linear-gradient(135deg, var(--color-primary-dark, #2c6262) 0%, var(--color-primary, #2a9b96) 100%)', marginBottom: 16, opacity: 0.7 }} />
          ))}
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ width: '70%', height: 36, borderRadius: 8, background: '#f0f0f0' }} />
          {[1, 2, 3, 4].map(i => (
            <div key={i} style={{ width: '100%', height: 52, borderRadius: 10, background: '#f5f5f5' }} />
          ))}
          <div style={{ width: '100%', height: 100, borderRadius: 10, background: '#f5f5f5' }} />
          <div style={{ width: '100%', height: 52, borderRadius: 10, background: 'linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite' }} />
        </div>
      </div>
      <style>{`@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
    </div>
  )
}
