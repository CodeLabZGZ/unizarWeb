import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

const data = [
  {
    name: "NP",
    actual: 3,
    anterior: 8,
  },
  {
    name: "Susp",
    actual: 12,
    anterior: 18,
  },
  {
    name: "Aprob",
    actual: 10,
    anterior: 13,
  },
  {
    name: "Notab",
    actual: 3,
    anterior: 2,
  },
  {
    name: "Sobr",
    actual: 1,
    anterior: 0,
  },
  {
    name: "MH",
    actual: 1,
    anterior: 0,
  },
]
// Añadir un vector-lista que importandolo desde [id] dividamos este vector por trozos y lo añadamos a data los datos correspondientes
/* function rellenar(vector1, vector2){
    data = [
      {
        name: "NP",
        actual: vector1[0],
        anterior: vector2[0],
      },
      {
        name: "Susp",
        actual: vector1[1],
        anterior: vector2[1],
      },
      {
        name: "Aprob",
        actual: vector1[2],
        anterior: vector2[2],
      },
      {
        name: "Notab",
        actual: vector1[3],
        anterior: vector2[3],
      },
      {
        name: "Sobr",
        actual: vector1[4],
        anterior: vector2[4],
      },
      {
        name: "MH",
        actual: vector1[5],
        anterior: vector2[5],
      },
    ]
}
 *
 */
export default function App() {
  return (
    <div className="flex items-center py-5">
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="actual" fill="#8884d8" />
        <Bar dataKey="anterior" fill="#82ca9d" />
      </BarChart>
    </div>
  )
}
