import EditorButton from '../EditorButton'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updateObject, addToCanvas, removeFromCanvas } from '../../actions';
import { v4 as uuidv4 } from 'uuid';

import './style.css'

function CropImage(props) {
  const selectedItem = useSelector(state => state.selectedObject)
  const dispatch = useDispatch()
  const [rectIDs, setRectIDs] = useState([])

  const createNewRect = (x, y, width, height, position) => {
    const id = uuidv4()

    dispatch(addToCanvas({
      type: 'handle',
      id: id,
      xPos: x,
      yPos: y,
      width: width,
      height: height,
      handleLocation: position,
      isBeingDragged: false,
      isBeingCropped: false,
      parentID: selectedItem.id,
      dragStartX: 0,
      dragStartY: 0,
      color: '#000000',
      parent: selectedItem.id
    }))

    return id
  }

  return (
    <div className="CropImage">
      <EditorButton
        clickAction={
          () => {
            selectedItem.isBeingCropped = !selectedItem.isBeingCropped
            dispatch(updateObject(selectedItem))
            // If a crop is starting
            if (selectedItem.isBeingCropped) {
              setRectIDs([
                createNewRect(selectedItem.xPos, selectedItem.yPos, 30, 30, 'top'),
                createNewRect(Number(selectedItem.width) + Number(selectedItem.xPos) - 30, Number(selectedItem.height) + Number(selectedItem.yPos) - 30, 30, 30, 'bottom')
              ])
              console.log()
            }
            else {
              dispatch(removeFromCanvas({ id: rectIDs[0] }))
              dispatch(removeFromCanvas({ id: rectIDs[1] }))
            }
          }
        }
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M24 18h-4v-14h-14v-4h-2v4h-4v2h4v14h14v4h2v-4h4v-2zm-18 0v-12h12v12h-12zm2-8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm5.292.5l-1.812 3.833-1.48-1.272-2 3.439h8.292l-3-6z" /></svg>}
        tooltip="Crop Image"
      />
    </div>
  )
}

export default CropImage