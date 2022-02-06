export default function SubjectPreview({ img, name, desc, linkCard }) {
  return (
    <div className="bg-color-light-neutral-2 h-full max-w-64 min-w-64 p-2 rounded-xl relative cursor-pointer">
      <a>
        <div className="shadow-md rounded-xl">
          <img className="h-40 rounded-xl w-full object-cover" src={img} />
        </div>
        <div className="mt-3 pl-2 mb-2 flex flex-col justify-between">
          <p className="w-3/4 text-lg font-semibold text-gray-900 mb-0 truncate">
            {name}
          </p>
          <p className="text-md text-gray-800 mt-0">{desc}</p>
        </div>
      </a>
    </div>
  )
}
