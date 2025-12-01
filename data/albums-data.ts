export const albumsData = {
  pins: {
    id: 6,
    name: "Pins",
    count: 34,
    images: Array.from({ length: 40 }, (_, i) => ({
      id: i + 1,
      url: `https://picsum.photos/400/400?random=${i + 100}`,
      alt: `Pin ${i + 1}`,
    })),
  },
  camera: {
    id: 2,
    name: "Camera",
    count: 582,
    images: Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      url: `https://picsum.photos/400/400?random=${i + 200}`,
      alt: `Camera ${i + 1}`,
    })),
  },
  whatsappImages: {
    id: 4,
    name: "WhatsApp Images",
    count: 6542,
    images: Array.from({ length: 45 }, (_, i) => ({
      id: i + 1,
      url: `https://picsum.photos/400/400?random=${i + 300}`,
      alt: `WhatsApp ${i + 1}`,
    })),
  },
}
