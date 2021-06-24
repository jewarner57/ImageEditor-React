import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { addToCanvas } from '../../actions';
import { v4 as uuidv4 } from 'uuid';
import EditorButton from '../EditorButton'
import './style.css'

function ImageUpload(props) {
  const dispatch = useDispatch()
  const [inputElement, setInputElement] = useState();

  const handleChange = (event) => {

    const img = new Image()
    img.src = URL.createObjectURL(event.target.files[0])

    img.onload = () => {
      dispatch(addToCanvas(
        {
          type: 'image',
          id: uuidv4(),
          url: img.src,
          xPos: 0,
          yPos: 0,
          width: img.width,
          height: img.height,
          isBeingDragged: false,
          dragStartX: 0,
          dragStartY: 0
        }
      ))
    }
  }

  const uploadFile = (e) => {
    inputElement.click()
  }

  return (
    <div className="ImageUpload">

      <EditorButton
        clickAction={uploadFile}
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 18"><path d="M19.5 12c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-18 0l4-5.96 2.48 1.96 2.52-4 1.853 2.964c-1.271 1.303-1.977 3.089-1.827 5.036h-9.026zm10.82 4h-14.82v-18h22v7.501c-.623-.261-1.297-.422-2-.476v-5.025h-18v14h11.502c.312.749.765 1.424 1.318 2zm-9.32-11c-.828 0-1.5-.671-1.5-1.5 0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5z" /></svg>}
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