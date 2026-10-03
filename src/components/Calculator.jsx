import { useState, useEffect, useCallback, useRef } from 'react'
import Display from './Display'
import Keypad from './Keypad'
import { compute, formatNumber } from '../utils/calculate'

const MAX_DIGITS = 12

function normalizeOperator(op) {
  if (op === '*' || op === 'x' || op === 'X' || op === '×') return '×'
  if (op === '/' || op === '÷') return '÷'
  if (op === '-' || op === '−' || op === '–') return '-'
  if (op === '+') return '+'
  return op
}

export default function Calculator() {
  const [currentValue, setCurrentValue] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operator, setOperator] = useState(null)
  const [expression, setExpression] = useState('')
  const [waitingForOperand, setWaitingForOperand] = useState(false)
  const [justEvaluated, setJustEvaluated] = useState(false)
  const [error, setError] = useState(false)
  const [pressedKey, setPressedKey] = useState(null)

  // Clear keyboard press highlight after a short delay
  useEffect(() => {
    if (pressedKey) {
      const timer = setTimeout(() => setPressedKey(null), 120)
      return () => clearTimeout(timer)
    }
  }, [pressedKey])

  const clearAll = useCallback(() => {
    setCurrentValue('0')
    setPreviousValue(null)
    setOperator(null)
    setExpression('')
    setWaitingForOperand(false)
    setJustEvaluated(false)
    setError(false)
  }, [])

  const handleInput = useCallback(
    (action, label) => {
      // If in error state, any key clears and starts fresh
      if (error) {
        clearAll()
        if (action === 'digit') {
          setCurrentValue(label)
        }
        return
      }

      switch (action) {
        case 'digit': {
          if (waitingForOperand) {
            setCurrentValue(label)
            setWaitingForOperand(false)
            setJustEvaluated(false)
            return
          }

          if (justEvaluated) {
            // Start fresh after pressing = then a digit
            setCurrentValue(label)
            setPreviousValue(null)
            setOperator(null)
            setExpression('')
            setJustEvaluated(false)
            return
          }

          // Guard: max digits
          const currentClean = currentValue.replace('-', '').replace('.', '')
          if (currentClean.length >= MAX_DIGITS) return

          // Guard: prevent leading zeros like "007"
          if (currentValue === '0' && label !== '0') {
            setCurrentValue(label)
          } else if (currentValue === '0' && label === '0') {
            // Already 0, do nothing
          } else {
            setCurrentValue(currentValue + label)
          }
          break
        }

        case 'decimal': {
          if (waitingForOperand) {
            setCurrentValue('0.')
            setWaitingForOperand(false)
            setJustEvaluated(false)
            return
          }

          if (justEvaluated) {
            setCurrentValue('0.')
            setPreviousValue(null)
            setOperator(null)
            setExpression('')
            setJustEvaluated(false)
            return
          }

          // Guard: no multiple decimals
          if (currentValue.includes('.')) return

          setCurrentValue(currentValue + '.')
          break
        }

        case 'operator': {
          const normOp = normalizeOperator(label)
          const currentNum = parseFloat(currentValue)

          if (justEvaluated) {
            // After =, use the result as the left operand
            setPreviousValue(currentNum)
            setOperator(normOp)
            setExpression(`${formatNumber(currentNum)} ${normOp}`)
            setWaitingForOperand(true)
            setJustEvaluated(false)
            return
          }

          if (operator && !waitingForOperand) {
            // Chain: evaluate the pending operation first
            const result = compute(previousValue, operator, currentNum)
            if (result === 'DIV_BY_ZERO') {
              setCurrentValue('Cannot divide by zero')
              setExpression('')
              setPreviousValue(null)
              setOperator(null)
              setWaitingForOperand(false)
              setJustEvaluated(false)
              setError(true)
              return
            }
            const formatted = formatNumber(result)
            setCurrentValue(formatted)
            setPreviousValue(result)
            setExpression(`${formatted} ${normOp}`)
          } else if (waitingForOperand) {
            // Replace the previous operator (double press guard)
            setOperator(normOp)
            setExpression(`${formatNumber(previousValue)} ${normOp}`)
            return
          } else {
            setPreviousValue(currentNum)
            setExpression(`${formatNumber(currentNum)} ${normOp}`)
          }

          setOperator(normOp)
          setWaitingForOperand(true)
          break
        }

        case 'equals': {
          if (operator && previousValue !== null) {
            const currentNum = parseFloat(currentValue)
            const result = compute(previousValue, operator, currentNum)

            if (result === 'DIV_BY_ZERO') {
              setCurrentValue('Cannot divide by zero')
              setExpression('')
              setPreviousValue(null)
              setOperator(null)
              setWaitingForOperand(false)
              setJustEvaluated(false)
              setError(true)
              return
            }

            const formatted = formatNumber(result)
            setExpression(
              `${formatNumber(previousValue)} ${operator} ${formatNumber(currentNum)} =`
            )
            setCurrentValue(formatted)
            setPreviousValue(null)
            setOperator(null)
            setWaitingForOperand(false)
            setJustEvaluated(true)
          }
          break
        }

        case 'percent': {
          const num = parseFloat(currentValue)
          if (isNaN(num)) return
          const percentValue = num / 100
          setCurrentValue(formatNumber(percentValue))
          if (justEvaluated) {
            setExpression('')
            setJustEvaluated(false)
          }
          break
        }

        case 'backspace': {
          // 1. If result was just calculated with '=', backspace resets display to 0
          if (justEvaluated) {
            setCurrentValue('0')
            setExpression('')
            setJustEvaluated(false)
            setPreviousValue(null)
            setOperator(null)
            return
          }

          // 2. If waiting for second operand (e.g. "5 +"), backspace cancels the operator
          if (waitingForOperand) {
            setOperator(null)
            setWaitingForOperand(false)
            setExpression('')
            return
          }

          // 3. Normal deletion: delete last digit or reset to 0
          if (
            currentValue.length === 1 ||
            (currentValue.length === 2 && currentValue[0] === '-') ||
            currentValue === 'Error'
          ) {
            setCurrentValue('0')
          } else {
            setCurrentValue(currentValue.slice(0, -1))
          }
          break
        }

        case 'clear': {
          clearAll()
          break
        }

        default:
          break
      }
    },
    [
      currentValue,
      previousValue,
      operator,
      waitingForOperand,
      justEvaluated,
      error,
      clearAll,
    ]
  )

  // Keep a stable ref to handleInput for the global keyboard listener
  const handleInputRef = useRef(handleInput)
  useEffect(() => {
    handleInputRef.current = handleInput
  })

  // Keyboard support with full operator, digit, backspace, and clear mapping
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Do not intercept if typing inside an input or textarea
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return
      }

      const { key, code } = e

      // Prevent browser default actions for keys that trigger browser features:
      // Enter (triggers form submit or active button click),
      // '/' (triggers Quick Find in Firefox and Chrome)
      if (
        key === 'Enter' ||
        key === '/' ||
        code === 'Slash' ||
        code === 'NumpadDivide' ||
        code === 'NumpadEnter'
      ) {
        e.preventDefault()
      }

      // 1. Digits 0-9
      if (/^[0-9]$/.test(key)) {
        setPressedKey(key)
        handleInputRef.current('digit', key)
        return
      }

      // 2. Decimal point (. or ,)
      if (key === '.' || key === ',' || code === 'NumpadDecimal') {
        setPressedKey('.')
        handleInputRef.current('decimal', '.')
        return
      }

      // 3. Multiplication: *, x, X, ×, or NumpadMultiply
      if (
        key === '*' ||
        key === 'x' ||
        key === 'X' ||
        key === '×' ||
        code === 'NumpadMultiply'
      ) {
        setPressedKey('×')
        handleInputRef.current('operator', '×')
        return
      }

      // 4. Division: /, ÷, or NumpadDivide
      if (
        key === '/' ||
        key === '÷' ||
        code === 'Slash' ||
        code === 'NumpadDivide'
      ) {
        setPressedKey('÷')
        handleInputRef.current('operator', '÷')
        return
      }

      // 5. Addition: +, NumpadAdd
      if (key === '+' || code === 'NumpadAdd') {
        setPressedKey('+')
        handleInputRef.current('operator', '+')
        return
      }

      // 6. Subtraction: -, −, –, NumpadSubtract
      if (
        key === '-' ||
        key === '−' ||
        key === '–' ||
        code === 'NumpadSubtract'
      ) {
        setPressedKey('-')
        handleInputRef.current('operator', '-')
        return
      }

      // 7. Percent: %
      if (key === '%') {
        setPressedKey('%')
        handleInputRef.current('percent', '%')
        return
      }

      // 8. Equals: Enter, =, NumpadEnter
      if (
        key === 'Enter' ||
        key === '=' ||
        code === 'NumpadEnter' ||
        (code === 'Equal' && !e.shiftKey)
      ) {
        setPressedKey('=')
        handleInputRef.current('equals', '=')
        return
      }

      // 9. Backspace: delete last character or reset
      if (key === 'Backspace' || code === 'Backspace') {
        setPressedKey('backspace')
        handleInputRef.current('backspace', 'backspace')
        return
      }

      // 10. Clear (AC): Escape, Delete, c, C
      if (
        key === 'Escape' ||
        key === 'Delete' ||
        key === 'c' ||
        key === 'C' ||
        code === 'Escape' ||
        code === 'Delete'
      ) {
        setPressedKey('AC')
        handleInputRef.current('clear', 'AC')
        return
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl border border-blue-100 p-5">
      <Display currentValue={currentValue} expression={expression} />
      <Keypad onInput={handleInput} pressedKey={pressedKey} />
    </div>
  )
}
