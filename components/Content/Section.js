export default function Section({ title, stat1, stat2, stat3, items }) {
  return (
    <section className="mb-10">
      <div className="flex justify-between mb-4 rounded-xl bg-gray-100">
        <p className="text-lg font-semibold text-gray-900 mb-0 py-2 px-3">
          {title}
        </p>
      </div>
      <div className="flex gap-x-4 overflow-x-auto pb-2">
        {items.map((item) => item)}
      </div>
    </section>
  )
}
