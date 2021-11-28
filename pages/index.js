import Layout from "components/Layout"
export default function Home() {
  return <>
  <p>index.js pag</p>
  </>
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
