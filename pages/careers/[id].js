import Layout from "components/Layout"
import Stadistics from "components/Stadistics/WebStats"
import SubjectPreview from "components/Cards/SubjectPreview"
import Section from "components/Content/Section"
import GetGrade from "libs/GetGrade"
import SubjectGraph from "components/Stadistics/SubjectGraph.js"
import { useState, useEffect } from "react"

export default function Grados({ career, subjects }) {
  const ACTUAL_YEAR = new Date().getFullYear()
  const [vec1, setVec1] = useState([])
  const [vec2, setVec2] = useState([])
  const [data, setData] = useState([])

  function crearLista(subjects) {
    const cursos = new Map()
    subjects.forEach((subject) => {
      if (!cursos.has(subject.course)) {
        cursos.set(subject.course, subject.course)
      }
    })
    const lista = []
    for (let curso = 1; curso <= cursos.size; curso++) {
      const aux = subjects.filter((subject) => subject.course === curso)
      lista.push(aux)
    }
    return lista
  }

  const items = crearLista(subjects)

  const listaItems = items.map((item, curso) => {
    return (
      <div key={curso} className="px-8">
        <Section
          title={GetGrade(curso + 1)}
          items={item.map((item, idx) => (
            <SubjectPreview
              key={idx}
              img={item.img}
              name={item.name}
              desc={item.desc}
              linkCard={""}
            />
          ))}
        />
      </div>
    )
  })

  const handleStats = async (e) => {
    e.preventDefault()
    const params1 = new URLSearchParams({
      career: career,
      place: e.target.place1.value, 
      subject: e.target.subject1.value, 
      year: e.target.year1.value,
    })
    const params2 = new URLSearchParams({
      career: career,
      place: e.target.place2.value, 
      subject: e.target.subject2.value, 
      year: e.target.year2.value,
    })

    const vec1 = await fetch(`${process.env.NEXT_PUBLIC_URL}api/notes?${params1}`).then(res => res.json())
    const vec2 = await fetch(`${process.env.NEXT_PUBLIC_URL}api/notes?${params2}`).then(res => res.json())

    setVec1(vec1.data.marks)
    setVec2(vec2.data.marks)
  }


  useEffect(() => {
    const X = ["NP", "Susp", "Aprob", "Notab", "Sobr", "MH"]
    const getData = (vec1 , vec2) => {
      const data = []
      for (let i = 0; i < X.length; i++) {
        data.push({
          name: X[i],
          asig1: vec1[i] || 0,
          asig2: vec2[i] || 0
        }) 
      }
      return data
    }

    setData(getData(vec1, vec2))
  }, [vec1, vec2])

  const getYears = () => {
    const years = []
    for(let year = 2018; year <= ACTUAL_YEAR; year++) {
      years.push(<option key={year} value={year}>{year}</option>)
    }
    return years
  }
  const yearsOpt = getYears()

  const getSubjects = (subjectList => {
    const subjects = []
    subjectList.forEach(subject => {
      subjects.push(<option key={subject} value={subject}>{subject}</option>)
    });
    return subjects
  })

  let subjectsOpt = subjects.map(item => item.name)
  subjectsOpt = getSubjects(Array.from(new Set(subjectsOpt)))


  return (
    <div className="bg-white">
      <Stadistics />
      <div className="flex flex-col gap-y-1 px-8">
        <div className="h-82 flex gap-x-1 w-full mb-4">
          <div className="w-1/2 bg-gray-100 rounded-tl-lg rounded-bl-lg">
            <SubjectGraph data={data}/>
          </div>
          <div className="w-1/2 bg-gray-100 rounded-tr-lg rounded-br-lg p-5">
            <form onSubmit={e => handleStats(e)} className="flex gap-x-5 px-5">
              <div className="flex flex-col gap-y-3 w-1/2 h-full">
                <label className="w-full font-medium text-lg">
                  Lugar
                  <select
                    id="place1"
                    name="place1"
                    className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Selecciona una ciudad</option>
                    <option value="zaragoza">Zaragoza</option>
                    <option value="huesca">Huesca</option>
                    <option value="teruel">Teruel</option>
                    <option value="la almunia">La Almunia</option>
                  </select>
                </label>
                <label className="w-full font-medium text-lg">
                  Asignatura
                  <select
                    id="subject1"
                    name="subject1"
                    className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Selecciona una asignatura</option>
                    {subjectsOpt.map(opt => opt)}
                  </select>
                </label>
                <label className="w-full font-medium text-lg">
                  Año
                  <select
                    id="year1"
                    name="year1"
                    className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Selecciona un año</option>
                    {yearsOpt.map(opt => opt)}
                  </select>
                </label>
              </div>
              <div className="flex flex-col gap-y-3 w-1/2 h-full">
                <label className="w-full font-medium text-lg">
                  Lugar
                  <select
                    id="place2"
                    name="place2"
                    className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Selecciona una ciudad</option>
                    <option value="zaragoza">Zaragoza</option>
                    <option value="huesca">Huesca</option>
                    <option value="teruel">Teruel</option>
                    <option value="la almunia">La Almunia</option>
                  </select>
                </label>
                <label className="w-full font-medium text-lg">
                  Asignatura
                  <select
                    id="subject2"
                    name="subject2"
                    className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Selecciona una asignatura</option>
                    {subjectsOpt.map(opt => opt)}
                  </select>
                </label>
                <label className="w-full font-medium text-lg">
                  Año
                  <select
                    id="year2"
                    name="year2"
                    className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Selecciona un año</option>
                    {yearsOpt.map(opt => opt)}
                  </select>
                </label>
              </div>
              <button type="submit" className="">
                clicka
              </button>
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

export async function getServerSideProps(req) {
  const { id } = req.params
  const parametros = new URLSearchParams({
    careerId: id,
  })
  const url = `${process.env.NEXT_PUBLIC_URL}api/subjects?${parametros}`
  const { data } = await fetch(url).then((res) => res.json())

  return {
    props: { career: id, subjects: data.subjects },
  }
}
