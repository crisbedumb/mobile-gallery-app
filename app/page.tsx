"use client"

import { useState } from "react"
import Header from "@/components/header"
import SearchBar from "@/components/search-bar"
import FolderGrid from "@/components/folder-grid"
import BottomNavigation from "@/components/bottom-navigation"
import OptionsMenu from "@/components/options-menu"
import { folders, navItems } from "@/data/mock-data"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("Álbumes")

  return (
    <div className="max-w-[428px] mx-auto min-h-screen bg-gray-50 relative overflow-hidden">
      <Header onMenuClick={() => setMenuOpen(true)} onSearchClick={() => setSearchOpen(true)} />

      {/* Barra de búsqueda sticky */}
      <div className="pt-24">
        <SearchBar onMenuClick={() => setMenuOpen(true)} />
      </div>

      {/* Grid de carpetas - área scrolleable principal */}
      <main className="px-4 pb-24 pt-16">
        <FolderGrid folders={folders} />
      </main>

      {/* Navegación inferior fija */}
      <BottomNavigation items={navItems} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Modal de opciones */}
      <OptionsMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {searchOpen && (
        <div
          onClick={() => setSearchOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-start max-w-[428px] mx-auto"
          role="presentation"
        >
          <div className="bg-white w-full rounded-b-2xl p-4 pt-8 transform transition-transform duration-300 ease-out">
            <input
              type="text"
              placeholder="Buscar las carpetas"
              autoFocus
              className="w-full px-4 py-3 bg-violet-50 rounded-full border-none outline-none text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-violet-300"
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setSearchOpen(false)
                }
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
