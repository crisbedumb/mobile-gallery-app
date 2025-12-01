"use client"

import { useState } from "react"

interface ImageItemProps {
  image: {
    id: number
    url: string
    alt: string
  }
  onClick?: () => void
}

export default function ImageItem({ image, onClick }: ImageItemProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      onClick={onClick}
      className="aspect-square bg-gray-200 rounded-md overflow-hidden cursor-pointer active:scale-95 active:opacity-90 transition-transform duration-150"
    >
      {!loaded && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
        </div>
      )}

      <img
        src={image.url || "/placeholder.svg"}
        alt={image.alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  )
}
