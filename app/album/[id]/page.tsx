"use client"

import { use, useState } from "react"
import { useRouter } from "next/navigation"
import AlbumHeader from "@/components/album-header"
import ImageGrid from "@/components/image-grid"
import { folders } from "@/data/mock-data"

interface Image {
  id: number
  url: string
  alt: string
}

export default function AlbumDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null)

  // Unwrap the params Promise
  const { id } = use(params)

  const album = folders.find((f) => f.slug === id)

  if (!album) {
    return (
      <div className="max-w-[428px] mx-auto min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Álbum no encontrado</p>
      </div>
    )
  }

  const images: Image[] = Array.from({ length: Math.min(album.count, 50) }, (_, i) => ({
    id: i + 1,
    url: `https://picsum.photos/400/400?random=${album.id}-${i}`,
    alt: `${album.name} ${i + 1}`,
  }))

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="max-w-[428px] mx-auto min-h-screen bg-white relative overflow-hidden">
      <AlbumHeader title={album.name} count={album.count} onBack={handleBack} />

      <ImageGrid images={images} onImageClick={(imageId) => setSelectedImageId(imageId)} />
    </div>
  )
}