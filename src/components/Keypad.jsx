import CalcButton from './CalcButton'
import {
  PlusIcon,
  MinusIcon,
  MultiplyIcon,
  DivideIcon,
  EqualsIcon,
  BackspaceIcon,
  PercentIcon,
} from './icons/icons'

export default function Keypad({ onInput, pressedKey }) {
  // Button definitions for the 4-column grid layout
  const buttons = [
    // Row 1: AC, Backspace, %, ÷
    {
      label: 'AC',
      variant: 'action',
      action: 'clear',
      ariaLabel: 'clear all',
    },
    {
      label: 'backspace',
      variant: 'action',
      action: 'backspace',
      ariaLabel: 'backspace',
      icon: <BackspaceIcon className="w-5 h-5" />,
    },
    {
      label: '%',
      variant: 'action',
      action: 'percent',
      ariaLabel: 'percent',
      icon: <PercentIcon className="w-5 h-5" />,
    },
    {
      label: '÷',
      variant: 'operator',
      action: 'operator',
      ariaLabel: 'divide',
      icon: <DivideIcon className="w-5 h-5" />,
    },
    // Row 2: 7, 8, 9, ×
    { label: '7', variant: 'number', action: 'digit', ariaLabel: 'seven' },
    { label: '8', variant: 'number', action: 'digit', ariaLabel: 'eight' },
    { label: '9', variant: 'number', action: 'digit', ariaLabel: 'nine' },
    {
      label: '×',
      variant: 'operator',
      action: 'operator',
      ariaLabel: 'multiply',
      icon: <MultiplyIcon className="w-5 h-5" />,
    },
    // Row 3: 4, 5, 6, −
    { label: '4', variant: 'number', action: 'digit', ariaLabel: 'four' },
    { label: '5', variant: 'number', action: 'digit', ariaLabel: 'five' },
    { label: '6', variant: 'number', action: 'digit', ariaLabel: 'six' },
    {
      label: '-',
      variant: 'operator',
      action: 'operator',
      ariaLabel: 'minus',
      icon: <MinusIcon className="w-5 h-5" />,
    },
    // Row 4: 1, 2, 3, +
    { label: '1', variant: 'number', action: 'digit', ariaLabel: 'one' },
    { label: '2', variant: 'number', action: 'digit', ariaLabel: 'two' },
    { label: '3', variant: 'number', action: 'digit', ariaLabel: 'three' },
    {
      label: '+',
      variant: 'operator',
      action: 'operator',
      ariaLabel: 'plus',
      icon: <PlusIcon className="w-5 h-5" />,
    },
    // Row 5: 0 (span 2), ., =
    {
      label: '0',
      variant: 'number',
      action: 'digit',
      ariaLabel: 'zero',
      span2: true,
    },
    { label: '.', variant: 'number', action: 'decimal', ariaLabel: 'decimal point' },
    {
      label: '=',
      variant: 'equals',
      action: 'equals',
      ariaLabel: 'equals',
      icon: <EqualsIcon className="w-6 h-6" />,
    },
  ]

  // Map keyboard keys to button labels for press highlight
  const keyToLabel = {
    Escape: 'AC',
    Delete: 'AC',
    c: 'AC',
    C: 'AC',
    AC: 'AC',
    Backspace: 'backspace',
    backspace: 'backspace',
    '%': '%',
    '/': '÷',
    '÷': '÷',
    '*': '×',
    '×': '×',
    x: '×',
    X: '×',
    '-': '-',
    '−': '-',
    '–': '-',
    '+': '+',
    Enter: '=',
    '=': '=',
    '.': '.',
    ',': '.',
  }
  // Add digit keys
  for (let i = 0; i <= 9; i++) {
    keyToLabel[String(i)] = String(i)
  }

  const activePressedLabel = pressedKey ? keyToLabel[pressedKey] : null

  return (
    <div className="grid grid-cols-4 gap-2.5">
      {buttons.map((btn) => (
        <CalcButton
          key={btn.ariaLabel}
          label={btn.label}
          variant={btn.variant}
          ariaLabel={btn.ariaLabel}
          span2={btn.span2}
          isPressed={activePressedLabel === btn.label}
          onClick={() => onInput(btn.action, btn.label)}
        >
          {btn.icon || btn.label}
        </CalcButton>
      ))}
    </div>
  )
}
