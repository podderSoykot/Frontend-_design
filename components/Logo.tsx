export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Red N Logo - Smooth Rounded Overlapping Bands */}
      <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left vertical band - smooth rounded edges */}
          <path
            d="M 14 8
                C 10 8 8 10 8 14
                L 8 42
                C 8 46 10 48 14 48
                L 20 48
                C 24 48 26 46 26 42
                L 26 14
                C 26 10 24 8 20 8
                Z"
            fill="#DC2626"
          />
          
          {/* Right vertical band - smooth rounded edges */}
          <path
            d="M 36 8
                C 32 8 30 10 30 14
                L 30 42
                C 30 46 32 48 36 48
                L 48 48
                C 52 48 54 46 54 42
                L 54 14
                C 54 10 52 8 48 8
                Z"
            fill="#DC2626"
          />
          
          {/* Diagonal band - smooth curved from bottom-left to top-right, overlapping */}
          <path
            d="M 20 48
                C 22 46 24 42 26 36
                L 32 20
                C 34 16 36 12 38 10
                L 42 8
                C 44 8 44 10 44 12
                L 36 42
                C 34 46 32 48 30 48
                L 22 48
                C 20 48 20 48 20 48
                Z"
            fill="#DC2626"
          />
          
          {/* Overlapping area - darker shade where diagonal crosses right vertical */}
          <path
            d="M 32 20
                C 34 16 36 12 38 10
                L 42 8
                C 44 8 44 10 44 12
                L 40 28
                C 38 32 36 34 34 36
                Z"
            fill="#991B1B"
            opacity="0.7"
          />
          
          {/* Smooth highlight on left vertical band */}
          <ellipse cx="19" cy="28" rx="3" ry="18" fill="#F87171" opacity="0.6" />
          
          {/* Smooth highlight on right vertical band */}
          <ellipse cx="42" cy="28" rx="4" ry="18" fill="#F87171" opacity="0.6" />
          
          {/* Smooth highlight on diagonal band */}
          <path
            d="M 22 46
                C 24 44 26 40 28 34
                L 30 26
                C 30 24 28 26 26 30
                L 24 42
                C 22 44 22 46 22 46
                Z"
            fill="#F87171"
            opacity="0.5"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-base font-bold tracking-tight text-gray-800 leading-tight">NAQSHBANDI ATTIRE</span>
        <span className="text-[10px] text-red-600 italic leading-tight">Soft, yet powerful</span>
      </div>
    </div>
  )
}

