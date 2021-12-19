import Link from "next/link"
import { FiBookmark } from "react-icons/fi"
export default function Shortcut({ name, descp, img, link, func }) {
  return (
    <div className="w-60 h-32 relative">
      <Link href={link}>
        <a className="flex flex-col items-start justify-between w-full h-full rounded-xl p-3 bg-gray-200 cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-gray-300">
            <img src={img} className="w-full h-full rounded-xl" />
          </div>
          <div className="flex flex-col w-full h-full pt-2.5">
            <p className="font-bold text-lg capitalize truncate w-full">
              {name}
            </p>
            <p className={`font-normal text-sm capitalize -mt-0.5`}>{descp}</p>
          </div>
        </a>
      </Link>
      <button
        onClick={(e) => console.log(e)}
        className="absolute top-0 right-0 m-3"
      >
        <FiBookmark className="w-6 h-auto" />
      </button>
    </div>
  )
}
