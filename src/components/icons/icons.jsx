export function PlusIcon({ className = 'w-5 h-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

export function MinusIcon({ className = 'w-5 h-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

export function MultiplyIcon({ className = 'w-5 h-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  )
}

export function DivideIcon({ className = 'w-5 h-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="12" cy="17" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function EqualsIcon({ className = 'w-5 h-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="9" x2="19" y2="9" />
      <line x1="5" y1="15" x2="19" y2="15" />
    </svg>
  )
}

export function BackspaceIcon({ className = 'w-5 h-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H9L3 12L9 3Z" />
      <line x1="13" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="13" y2="15" />
    </svg>
  )
}

export function PercentIcon({ className = 'w-5 h-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="19" y1="5" x2="5" y2="19" />
      <circle cx="7" cy="7" r="2.5" />
      <circle cx="17" cy="17" r="2.5" />
    </svg>
  )
}

export function CalculatorLogoIcon({ className = 'w-8 h-8' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="2" width="16" height="20" rx="3" />
      <rect x="7" y="5" width="10" height="5" rx="1" />
      <circle cx="8.5" cy="14" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="12" cy="14" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="14" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="8.5" cy="18" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="12" cy="18" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="18" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function CheckIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="4 12 10 18 20 6" />
    </svg>
  )
}

export function ChevronRightIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="9 6 15 12 9 18" />
    </svg>
  )
}

export function BaldManIcon({ className = 'w-10 h-10' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Background circle badge in blue */}
      <circle cx="32" cy="32" r="30" fill="#2563eb" stroke="#1d4ed8" strokeWidth="2" />
      
      {/* Bald head shine highlight */}
      <path
        d="M26 14C23 15 20 18 19 21"
        stroke="#93c5fd"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* Bald Head & Face (white with blue stroke) */}
      <path
        d="M32 12C22 12 18 19 18 28C18 36 23 43 32 43C41 43 46 36 46 28C46 19 42 12 32 12Z"
        fill="#ffffff"
        stroke="#1e40af"
        strokeWidth="2"
      />
      
      {/* Ears */}
      <path
        d="M18 27C16.5 27 15 28.5 15 31C15 33.5 16.5 35 18 35"
        fill="#ffffff"
        stroke="#1e40af"
        strokeWidth="2"
      />
      <path
        d="M46 27C47.5 27 49 28.5 49 31C49 33.5 47.5 35 46 35"
        fill="#ffffff"
        stroke="#1e40af"
        strokeWidth="2"
      />
      
      {/* Eyebrows */}
      <path d="M23 23C25 22 27.5 22.5 28.5 24" stroke="#1e40af" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M41 23C39 22 36.5 22.5 35.5 24" stroke="#1e40af" strokeWidth="1.8" strokeLinecap="round" />
      
      {/* Eyes */}
      <circle cx="26" cy="27" r="2" fill="#1e40af" />
      <circle cx="38" cy="27" r="2" fill="#1e40af" />
      
      {/* Nose */}
      <path d="M32 27V32C32 32.8 31.2 33.5 30.5 33.5" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round" />
      
      {/* Friendly Smile */}
      <path
        d="M26.5 36C28.5 38.5 35.5 38.5 37.5 36"
        stroke="#1e40af"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Shoulders / Shirt (white with blue outline) */}
      <path
        d="M14 56C14 47 21 44 26 44H38C43 44 50 47 50 56"
        fill="#ffffff"
        stroke="#1e40af"
        strokeWidth="2"
      />
      
      {/* Collar tie/neck detail */}
      <path d="M28 44L32 50L36 44" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

