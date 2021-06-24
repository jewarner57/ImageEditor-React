import './style.css'

function CanvasDetails(props) {
  const { width, height, setWidth, setHeight, mouseX, mouseY } = props

  return (
    <div className="CanvasDetails">
      <div className="sizeDetailWrapper">
        <div className="sizeDetail">
          <p>Width:</p> <input className="sizeInput" value={width} onChange={(e) => setWidth(e.target.value)}></input>
        </div>
        <div className="sizeDetail">
          <p>Height:</p> <input className="sizeInput" value={height} onChange={(e) => setHeight(e.target.value)}></input>
        </div>
      </div>
      <p>X: {mouseX}, Y: {mouseY}</p>
    </div>
  )
}

export default CanvasDetails