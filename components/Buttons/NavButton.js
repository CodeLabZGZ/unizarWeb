import Link from "next/link"

export default function Button({
  id,
  url,
  icon,
  text,
  classNameDiv,
  classNameText,
}) {
  return (
    <Link href={url || ""}>
      <a
        key={id}
        className={`flex items-center gap-x-2 w-full px-2 py-2.5 rounded ${classNameDiv}`}
      >
        {icon}
        <p
          className={`text-base font-medium text-left text-black capitalize truncate overflow-clip overflow-hidden tracking-tight ${classNameText}`}
        >
          {text}
        </p>
      </a>
    </Link>
  )
}
