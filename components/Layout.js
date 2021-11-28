import Meta from "./Meta"
import Sidebar from "./Navegation/Sidebar"

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="h-screen flex">
        <Sidebar />
        <main className="flex-auto py-6">{children}</main>
      </div>
    </>
  )
}
