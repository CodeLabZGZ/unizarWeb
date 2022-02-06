import {
  FiChevronLeft,
  FiChevronRight,
  FiBook,
  FiTrendingUp,
} from "react-icons/fi"
import { useState } from "react"

export default function StatsMenu({ func1, func2 }) {
  const [current, setCurrent] = useState(0)
  const places = ["Huesca", "Zaragoza", "Teruel"]
  const handleIncrement = () => {
    if (current + 1 < places.length) {
      setCurrent(current + 1)
    } else {
      setCurrent(0)
    }
  }

  const handleDecrement = () => {
    if (current - 1 < 0) {
      setCurrent(places.length - 1)
    } else {
      setCurrent(current - 1)
    }
  }

  return (
    <div className="flex items-center justify-between w-full py-2 px-10 bg-gray-100 mb-4">
      <div className="flex items-center gap-x-5">
        <button onClick={(e) => func1(e)}>
          <FiBook className="w-5 h-5" />
        </button>
        <button onClick={(e) => func2(e)}>
          <FiTrendingUp className="w-5 h-5" />
        </button>
      </div>
      <div className="flex items-center">
        <button onClick={handleDecrement}>
          <FiChevronLeft className="w-5 h-5" />
        </button>
        <span className="w-28 text-center truncate text-lg font-semibold text-gray-900 mb-0 py-2 px-3">
          {places[current]}
        </span>
        <button onClick={handleIncrement}>
          <FiChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
