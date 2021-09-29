import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { addToCanvas, setSelectedObject } from '../../actions';
import { v4 as uuidv4 } from 'uuid';
import EditorButton from '../EditorButton'
import './style.scss'

function ImageUpload(props) {
  const dispatch = useDispatch()
  const [inputElement, setInputElement] = useState();

  const handleChange = (event) => {
    const id = uuidv4()

    const img = new Image()

    const imageFile = new File([event.target.files[0]], `${id}.png`, { type: event.target.files[0].type });
    img.src = URL.createObjectURL(imageFile)
    console.log(img)


    img.onload = () => {
      const imgObj = {
        type: 'image',
        id: id,
        url: img.src,
        xPos: 0,
        yPos: 0,
        width: img.width,
        height: img.height,
        isBeingCropped: false,
        isBeingDragged: false,
        dragStartX: 0,
        dragStartY: 0,
        sizeProportion: img.height / img.width,
        sx: 0,
        sy: 0,
        sWidth: img.width,
        sHeight: img.height,
      }

      dispatch(addToCanvas(imgObj))
      dispatch(setSelectedObject(imgObj))
      event.target.value = null
    }

  }

  const uploadFile = (e) => {
    inputElement.click()
  }

  return (
    <div className="ImageUpload">

      <EditorButton
        clickAction={uploadFile}
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" /></svg>}
        tooltip="Upload Image"
      />

      <input
        className="uploadInput"
        type="file"
        ref={input => setInputElement(input)}
        onChange={(e) => handleChange(e)}
      />
    </div>
  )
}

export default ImageUpload