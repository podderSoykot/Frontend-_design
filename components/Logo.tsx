export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Red N Logo - Exact: two smooth rounded overlapping bands */}
      <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* First band: smooth rounded from bottom-left, up left, diagonal, up right */}
          <path
            d="M 10 48
                Q 8 48 6 46
                L 6 10
                Q 6 8 8 6
                L 20 6
                Q 22 6 24 8
                L 24 26
                Q 24 28 26 30
                L 34 38
                Q 36 40 38 38
                L 46 30
                Q 48 28 48 26
                L 48 10
                Q 48 8 50 6
                L 52 6
                Q 54 6 54 8
                L 54 46
                Q 54 48 52 48
                L 10 48
                Z"
            fill="#DC2626"
          />
          
          {/* Second band: smooth rounded overlapping, creates the N shape */}
          <path
            d="M 20 48
                Q 18 48 16 46
                L 16 30
                Q 16 28 18 26
                L 26 18
                Q 28 16 30 18
                L 38 26
                Q 40 28 40 30
                L 40 46
                Q 40 48 42 48
                L 50 48
                Q 52 48 54 46
                L 54 10
                Q 54 8 52 6
                L 42 6
                Q 40 6 38 8
                L 30 16
                Q 28 18 26 16
                L 18 24
                Q 16 26 16 28
                L 16 46
                Q 16 48 18 48
                L 20 48
                Z"
            fill="#DC2626"
          />
          
          {/* Overlap intersection - darker red */}
          <path
            d="M 28 20
                Q 26 18 28 16
                L 36 8
                Q 38 6 40 8
                L 42 10
                Q 40 12 38 14
                L 30 22
                Q 28 24 28 22
                Z"
            fill="#991B1B"
            opacity="0.8"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-base font-bold tracking-tight text-gray-800 leading-tight uppercase">NAQSHBANDI ATTIRE</span>
        <span className="text-[10px] text-red-600 italic leading-tight">Soft, yet powerful</span>
      </div>
    </div>
  )
}

