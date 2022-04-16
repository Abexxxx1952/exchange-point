import { ResponsiveLine } from "@nivo/line";

import React from "react";

const Graphic = ({ data }) => {
  console.log(data);
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="monotoneX"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Date",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Value",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      lineWidth={4}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={3}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      enableArea={true}
      useMesh={true}
      legends={[
        {
          anchor: "top",
          direction: "column",
          justify: false,
          translateX: 42,
          translateY: -39,
          itemWidth: 100,
          itemHeight: 20,
          itemsSpacing: 4,
          symbolSize: 20,
          symbolShape: "circle",
          itemDirection: "left-to-right",
          itemTextColor: "#777",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default Graphic;

/* [
  {
    "id": "japan",
    "color": "hsl(309, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 128
      },
      {
        "x": "helicopter",
        "y": 148
      },
      {
        "x": "boat",
        "y": 230
      },
      {
        "x": "train",
        "y": 249
      },
      {
        "x": "subway",
        "y": 158
      },
      {
        "x": "bus",
        "y": 234
      },
      {
        "x": "car",
        "y": 259
      },
      {
        "x": "moto",
        "y": 91
      },
      {
        "x": "bicycle",
        "y": 143
      },
      {
        "x": "horse",
        "y": 9
      },
      {
        "x": "skateboard",
        "y": 143
      },
      {
        "x": "others",
        "y": 27
      }
    ]
  }] */
