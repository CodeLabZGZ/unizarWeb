import Link from "next/link"
import { FiHeart } from "react-icons/fi";

export default function SubjectPreview({img, name, desc, linkCard, linkMap}) {
  return (
    <div className="bg-color-light-neutral-2 h-full max-w-64 min-w-64 p-2 rounded-xl relative">
      <Link href={linkCard}>
        <a>
          <div className="shadow-md rounded-xl">
            <img className="h-40 rounded-xl w-full object-cover" src={img}/>
          </div>
          <div className="mt-3 pl-2 mb-2 flex flex-col justify-between">
              <p className="w-3/4 text-lg font-semibold text-gray-900 mb-0 truncate">{name}</p>
              <p className="text-md text-gray-800 mt-0">{desc}</p>
          </div>
        </a>
      </Link>
        <a className="absolute bottom-0 right-0 mb-5 mr-6 cursor-pointer">
          <FiHeart className="h-6 w-6 hover:opacity-70 z-50"/>
        </a>
    </div>
  )
}