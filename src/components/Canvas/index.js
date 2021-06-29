import React, { useRef, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateObject, setSelectedObject } from '../../actions';
import CanvasDetails from '../CanvasDetails'
import './style.css'

const Canvas = (props) => {

  const { setCanvas } = props
  const canvasObjects = useSelector(state => state.canvasObjects)
  let selectedObjectID = useSelector(state => state.selectedObject).id

  const [canvasWidth, setCanvasWidth] = useState(800)
  const [canvasHeight, setCanvasHeight] = useState(600)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  // Get a list of canvas objects
  const objectsOnCanvas = useSelector(state => state.canvasObjects)
  const canvasRef = useRef(null)
  const dispatch = useDispatch()

  const handleClick = (e) => {
    const mousePos = getEventCanvasCoordinates(e)
    const clickedObj = getClickedObj(mousePos.x, mousePos.y)

    // If an object was clicked
    if (clickedObj !== undefined) {
      // Set that object to the new selected obj
      selectedObjectID = clickedObj.id
      dispatch(setSelectedObject(clickedObj))
    }
    else {
      // Clear the selected obj
      selectedObjectID = '0'
      dispatch(setSelectedObject(false))
    }
  }

  const handleMouseDown = (e) => {
    // Get the mouse x and y
    const mousePos = getEventCanvasCoordinates(e)
    const x = mousePos.x
    const y = mousePos.y

    const clickedElem = getClickedObj(x, y)

    if (clickedElem !== undefined && clickedElem.id === selectedObjectID) {
      clickedElem.isBeingDragged = true

      // Get the distance between the mouse and obj position
      // This can then be used to determine where to start drag from
      clickedElem.dragStartX = clickedElem.xPos - x
      clickedElem.dragStartY = clickedElem.yPos - y
    }
  }

  const handleMouseUp = (e) => {
    // On mouse up stop drag on all objects
    canvasObjects.forEach((obj) => {
      if (obj.isBeingDragged === true) {
        const updatedObj = obj
        updatedObj.isBeingDragged = false

        // Update object position once drag is finished
        dispatch(updateObject(updatedObj))
      }
    })
  }

  const handleMouseMove = (e) => {
    // Get the mouse x and y
    const mousePos = getEventCanvasCoordinates(e)

    setMouseX(mousePos.x)
    setMouseY(mousePos.y)

    canvasObjects.forEach((obj) => {
      if (obj.isBeingDragged === true) {
        const updatedObj = obj

        // Use the drag start to prevent elem from
        // always being dragged from top left corner
        updatedObj.xPos = mousePos.x + updatedObj.dragStartX
        updatedObj.yPos = mousePos.y + updatedObj.dragStartY
      }
    })
  }

  const getEventCanvasCoordinates = (e) => {
    let bound = e.target.getBoundingClientRect();
    let x = e.clientX - bound.left - e.target.clientLeft;
    let y = e.clientY - bound.top - e.target.clientTop;

    return { x: x, y: y }
  }

  const touchesObj = (x, y, obj) => {
    // If x and y are touching the object
    if ((x > obj.xPos && x < obj.xPos + obj.width)
      && (y > obj.yPos && y < obj.yPos + obj.height)) {
      return true
    }
    return false
  }

  const getClickedObj = (x, y) => {
    // Looks for the top level element in the click x, y
    // Returns the element or undefined if none found
    let clickedObj = undefined;

    canvasObjects.forEach((obj) => {
      if (touchesObj(x, y, obj) && (clickedObj === undefined || obj.zIndex > clickedObj.zIndex)) {
        clickedObj = obj
      }
    })

    return clickedObj ? clickedObj : undefined
  }

  useEffect(() => {

    const canvas = canvasRef.current
    setCanvas(canvas)
    canvas.width = canvasWidth
    canvas.height = canvasHeight
    const ctx = canvas.getContext('2d')
    let requestId;
    let images = {}

    const draw = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Loop through all objects on canvas
      objectsOnCanvas.sort((a, b) => (a.zIndex - b.zIndex)).forEach((obj) => {
        // If the object is an image
        if (obj.type === 'image') {

          // If image is being cropped
          if (selectedObjectID === obj.id && obj.isBeingCropped) {
            ctx.lineWidth = 8;
            ctx.strokeStyle = 'rgb(0, 255, 0)';
            ctx.strokeRect(obj.xPos, obj.yPos, obj.width, obj.height)
          }

          if (!images[obj.id]) {
            const img = new Image()
            img.src = obj.url

            img.onload = () => {
              images[obj.id] = img
              ctx.drawImage(img, obj.xPos, obj.yPos, obj.width, obj.height)
            }
            img.onerror = function (err) {
              console.log(`image failed to load from ${img.src}`);
            };
          }
          else {
            ctx.drawImage(images[obj.id], obj.xPos, obj.yPos, obj.width, obj.height)
          }
        }
        // If the object is text
        else if (obj.type === 'text') {
          ctx.textBaseline = 'top';
          ctx.fillStyle = obj.color
          ctx.font = `${obj.fontSize} ${obj.font}`;
          ctx.fillText(obj.text, obj.xPos, obj.yPos);
        }

        // If the object is selected, draw rect around it
        if (selectedObjectID === obj.id) {
          ctx.lineWidth = 2;
          ctx.strokeStyle = 'rgb(0, 100, 250)';
          ctx.strokeRect(obj.xPos, obj.yPos, obj.width, obj.height)
        }
      })

      requestId = requestAnimationFrame(draw);
    }

    draw()

    return () => {
      cancelAnimationFrame(requestId);
    };

  }, [objectsOnCanvas, canvasWidth, canvasHeight, selectedObjectID, setCanvas])

  return (
    <div className="Canvas">
      <canvas
        ref={canvasRef}
        onMouseDown={(e) => { handleMouseDown(e) }}
        onMouseLeave={(e) => { handleMouseUp(e) }}
        onMouseUp={(e) => { handleMouseUp(e) }}
        onMouseMove={(e) => { handleMouseMove(e) }}
        onClick={(e) => { handleClick(e) }}
      />
      <CanvasDetails
        width={canvasWidth}
        height={canvasHeight}
        setWidth={setCanvasWidth}
        setHeight={setCanvasHeight}
        mouseX={mouseX}
        mouseY={mouseY}
      />
    </div>
  )
}

export default Canvas