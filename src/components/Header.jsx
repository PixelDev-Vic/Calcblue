import { BaldManIcon } from './icons/icons'

export default function Header() {
  return (
    <header className="w-full py-6 px-4 text-center select-none">
      <div className="flex items-center justify-center gap-3">
        <BaldManIcon className="w-12 h-12 drop-shadow-md" />
        <h1 className="text-3xl font-bold text-blue-800 tracking-tight">
          Calc Blue
        </h1>
      </div>
      <p className="mt-2 text-sm text-blue-500 font-medium">
        Calcblue, the Bald Calculator
      </p>
    </header>
  )
}
