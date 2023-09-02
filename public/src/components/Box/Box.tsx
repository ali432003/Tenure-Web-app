import React from 'react';
// import { BarChart } from '@mui/x-charts/BarChart';
import {  Line, LineChart, Tooltip, XAxis, YAxis,ResponsiveContainer } from 'recharts';
import {ChartHoverBox} from '../Charthoverbox/ChartHoverBox.tsx'

const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]



export default function Box(props: any) {
  return (
    <div className="mt-5 mx-5 relative border rounded-lg border-solid" style={{ color: 'rgb(28, 92, 95)' }}>
      <div className=" rounded-lg w-full p-4 pb-0">
        <div className="flex justify-start items-start h-full">
          <img src={`src/assets/icons/${props.img}`} className="mr-2" alt="" />
          <h1>{props.title}</h1>
        </div>
        <div className="flex justify-between mt-5">
          <div className="justify-start text-start">
            <h4>This month</h4>
            <h1 className="text-5xl my-4">{props.valueT}</h1>
            <h6 className="text-start my-2">{props.h6}: 8</h6>
            <h6>Average {props.avg}: $150.20</h6>
          </div>
          <div className="justify-end text-start ms-2" style={{ color: '#5A7894' }}>
            <h4>Last month</h4>
            <h1 className="text-5xl my-4">{props.valueL}</h1>
            <h6 className=" my-2">{props.h6}: 8</h6>
            <h6>Average {props.avg}: $150.20</h6>
          </div>
        </div>
        <div className="mt-7 w-fit m-auto">
            Last 6 months
      {/* {props.chart} */}
   
      <LineChart width={730} height={250} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >
  {/* <CartesianGrid strokeDasharray="3 3" /> */}
  <XAxis dataKey="name"  axisLine />
  <Tooltip content={<ChartHoverBox active={undefined} payload={undefined} label={undefined}/>} />
  {/* <Legend /> */}

  <Line type="monotone" dataKey="uv" stroke="rgb(56 133 123 /1)" strokeWidth={3} dot={<CustomDot stroke="tomato" />} />
</LineChart>

   
        </div>
      </div>
    </div>
  );
}

const CustomDot = (props:any) => {
  const { cx, cy, stroke } = props;

  return (
    <svg x={cx - 8} y={cy - 8} width={16} height={16}>
      {/* Increase the 'r' attribute to increase the dot size */}
      <circle cx={8} cy={8} r={5} stroke={stroke} strokeWidth={2} fill="white" />
    </svg>
  );
};