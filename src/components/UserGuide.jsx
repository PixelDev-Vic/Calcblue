import { CheckIcon, ChevronRightIcon } from './icons/icons'

export default function UserGuide() {
  const steps = [
    'Tap number buttons or use your keyboard to enter digits.',
    'Tap an operator (+, -, ×, ÷) to set the operation.',
    'Enter the second number.',
    'Press = or Enter to see the result.',
    'Press AC (or Escape) to clear and start over.',
  ]

  const operations = [
    { symbol: '+', name: 'Addition', desc: 'Adds two numbers together' },
    { symbol: '-', name: 'Subtraction', desc: 'Subtracts the second number from the first' },
    { symbol: '×', name: 'Multiplication', desc: 'Multiplies two numbers' },
    { symbol: '÷', name: 'Division', desc: 'Divides the first number by the second' },
    { symbol: '%', name: 'Percent', desc: 'Calculates the percentage of a number' },
    { symbol: '.', name: 'Decimal', desc: 'Adds a decimal point to the current number' },
    { symbol: 'Del', name: 'Backspace', desc: 'Removes the last digit entered' },
    { symbol: 'AC', name: 'All Clear', desc: 'Resets the calculator to zero' },
  ]

  const shortcuts = [
    { keys: '0 – 9', action: 'Enter digits' },
    { keys: '.', action: 'Decimal point' },
    { keys: '+ - * /', action: 'Operators' },
    { keys: '%', action: 'Percent' },
    { keys: 'Enter / =', action: 'Calculate result' },
    { keys: 'Backspace', action: 'Delete last digit' },
    { keys: 'Escape', action: 'Clear all (AC)' },
  ]

  return (
    <section className="w-full max-w-sm lg:max-w-md bg-white rounded-3xl shadow-xl border border-blue-100 p-6 lg:p-8">
      {/* How to Use */}
      <h2 className="text-xl font-bold text-blue-800 mb-4">
        How to Use the Calculator
      </h2>
      <ol className="space-y-3 mb-8">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
              {i + 1}
            </span>
            <span className="text-sm text-gray-700">{step}</span>
          </li>
        ))}
      </ol>

      {/* Supported Operations */}
      <h2 className="text-xl font-bold text-blue-800 mb-4">
        Supported Operations
      </h2>
      <ul className="space-y-2.5 mb-8">
        {operations.map((op) => (
          <li key={op.name} className="flex items-start gap-3">
            <span className="flex-shrink-0 text-blue-500 mt-0.5">
              <CheckIcon className="w-4 h-4" />
            </span>
            <div>
              <span className="text-sm font-semibold text-blue-700">
                {op.symbol}
              </span>
              <span className="text-sm text-gray-600">
                {' '}{op.name} — {op.desc}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* Keyboard Shortcuts */}
      <h2 className="text-xl font-bold text-blue-800 mb-4">
        Keyboard Shortcuts
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-blue-100">
              <th className="text-left py-2 pr-4 text-blue-600 font-semibold">
                Key
              </th>
              <th className="text-left py-2 text-blue-600 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {shortcuts.map((s) => (
              <tr key={s.keys} className="border-b border-blue-50">
                <td className="py-2 pr-4">
                  <kbd className="px-2 py-0.5 bg-blue-50 border border-blue-200 rounded text-blue-700 font-mono text-xs">
                    {s.keys}
                  </kbd>
                </td>
                <td className="py-2 text-gray-600 flex items-center gap-1.5">
                  <ChevronRightIcon className="w-3 h-3 text-blue-400 flex-shrink-0" />
                  {s.action}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
