interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children?: string
  className?: string
  onClick?: () => void
}

export default function Button(props: ButtonProps) {
  const { variant = 'primary', className = '', onClick, children } = props

  return (
    <div className={`relative ${className}`}>
      <button
        className="absolute left-[10%] top-[15%] h-full w-full bg-primary-500 text-gray-500 transition-all hover:left-0 hover:top-0"
        onClick={onClick}
      >
        {children}
      </button>
      <div className="border border-primary-500 px-4 py-2">{children}</div>
    </div>
  )
}
