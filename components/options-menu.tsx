"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { menuOptions } from "@/data/mock-data"

interface OptionsMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function OptionsMenu({ isOpen, onClose }: OptionsMenuProps) {
  const backdropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      // Prevenir scroll cuando el modal está abierto
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) {
      onClose()
    }
  }

  const handleEscape = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      onKeyDown={handleEscape}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-end max-w-[428px] mx-auto"
      role="presentation"
    >
      <div className="bg-white w-full max-w-[428px] rounded-t-3xl p-6 pb-safe transform transition-transform duration-300 ease-out animate-in slide-in-from-bottom">
        {/* Header del modal */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Opciones</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center active:scale-90 rounded-full hover:bg-gray-100 transition-all duration-150"
            aria-label="Cerrar menú"
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu options */}
        <div className="space-y-0">
          {menuOptions.map((option, index) => (
            <button
              key={option.id}
              onClick={() => {
                onClose()
              }}
              className={`w-full text-left px-4 py-4 text-base text-gray-900 font-medium active:bg-pink-50 transition-colors duration-150 ${
                index !== menuOptions.length - 1 ? "border-b border-gray-100" : ""
              }`}
              aria-label={option.label}
            >
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
