interface ContainerProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function Container({ children, className, style }: ContainerProps) {
  return (
    <div
      className={className}
      style={{
        maxWidth: 1400,
        margin: '0 auto',
        padding: '0 20px',
        width: '100%',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
