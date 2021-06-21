import React, { useRef, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'

const Canvas = (props) => {
  // Get a list of canvas objects
  const objectsOnCanvas = useSelector(state => state.canvasObjects)
  const canvasRef = useRef(null)

  const draw = useCallback((ctx) => {
    // Loop through all objects on canvas
    objectsOnCanvas.forEach((obj) => {
      // If the object is an image then display it
      if (obj.type === 'image') {

        const img = new Image()
        img.src = obj.url

        img.onload = () => {
          ctx.drawImage(img, 0, 0, img.width, img.height)
        }
        img.onerror = function (err) {
          console.log('image failed to load');
        };
      }
    })
  }, [objectsOnCanvas])

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    draw(context)

  }, [draw])

  return <canvas ref={canvasRef} />
}

export default Canvas