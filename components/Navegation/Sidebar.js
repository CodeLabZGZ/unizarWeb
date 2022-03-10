import NavButton from "../Buttons/NavButton.js"
import { sidebarLinks } from "../../data/links"
import Link from "next/link"

export default function Sidebar() {
  return (
    <div className="h-full bg-color-light-neutral-2  min-w-60 w-60 relative rounded-tr-md rounded-br-md">
      {/* Logotipo */}
      <div className="flex items-center justify-center w-full h-16 p-2">
        <Link href="/">
          <a>
            <img src="/logo.png" className="px-4 mt-6" />
          </a>
        </Link>
      </div>
      {/* Botones */}
      <div className="flex flex-col gap-y-2 p-2 mt-6">
        {sidebarLinks.map((item, idx) => (
          <NavButton
            key={idx}
            url={item.url}
            icon={item.icon}
            text={item.text}
            classNameDiv={`hover:bg-color-light-neutral-1 hover:shadow`}
          />
        ))}
      </div>
    </div>
  )
}
