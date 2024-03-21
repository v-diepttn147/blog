interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children?: string
  className?: string
  onClick?: () => void
}

export default function Button(props: ButtonProps) {
  const { variant = 'primary', className = '', onClick, children } = props

  return (
    <button className="primary-button" onClick={onClick}>
      {children}
    </button>
  )
}
