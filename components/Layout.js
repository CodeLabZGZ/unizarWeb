import Meta from "./Meta"
import Sidebar from "./Navegation/Sidebar"

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="h-screen flex">
        <Sidebar />
        <div className="flex-auto overflow-y-auto">
          <main className="py-6">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
