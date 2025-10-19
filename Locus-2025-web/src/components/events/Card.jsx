const Card = ({
  children,
  variant = 'default',
  size = 'sm',
  interactive = true,
  hoverEffect = 'lift',
  className = ''
}) => {
  const sizeStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  return (
    <div className={`
      relative rounded-lg overflow-hidden group cursor-pointer
      bg-gray-800 border border-gray-700
      ${sizeStyles[size]} ${className}
      ${interactive ? 'hover:border-gray-600 transition-all duration-300' : ''}
      ${hoverEffect === 'lift' && interactive ? 'hover:-translate-y-2 hover:scale-[1.05]' : ''}
    `}>
      {children}
      
      {interactive && hoverEffect !== 'none' && (
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
      )}
    </div>
  )
}

export default Card