import "./App.css";

function App() {
  const width=960;
  const height=500
  const centerX=width/2
  const centerY=height/2
  const strokeWidth= 20
  const eyeffsetX=90
  const eyeffsetY=100
  const eyeRadius=40
  return (
    <div>
      <svg width={width} height={height}>
        <circle
          cx={centerX}
          r={centerY-strokeWidth/2}
          cy={centerY}
          fill="yellow"
          stroke="black"
          stroke-width={strokeWidth}
        ></circle>
        <circle cx={centerX-eyeffsetX} r={eyeRadius} cy={centerY-eyeffsetY}></circle>
        <circle cx={centerX+eyeffsetX} r={eyeRadius} cy={centerY-eyeffsetY}></circle>
        
      </svg>
    </div>
  );
}

export default App;
