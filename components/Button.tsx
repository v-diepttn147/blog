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
        className="absolute left-[6%] top-[15%] h-full w-full bg-primary-500 font-bold text-secondary-500 transition-all duration-300 hover:left-0 hover:top-0 dark:text-gray-100"
        onClick={onClick}
      >
        {children}
      </button>
      <div className="border border-secondary-500 bg-secondary-500 px-4 py-2 dark:bg-gray-100">
        {children}
      </div>
    </div>
  )
}
