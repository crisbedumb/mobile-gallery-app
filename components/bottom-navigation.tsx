"use client"

interface NavItem {
  id: number
  label: string
  icon: string
  active: boolean
}

interface BottomNavigationProps {
  items: NavItem[]
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function BottomNavigation({ items, activeTab, onTabChange }: BottomNavigationProps) {
  const getIcon = (icon: string, active: boolean) => {
    const iconProps = {
      className: `w-6 h-6 ${active ? "text-violet-500" : "text-gray-500"}`,
      viewBox: "0 0 24 24",
    }

    switch (icon) {
      case "Camera":
        return (
          <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 11h-8v6h8z"></path>
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
          </svg>
        )
      case "FolderOpen":
        return (
          <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            <rect x="2" y="7" width="20" height="2"></rect>
          </svg>
        )
      case "Image":
        return (
          <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 max-w-[428px] mx-auto bg-gray-50 border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around pb-safe">
        {items.map((item) => {
          const isActive = item.label === activeTab
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.label)}
              className={`flex flex-col items-center justify-center py-3 px-4 min-h-[60px] transition-colors duration-200 ${
                isActive ? "text-violet-500 bg-violet-50" : "text-gray-500"
              }`}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              {getIcon(item.icon, isActive)}
              <span className={`text-xs mt-1 font-medium`}>{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
