import Preview from "../Cards/Preview"
import { FiEdit2 } from "react-icons/fi";


export default function Section({title, stat1, stat2, stat3, items}) {
  return (
    <section className="px-8">
      <div className="flex justify-between mb-4 rounded-xl bg-gray-100">
        <p className="text-lg font-semibold text-gray-900 mb-0 py-2 px-3">{title}</p>
        <div className="flex gap-x-5 px-3">
          <div className="flex items-center gap-x-1">
            <FiEdit2 className="w-5 h-5 text-blue-500"/>
            <span className="text-lg font-semibold text-gray-900 mb-0">{stat1}</span>
          </div>
          <div className="flex items-center gap-x-1">
            <FiEdit2 className="w-5 h-5 text-yellow-500"/>
            <span className="text-lg font-semibold text-gray-900 mb-0">{stat2}</span>
          </div>
          <div className="flex items-center gap-x-1">
            <FiEdit2 className="w-5 h-5 text-gray-500"/>
            <span className="text-lg font-semibold text-gray-900 mb-0">{stat3}</span>
          </div>
        </div>
      </div>
        <div className="flex gap-x-4">
          {items.map((item, idx) =>
              <Preview 
                key={idx}
                img={item.img}
                name={item.name}
                desc={item.desc}
                linkCard={item.linkCard}
                linkMap={item.linkMap}
              />
          )}
      </div>
    </section>
  )
}