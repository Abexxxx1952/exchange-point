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
  );
};

export { GraphicNivo };
