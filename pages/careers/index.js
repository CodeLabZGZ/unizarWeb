import Layout from "components/Layout"
import Section from "components/Content/Section"
import Stadistics from "components/Stadistics/WebStats"
import Preview from "components/Cards/Preview"

const RAMA_1 = "Artes y Humanidades"
const RAMA_2 = "Ciencias "
const RAMA_3 = "Ciencias de la Salud"
const RAMA_4 = "Ciencias Sociales y Jurídicas"
const RAMA_5 = "Ingeniería y Arquitectura"

export default function Careers({ carrers }) {
  const getCategory = (categoy) => {
    return categoy.map((item, idx) => (
      <Preview
        key={idx}
        img={item.img}
        name={item.name}
        desc={item.desc}
        linkCard={`${process.env.NEXT_PUBLIC_URL}/careers/${item.name}`}
        linkMap={item.linkMap || ""}
      />
    ))
  }

  const artesHumanidadesList = carrers.filter(
    (carrer) => carrer.branchKnowledge === RAMA_1
  )
  const cienciasList = carrers.filter(
    (carrer) => carrer.branchKnowledge === RAMA_2
  )
  const saludSaludList = carrers.filter(
    (carrer) => carrer.branchKnowledge === RAMA_3
  )
  const socialesJuridicasList = carrers.filter(
    (carrer) => carrer.branchKnowledge === RAMA_4
  )
  const ingeneriaArquitecturaList = carrers.filter(
    (carrer) => carrer.branchKnowledge === RAMA_5
  )

  const artesHumanidades = getCategory(artesHumanidadesList)
  const ciencias = getCategory(cienciasList)
  const saludSalud = getCategory(saludSaludList)
  const socialesJuridicas = getCategory(socialesJuridicasList)
  const ingeneriaArquitectura = getCategory(ingeneriaArquitecturaList)

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

export async function getServerSideProps() {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/careers`
  const { data } = await fetch(url).then((res) => res.json())

  return {
    props: { carrers: data.carrers },
  }
}
