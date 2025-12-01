"use client"

import { useState, useEffect } from "react"

interface HeaderProps {
  onMenuClick: () => void
  onSearchClick: () => void
}

export default function Header({ onMenuClick, onSearchClick }: HeaderProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const logoOpacity = Math.max(0, 1 - scrollY / 80)
  const logoMaxHeight = Math.max(0, 80 - scrollY * 1.2)

  return (
    <div className="fixed top-0 left-0 right-0 z-40 max-w-[428px] mx-auto w-full bg-gray-50">
      {/* Top bar with search and menu icons */}
      <div className="flex items-center justify-end px-4 py-3 gap-0">
        <button
          onClick={onSearchClick}
          className="w-10 h-10 flex items-center justify-center active:scale-95 transition-transform duration-150"
          aria-label="Buscar"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        <button
          onClick={onMenuClick}
          className="w-10 h-10 flex items-center justify-center active:scale-95 transition-transform duration-150"
          aria-label="Menú"
        >
          <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>

      <div
        className="w-full text-center px-4 overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: `${logoMaxHeight}px`,
          opacity: logoOpacity,
        }}
      >
        <h1 className="text-3xl font-bold text-gray-900 py-6">Galería</h1>
      </div>
    </div>
  )
}
