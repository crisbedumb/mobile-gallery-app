"use client"

import ImageItem from "./image-item"

interface Image {
  id: number
  url: string
  alt: string
}

interface ImageGridProps {
  images: Image[]
  onImageClick?: (imageId: number) => void
}

export default function ImageGrid({ images, onImageClick }: ImageGridProps) {
  return (
    <main className="pt-24 pb-6 px-2">
      <div className="grid grid-cols-3 gap-2">
        {images.map((image) => (
          <ImageItem key={image.id} image={image} onClick={() => onImageClick?.(image.id)} />
        ))}
      </div>
    </main>
  )
}
