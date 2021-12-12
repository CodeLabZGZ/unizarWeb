import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

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
];


export default function App() {
  return (
    <div className="w-full h-full flex items-center justify-start py-5">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="actual" fill="#8884d8" />
        <Bar dataKey="anterior" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

