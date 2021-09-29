import React, { useState } from 'react'
import './style.scss'

function CanvasDetails(props) {
  const { width, height, setWidth, setHeight, mouseX, mouseY } = props
  const [displayedWidth, setDisplayedWidth] = useState(width)
  const [displayedHeight, setDisplayedHeight] = useState(height)

  return (
    <div className="CanvasDetails">
      <div className="sizeDetailWrapper">
        <div className="sizeDetail">
          <p>Width:</p>
          <input
            className="sizeInput"
            value={displayedWidth}
            onBlur={(e) => { setWidth(e.target.value) }}
            onChange={(e) => setDisplayedWidth(e.target.value)}
          />
        </div>
        <div className="sizeDetail">
          <p>Height:</p>
          <input
            className="sizeInput"
            value={displayedHeight}
            onBlur={(e) => { setHeight(e.target.value) }}
            onChange={(e) => setDisplayedHeight(e.target.value)}
          />
        </div>
      </div>
      <p>X: {mouseX}, Y: {mouseY}</p>
    </div>
  )
}

export default CanvasDetails