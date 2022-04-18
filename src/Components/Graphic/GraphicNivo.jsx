import React from "react";

import { ResponsiveBump } from "@nivo/bump";

const GraphicNivo = ({ data }) => {
  return (
    <ResponsiveBump
      data={data}
      xPadding={0.75}
      xOuterPadding={0.35}
      yOuterPadding={1}
      colors={{ scheme: "purpleRed_green" }}
      lineWidth={4}
      activeLineWidth={5}
      inactiveLineWidth={3}
      activeOpacity={0.9}
      inactiveOpacity={0.15}
      endLabel={false}
      endLabelPadding={17}
      endLabelTextColor={{ from: "color", modifiers: [] }}
      pointSize={10}
      activePointSize={13}
      inactivePointSize={0}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      activePointBorderWidth={3}
      pointBorderColor={{ from: "serie.color" }}
      enableGridX={false}
      axisTop={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      margin={{ top: 20, right: 60, bottom: 40, left: 70 }}
      axisRight={null}
    />

    /*  <ResponsiveLine
      data={data}
      margin={{ top: 40, right: 30, bottom: 50, left: 70 }}
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
        tickPadding: 10,
        tickRotation: 0,

        legendOffset: 46,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Value",
        legendOffset: -50,
        legendPosition: "middle",
      }}
      lineWidth={3}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      enableArea={true}
      areaOpacity={0.4}
      useMesh={true}
      legends={[
        {
          anchor: "top",
          direction: "row",
          justify: false,
          translateX: -5,
          translateY: -25,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
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
    /> */
  );
};

export default GraphicNivo;
