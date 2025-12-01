"use client"

interface SearchBarProps {
  onMenuClick: () => void
}

export default function SearchBar({ onMenuClick }: SearchBarProps) {
  return (
    <div className="sticky top-0 z-30 max-w-[428px] mx-auto bg-gray-50 px-4 py-3 pt-safe">
      {/* Empty space - icons are in header instead */}
    </div>
  )
}
