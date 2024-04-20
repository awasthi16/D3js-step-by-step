import "./App.css";
import { arc } from "d3";

function App() {
  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 20;
  const eyeffsetX = 90;
  const eyeffsetY = 100;
  const eyeRadius = 40;
  const mouthWidth = 20;
  const mouthRadious = 140;

  const mouthArc = arc()
    .innerRadius(mouthRadious)
    .outerRadius(mouthRadious + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);

  return (
    <div>
      <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
          <circle
            r={centerY - strokeWidth / 2}
            fill="yellow"
            stroke="black"
            stroke-width={strokeWidth}
          ></circle>
          <circle cx={eyeffsetX} r={eyeRadius} cy={-eyeffsetY}></circle>
          <circle cx={-eyeffsetX} r={eyeRadius} cy={-eyeffsetY}></circle>

          <path d={mouthArc()} />
        </g>
      </svg>
    </div>
  );
}

export default App;
