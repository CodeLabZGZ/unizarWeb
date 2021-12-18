import Layout from "components/Layout"
import Section from "components/Content/Section"
import Stadistics from "components/Cards/Stadistics"
import Preview from "components/Cards/Preview"
import { example, items } from "data/careers"

export default function Careers() {
  const getCategory = (categoy) => {
    return categoy.map((item, idx) => (
      <Preview
        key={idx}
        img={item.img}
        name={item.name}
        desc={item.desc}
        linkCard={item.linkCard}
        linkMap={item.linkMap}
      />
    ))
  }

  const artesHumanidades = getCategory(example)

  console.log(artesHumanidades)
  const ciencias = getCategory(example)
  const saludSalud = getCategory(example)
  const socialesJuridicas = getCategory(example)
  const ingeneriaArquitectura = getCategory(items)

  return (
    <div className="bg-white">
      <Stadistics />
      <div className="px-8">
        <Section
          title={"Artes y humanidades"}
          stat1={0}
          stat2={0}
          stat3={0}
          items={artesHumanidades}
        />
        <Section
          title={"Ciencias"}
          stat1={0}
          stat2={0}
          stat3={0}
          items={ciencias}
        />
        <Section
          title={"Ciencias de la salud"}
          stat1={0}
          stat2={0}
          stat3={0}
          items={saludSalud}
        />
        <Section
          title={"Ciencias sociales y juridicas"}
          stat1={0}
          stat2={0}
          stat3={0}
          items={socialesJuridicas}
        />
        <Section
          title={"Ingenieria y Arquitectura"}
          stat1={0}
          stat2={0}
          stat3={0}
          items={ingeneriaArquitectura}
        />
      </div>
    </div>
  )
}

Careers.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
