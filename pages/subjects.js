import Layout from "components/Layout"

export default function Subjects() {
  return (
  <div className="h-screen bg-red-500">
   <p>
       Asignaturas
   </p>
  </div>
  )
}

Subjects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>       
}