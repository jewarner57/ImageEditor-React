import React, { useRef, useEffect, useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateObject } from '../../actions';
import './style.css'

const Canvas = (props) => {

  const canvasObjects = useSelector(state => state.canvasObjects)
  const [canvasWidth, setCanvasWidth] = useState(800)
  const [canvasHeight, setCanvasHeight] = useState(600)

  // Get a list of canvas objects
  const objectsOnCanvas = useSelector(state => state.canvasObjects)
  const canvasRef = useRef(null)
  const dispatch = useDispatch()

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

  const handleMouseDown = (e) => {
    // Get the mouse x and y
    let bound = e.target.getBoundingClientRect();
    let x = e.clientX - bound.left - e.target.clientLeft;
    let y = e.clientY - bound.top - e.target.clientTop;

    const selectedElem = getClickedImage(x, y)

    if (selectedElem !== { zIndex: -1 }) {
      selectedElem.isBeingDragged = true

      // Get the distance between the mouse and obj position
      // This can then be used to determine where to start drag from
      selectedElem.dragStartX = selectedElem.xPos - x
      selectedElem.dragStartY = selectedElem.yPos - y

      dispatch(updateObject(selectedElem))
    }

  }

  const handleMouseUp = (e) => {
    // On mouse up stop drag on all objects
    canvasObjects.forEach((obj) => {
      if (obj.isBeingDragged === true) {
        const updatedObj = obj
        updatedObj.isBeingDragged = false

        dispatch(updateObject(updatedObj))
      }
    })
  }

  const handleMouseMove = (e) => {
    // Get the mouse x and y
    let bound = e.target.getBoundingClientRect();
    let x = e.clientX - bound.left - e.target.clientLeft;
    let y = e.clientY - bound.top - e.target.clientTop;

    canvasObjects.forEach((obj) => {
      if (obj.isBeingDragged === true) {
        const updatedObj = obj

        // Use the drag start to prevent elem from
        // always being dragged from top left corner
        updatedObj.xPos = x + updatedObj.dragStartX
        updatedObj.yPos = y + updatedObj.dragStartY

        // Update the object's position
        dispatch(updateObject(updateObject))
      }
    })
  }

  const getClickedImage = (x, y) => {
    // Get the top level element that was clicked
    let clickedObj = { zIndex: -1 };
    canvasObjects.forEach((obj) => {
      if (touchesObj(x, y, obj) && obj.zIndex > clickedObj.zIndex) {
        clickedObj = obj
      }
    })

    return clickedObj
  }

  const touchesObj = (x, y, obj) => {
    // If x and y are touching the object
    if ((x > obj.xPos && x < obj.xPos + obj.width)
      && (y > obj.yPos && y < obj.yPos + obj.height)) {
      return true
    }
    return false
  }

  useEffect(() => {

    const canvas = canvasRef.current
    canvas.width = canvasWidth
    canvas.height = canvasHeight
    const context = canvas.getContext('2d')

    draw(context)

  }, [draw, canvasWidth, canvasHeight])

  return (
    <div className="Canvas">
      <canvas
        ref={canvasRef}
        onMouseDown={(e) => { handleMouseDown(e) }}
        onMouseLeave={(e) => { handleMouseUp(e) }}
        onMouseUp={(e) => { handleMouseUp(e) }}
        onMouseMove={(e) => { handleMouseMove(e) }}
      />
    </div>
  )
}

export default Canvas