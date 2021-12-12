import Layout from "components/Layout"
import Section from "components/Content/Section"
import Stadistics from "components/Cards/Stadistics"
import Preview from "components/Cards/Preview"
import { items } from "data/careers"

export default function Careers() {
  const listaItems = items.map((item, idx) => <Preview key={idx} img={item.img} name={item.name} desc={item.desc} linkCard={item.linkCard} linkMap={item.linkMap} />)

  return (
  <div className="bg-white">
    <Stadistics />
    <div className="px-8">
      <Section 
        title={"Ingenieria y Arquitectura"}
        stat1={0}
        stat2={0}
        stat3={0}
        items={listaItems}
      />
    </div>
  </div>
  )
}

Careers.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>       
}