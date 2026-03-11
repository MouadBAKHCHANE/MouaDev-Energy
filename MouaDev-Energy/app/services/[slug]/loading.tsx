export default function ServiceSlugLoading() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <div style={{
        minHeight: 'clamp(360px, 50vh, 580px)',
        background: 'linear-gradient(135deg, #0a1e1a 0%, #0d2e28 60%, #0f3a30 100%)',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(100px, 15vw, 160px) 20px clamp(40px, 6vw, 80px)',
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', width: '100%' }}>
          <div style={{ width: 200, height: 14, borderRadius: 7, background: 'rgba(255,255,255,0.12)', marginBottom: 24 }} />
          <div style={{ width: 'clamp(280px, 55%, 560px)', height: 'clamp(40px, 6vw, 72px)', borderRadius: 12, background: 'rgba(255,255,255,0.1)', marginBottom: 12 }} />
          <div style={{ width: 'clamp(180px, 35%, 320px)', height: 'clamp(30px, 4vw, 48px)', borderRadius: 10, background: 'rgba(255,255,255,0.07)' }} />
        </div>
      </div>
      <div style={{ padding: '80px 20px', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ width: 120, height: 28, borderRadius: 14, background: '#eef3f2', marginBottom: 20 }} />
            <div style={{ width: '85%', height: 36, borderRadius: 8, background: '#f0f0f0', marginBottom: 24 }} />
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={{ width: '100%', height: 14, borderRadius: 4, background: '#f5f5f5', marginBottom: 10 }} />
            ))}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 40 }}>
              {[1, 2, 3, 4].map(i => (
                <div key={i} style={{ height: 120, borderRadius: 16, background: 'linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite' }} />
              ))}
            </div>
          </div>
          <div style={{ width: 340, flexShrink: 0 }}>
            <div style={{ height: 420, borderRadius: 20, background: 'linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite' }} />
          </div>
        </div>
      </div>
      <style>{`@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
    </div>
  )
}
