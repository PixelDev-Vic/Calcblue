export default function CalcButton({
  label,
  variant = 'number',
  onClick,
  ariaLabel,
  className = '',
  span2 = false,
  children,
  isPressed = false,
}) {
  // Base styles shared by all buttons
  const base =
    'min-h-[48px] font-semibold text-lg rounded-2xl transition duration-150 active:scale-95 cursor-pointer select-none flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2'

  // Variant-specific styles
  const variants = {
    number:
      'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100',
    operator:
      'bg-blue-600 text-white border border-blue-700 hover:bg-blue-500',
    action:
      'bg-white text-blue-600 border-2 border-blue-400 hover:bg-blue-50',
    equals:
      'bg-blue-700 text-white border border-blue-800 hover:bg-blue-600',
  }

  const pressedStyle = isPressed ? 'scale-95 brightness-90' : ''
  const spanClass = span2 ? 'col-span-2' : ''

  return (
    <button
      type="button"
      className={`${base} ${variants[variant] || variants.number} ${spanClass} ${pressedStyle} ${className}`}
      onClick={(e) => {
        onClick?.(e)
        e.currentTarget.blur()
      }}
      aria-label={ariaLabel || label}
    >
      {children || label}
    </button>
  )
}
