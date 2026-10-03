export default function Display({ currentValue, expression }) {
  // Determine font size based on current value length for auto-shrinking
  const getFontSize = () => {
    const len = currentValue.length
    if (len <= 8) return 'text-4xl'
    if (len <= 11) return 'text-3xl'
    if (len <= 14) return 'text-2xl'
    return 'text-xl'
  }

  return (
    <div
      className="bg-blue-800 rounded-2xl p-5 mb-4 min-h-[110px] flex flex-col justify-end"
      role="status"
      aria-live="polite"
      aria-label={`Display showing ${currentValue}`}
    >
      {/* Previous expression line */}
      <div className="text-blue-300 text-sm font-mono text-right truncate min-h-[20px]">
        {expression || '\u00A0'}
      </div>
      {/* Current value / result */}
      <div
        className={`text-white font-mono text-right truncate mt-1 font-semibold ${getFontSize()}`}
      >
        {currentValue || '0'}
      </div>
    </div>
  )
}
