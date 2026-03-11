export default function BlogSlugLoading() {
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
          <div style={{ width: 'clamp(280px, 60%, 600px)', height: 'clamp(40px, 6vw, 72px)', borderRadius: 12, background: 'rgba(255,255,255,0.1)' }} />
        </div>
      </div>
      <div style={{ padding: '80px 20px', maxWidth: 860, margin: '0 auto' }}>
        <div style={{ width: 100, height: 22, borderRadius: 20, background: '#eef3f2', marginBottom: 32 }} />
        {[1, 2, 3].map(i => (
          <div key={i} style={{ marginBottom: 40 }}>
            <div style={{ width: '70%', height: 28, borderRadius: 6, background: '#f0f0f0', marginBottom: 16 }} />
            {[1, 2, 3, 4].map(j => (
              <div key={j} style={{ width: j === 4 ? '60%' : '100%', height: 14, borderRadius: 4, background: '#f5f5f5', marginBottom: 10 }} />
            ))}
          </div>
        ))}
      </div>
      <style>{`@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
    </div>
  )
}
