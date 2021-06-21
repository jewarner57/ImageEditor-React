import React, { useRef, useEffect, useCallback } from 'react'

const Canvas = (props) => {

  const canvasRef = useRef(null)

  const draw = useCallback((ctx, frameCount) => {

    const img = new Image()
    img.src = props.uploadedImage

    img.onload = () => {
      ctx.drawImage(img, 0, 0, 150, 75)
    }
    img.onerror = function (err) { console.log('failed'); };

  }, [props.uploadedImage])

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    draw(context, frameCount)

  }, [draw])

  return <canvas ref={canvasRef} />
}

export default Canvas