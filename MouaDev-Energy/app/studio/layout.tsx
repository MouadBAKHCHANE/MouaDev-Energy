export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <style>{`
        header, footer, .scroll-top-btn { display: none !important; }
        body { overflow: auto !important; }
      `}</style>
      <div style={{ height: '100vh' }}>
        {children}
      </div>
    </>
  )
}
