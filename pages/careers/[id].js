import Layout from "components/Layout"
import Stadistics from "components/Stadistics/WebStats"
import { items } from "data/subjects"
import SubjectPreview from "components/Cards/SubjectPreview"
import Section from "components/Content/Section"
import GetGrade from "libs/GetGrade"
import SubjectGraph from "components/Stadistics/SubjectGraph.js"

export default function Grados() {
  const listaItems = items.map((item, curso) => {
    return (
      <div key={curso} className="px-8">
        <Section
          title={GetGrade(curso + 1)}
          stat1={0}
          stat2={0}
          stat3={0}
          items={item.map((item, idx) => (
            <SubjectPreview
              key={idx}
              img={item.img}
              name={item.name}
              desc={item.desc}
              linkCard={item.linkCard}
            />
          ))}
        />
      </div>
    )
  })

  return (
    <div className="bg-white">
      <Stadistics />
      <div className="flex flex-col gap-y-1 px-8">
        <div className="h-82 flex gap-x-1 w-full mb-4">
          <div className="w-1/2 bg-gray-100 rounded-tl-lg rounded-bl-lg">
            <SubjectGraph />
          </div>
          <div className="w-1/2 bg-gray-100 rounded-tr-lg rounded-br-lg p-5">
            <form className="flex gap-x-5 px-5">
              <div className="flex flex-col gap-y-3 w-1/2 h-full">
                <label className="w-full font-medium text-lg" htmlFor="animals">
                  Lugar
                  <select
                    name="Lugar"
                    className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="Zgz">Zaragoza</option>
                    <option value="Hus">Huesca</option>
                    <option value="Ter">Teruel</option>
                    <option value="Alm">La Almunia</option>
                  </select>
                </label>
                <label className="w-full font-medium text-lg" htmlFor="animals">
                  Asignatura
                  <select
                    name="Asignatura 1"
                    className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Selecciona una asignatura</option>
                    <option value="Prog1">Programacion 1</option>
                    <option value="Mat1">Mates 1</option>
                    <option value="Mat2">Mates 2</option>
                    <option value="IC">Introduccion a los computadores</option>
                    <option value="FADE">
                      Fundamentos de administracion y direccion de empresas
                    </option>
                  </select>
                </label>
                <label className="w-full font-medium text-lg" htmlFor="animals">
                  Año
                  <select
                    name="animals"
                    className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Selecciona un año</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                  </select>
                </label>
              </div>
              <div className="flex flex-col gap-y-3 w-1/2 h-full">
                <label className="w-full font-medium text-lg" htmlFor="animals">
                  Lugar
                  <select
                    name="Lugar"
                    className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="Zgz">Zaragoza</option>
                    <option value="Hus">Huesca</option>
                    <option value="Ter">Teruel</option>
                    <option value="Alm">La Almunia</option>
                  </select>
                </label>
                <label className="w-full font-medium text-lg" htmlFor="animals">
                  Asignatura
                  <select
                    name="Asignatura 1"
                    className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="Prog1">Programacion 1</option>
                    <option value="Mat1">Mates 1</option>
                    <option value="Mat2">Mates 2</option>
                    <option value="IC">Introduccion a los computadores</option>
                    <option value="FADE">
                      Fundamentos de administracion y direccion de empresas
                    </option>
                  </select>
                </label>
                <label className="w-full font-medium text-lg" htmlFor="animals">
                  Año
                  <select
                    name="animals"
                    className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                  </select>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      {listaItems}
    </div>
  )
}

Grados.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
