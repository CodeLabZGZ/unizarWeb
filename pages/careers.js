import Layout from "components/Layout"
import Section from "components/Content/Section"
import { items } from "data/careers"

export default function Careers() {
  return (
  <div className="bg-white">
    <div className="flex justify-center w-full py-2 bg-gray-100 mb-4">
      <p className="text-lg font-semibold text-gray-900 mb-0 py-2 px-3">Estadísticas</p>
    </div>
    <Section 
      title={"Ingenieria y Arquitectura"}
      stat1={0}
      stat2={0}
      stat3={0}
      items={items}
    />
  </div>
  )
}

Careers.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>       
}
