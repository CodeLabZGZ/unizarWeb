import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"


export default function SubjectGraph({data}) {
  console.log(data)
  return (
    <div className="flex items-center py-5">
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="asig1" fill="#8884d8" />
        <Bar dataKey="asig2" fill="#82ca9d" />
      </BarChart>
    </div>
  )
}
