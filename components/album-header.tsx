"use client"

import { ChevronLeft, Search, MoreVertical } from "lucide-react"

interface AlbumHeaderProps {
  title: string
  count: number
  onBack: () => void
}

export default function AlbumHeader({ title, count, onBack }: AlbumHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 max-w-[428px] mx-auto bg-white border-b border-gray-200 z-50 pt-safe">
      <div className="flex items-center justify-between px-4 py-3 h-[72px]">
        {/* Botón Atrás */}
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full active:scale-95 active:bg-gray-100 transition-transform duration-150"
          aria-label="Volver"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Título y Contador */}
        <div className="flex-1 px-3">
          <h1 className="text-lg font-bold text-gray-900 truncate">{title}</h1>
          <p className="text-xs text-gray-500">{count} imágenes</p>
        </div>

        {/* Iconos Derecha */}
        <div className="flex items-center gap-2">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full active:scale-95 active:bg-gray-100 transition-transform duration-150"
            aria-label="Buscar"
          >
            <Search className="w-5 h-5 text-gray-700" />
          </button>

          <button
            className="w-10 h-10 flex items-center justify-center rounded-full active:scale-95 active:bg-gray-100 transition-transform duration-150"
            aria-label="Más opciones"
          >
            <MoreVertical className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  )
}
