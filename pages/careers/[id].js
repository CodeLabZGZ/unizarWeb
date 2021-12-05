import Layout from "components/Layout"
import Stadistics from "components/Cards/Stadistics"
import { FiChevronLeft, FiChevronRight, FiHeart } from "react-icons/fi"
import { items } from "data/subjects"
import SubjectPreview from "components/Cards/SubjectPreview"
import Section from "components/Content/Section"

export default function Grados() {
  const listaItems = items.map((item, curso) => {
    return (
        <div key={curso} className="px-8">
          <Section title={curso + 1} 
            stat1={0} 
            stat2={0} 
            stat3={0}
            items={item.map((item, idx) => <SubjectPreview key={idx} img={item.img} name={item.name} desc={item.desc} linkCard={item.linkCard} linkMap={item.linkMap}/>)}
          />
        </div>
  )})
  
  return (
    <div className="bg-white">
      <Stadistics />
      <div className="flex items-center justify-end w-full py-2 bg-gray-100 mb-4">
        <div className="flex items-center mr-10">
          <button>
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <p className="text-lg font-semibold text-gray-900 mb-0 py-2 px-3">Zaragoza</p>
          <button>
            <FiChevronRight className="w-5 h-5"/>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 px-8 mb-16">
        <div className="flex bg-gray-100 w-full h-96 rounded-lg drop-shadow-sm">
            <img 
              src={"https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"} 
              alt={"DAG"} 
              className="w-full h-full rounded-lg object-cover object-center"
            />
        </div>
        <div className="h-72 flex gap-x-1 w-full">
          <div className="w-1/2 bg-gray-100 rounded-tl-lg rounded-bl-lg">
            <img 
              src={"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"} 
              alt={"Estadisticas_asignatura"} 
              className="w-full h-full rounded-tl-lg rounded-bl-lg object-cover object-center"
            />
          </div> 

          <div className="w-1/2 bg-gray-100 rounded-tr-lg rounded-br-lg p-5">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">PSCD</h1>
              <FiHeart className="w-5 h-5" />
            </div>

            <div className="flex gap-y-3 mt-8 px-2">
              <div className="w-1/2 space-y-6">
                <div className="flex items-center gap-x-2">
                  <p className="font-bold">Curso</p>
                  <span>{0}</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="font-bold">Créditos</p>
                  <span>{0}</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="font-bold">Carácter</p>
                  <span>{0}</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="font-bold">Código</p>
                  <span>{0}</span>
                </div>
              </div>
              <div className="w-1/2 space-y-6 px-2">
                <div className="flex items-center gap-x-2">
                  <p className="font-bold">Periodo</p>
                  <span>{0}</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="font-bold">Estado</p>
                  <span>{0}</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="font-bold">Idioma</p>
                  <span>{0}</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="font-bold">FAVS</p>
                  <span>{0}</span>
                </div>
              </div>
            </div>
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