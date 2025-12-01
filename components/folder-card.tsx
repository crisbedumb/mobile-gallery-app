"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface Folder {
  id: number
  name: string
  count: number
  thumbnail: string
  slug?: string
}

interface FolderCardProps {
  folder: Folder
}

export default function FolderCard({ folder }: FolderCardProps) {
  const router = useRouter()
  const [isPressed, setIsPressed] = useState(false)

  const handleClick = () => {
    const slug = folder.slug || folder.name.toLowerCase().replace(/\s+/g, "-")
    router.push(`/album/${slug}`)
  }

  return (
    <button
      onClick={handleClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      className={`group flex flex-col gap-2 transition-transform duration-150 active:scale-95 ${
        isPressed ? "scale-95" : "scale-100"
      }`}
      aria-label={`${folder.name}, ${folder.count} archivos`}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-200 shadow-sm">
        <Image
          src={folder.thumbnail || "/placeholder.svg"}
          alt={folder.name}
          fill
          className="object-cover"
          sizes="(max-width: 428px) 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>

      {/* Folder info */}
      <div className="px-1">
        <h3 className="text-sm font-medium text-gray-900 truncate text-left">{folder.name}</h3>
        <p className="text-xs text-gray-500 text-left">{folder.count.toLocaleString()}</p>
      </div>
    </button>
  )
}
