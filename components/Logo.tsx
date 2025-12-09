import Image from 'next/image'

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Image */}
      <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 relative">
        <Image
          src="/logo.jpeg"
          alt="NAQSHBANDI ATTIRE Logo"
          width={56}
          height={56}
          className="object-contain w-full h-full"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className="text-base font-bold tracking-tight text-gray-800 leading-tight uppercase">NAQSHBANDI ATTIRE</span>
        <span className="text-[10px] text-red-600 italic leading-tight">Soft, yet powerful</span>
      </div>
    </div>
  )
}

