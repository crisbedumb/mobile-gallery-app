"use client"

import FolderCard from "./folder-card"

interface Folder {
  id: number
  name: string
  count: number
  thumbnail: string
}

interface FolderGridProps {
  folders: Folder[]
}

export default function FolderGrid({ folders }: FolderGridProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {folders.map((folder) => (
        <FolderCard key={folder.id} folder={folder} />
      ))}
    </div>
  )
}
