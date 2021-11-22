import Layout from "components/Layout"

export default function Home() {
  return <>page</>
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
