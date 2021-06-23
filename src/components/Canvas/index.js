import React, { useRef, useEffect, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'

const Canvas = (props) => {
  const [canvasWidth, setCanvasWidth] = useState(500)
  const [canvasHeight, setCanvasHeight] = useState(500)
  // Get a list of canvas objects
  const objectsOnCanvas = useSelector(state => state.canvasObjects)
  const canvasRef = useRef(null)

  const draw = useCallback((ctx) => {
    // Loop through all objects on canvas
    objectsOnCanvas.sort((a, b) => (a.zIndex - b.zIndex)).forEach((obj) => {
      // If the object is an image then display it
      if (obj.type === 'image') {

        const img = new Image()
        img.src = obj.url

        img.onload = () => {
          ctx.drawImage(img, obj.xPos, obj.yPos, obj.width, obj.height)
        }
        img.onerror = function (err) {
          console.log(`image failed to load from ${img.src}`);
        };
      }
    })
  }, [objectsOnCanvas])

  const handleCanvasClick = (e) => {
    let bound = e.target.getBoundingClientRect();

    let x = e.clientX - bound.left - e.target.clientLeft;
    let y = e.clientY - bound.top - e.target.clientTop;

    console.log(x, y)
  }

  // const

  useEffect(() => {

    const canvas = canvasRef.current
    canvas.width = canvasWidth
    canvas.height = canvasHeight
    const context = canvas.getContext('2d')
    draw(context)

  }, [draw, canvasWidth, canvasHeight])

  return <canvas ref={canvasRef} onMouseDown={(e) => { handleCanvasClick(e) }} />
}

export default Canvas