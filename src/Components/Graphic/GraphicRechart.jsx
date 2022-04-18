import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Label,
} from "recharts";

import React from "react";

const GraphicRechart = ({ data }) => {
  console.log(data);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={800}
        height={600}
        data={data}
        margin={{
          top: 10,
          right: 25,
          left: 20,
          bottom: 20,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#cfe4e6" stopOpacity={0.6} />
            <stop offset="95%" stopColor="#cfe4e6" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <Area
          type="basis"
          dataKey="value"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <CartesianGrid strokeDasharray="3 3 " vertical={false} />
        <XAxis dataKey="dateCur" axisLine={false} tickLine={false}>
          <Label value="Date" offset={0} position="bottom" />
        </XAxis>
        <YAxis
          axisLine={false}
          tickLine={false}
          type="number"
          domain={["dataMin-0.02", "dataMax"]}
          padding={{ bottom: 10 }}
        >
          <Label value="Value" offset={0} angle={-90} position="left" />
        </YAxis>
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default GraphicRechart;
