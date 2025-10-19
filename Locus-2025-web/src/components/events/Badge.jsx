const Badge = ({ children, className = '' }) => {
  return (
    <span className={`
      inline-flex items-center gap-1.5 rounded-full font-medium select-none
      px-2 py-1 text-xs
      bg-blue-500 text-white border-0
      ${className}
    `}>
      {children}
    </span>
  )
}

export default Badge