import Layout from "components/Layout"
import Shortcut from "components/Cards/Shortcut"
import { buttons } from "data/buttons.js"

export default function Home() {
  const lista = buttons.map((item, idx) => (
    <Shortcut
      key={idx}
      link={item.link}
      img={item.img}
      name={item.name}
      descp={item.descp}
    />
  ))

  return (
    <div className="px-6">
      <div className="flex flex-wrap gap-4">{lista}</div>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
