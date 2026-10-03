/**
 * Perform a single arithmetic operation.
 * No eval() — explicit switch-based logic.
 */
export function compute(a, operator, b) {
  const numA = parseFloat(a)
  const numB = parseFloat(b)

  if (isNaN(numA) || isNaN(numB)) return NaN

  switch (operator) {
    case '+':
      return numA + numB
    case '-':
    case '−':
    case '–':
      return numA - numB
    case '×':
    case '*':
    case 'x':
    case 'X':
      return numA * numB
    case '÷':
    case '/':
      if (numB === 0) return 'DIV_BY_ZERO'
      return numA / numB
    case '%':
      return numA % numB
    default:
      return NaN
  }
}

/**
 * Format a number for display:
 * - Round to 10 decimal places to fix floating-point (0.1 + 0.2 = 0.3)
 * - Strip trailing zeros
 * - Use exponential notation for very large/small numbers
 */
export function formatNumber(n) {
  if (typeof n === 'string') return n // error messages pass through

  if (isNaN(n) || n === undefined || n === null) return 'Error'

  if (!isFinite(n)) return 'Infinity'

  // Handle very large or very small numbers
  if (Math.abs(n) >= 1e12 || (Math.abs(n) < 1e-10 && n !== 0)) {
    return n.toExponential(6)
  }

  // Round to 10 decimal places to fix floating-point issues
  const rounded = parseFloat(n.toFixed(10))

  // Convert to string — this automatically strips trailing zeros
  const str = String(rounded)

  // Limit display length
  if (str.length > 14) {
    return parseFloat(rounded.toPrecision(10)).toString()
  }

  return str
}
