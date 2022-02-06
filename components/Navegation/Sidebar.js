import { FcGoogle } from "react-icons/fc"
import NavButton from "../Buttons/NavButton.js"
import { useSession, signIn, signOut } from "next-auth/react"
import { sidebarLinks } from "../../data/links"
import Link from "next/link"

export default function Sidebar() {
  const { data: session } = useSession()

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
      <div className="w-full flex flex-col gap-y-2 p-2 absolute bottom-0">
        {!session ? (
          <button
            type="button"
            onClick={() =>
              signIn("google", {
                redirect: false,
              })
            }
            className="flex items-center justify-center gap-x-2 w-full px-2 py-2.5 rounded bg-white shadow"
          >
            <div className="flex items-center gap-x-2">
              <FcGoogle className="w-5 h-5" />
              <p className="text-base font-semibold text-black truncate overflow-clip overflow-hidden tracking-tight">
                Continue with Google
              </p>
            </div>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => signOut()}
            className="flex items-center gap-x-2 w-full px-2 py-2.5 rounded border-2 border-red-500 hover:bg-red-200"
          >
            <p className="mx-auto text-base font-medium text-black truncate overflow-clip overflow-hidden tracking-tight">
              Salir
            </p>
          </button>
        )}
      </div>
    </div>
  )
}
