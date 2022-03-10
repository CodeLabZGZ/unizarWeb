import Link from "next/link"
export default function Shortcut({ name, descp, img, link }) {
  return (
    <div className="w-60 h-32 relative">
      <Link href={link}>
        <a className="flex flex-col items-start justify-between w-full h-full rounded-xl p-3 bg-gray-200 cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-gray-300">
            <img src={img} className="w-12 h-12 rounded-xl object-cover" />
          </div>
          <div className="flex flex-col w-full h-full pt-2.5">
            <p className="font-bold text-lg capitalize truncate w-full">
              {name}
            </p>
            <p className={`font-normal text-sm capitalize -mt-0.5`}>{descp}</p>
          </div>
        </a>
      </Link>
    </div>
  )
}
