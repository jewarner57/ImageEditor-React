import { useDispatch } from 'react-redux';
import { addToCanvas } from '../../actions';
import { v4 as uuidv4 } from 'uuid';

function ImageUpload(props) {
  const dispatch = useDispatch()

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

  return (
    <div>
      <input type="file" onChange={(e) => handleChange(e)} />
    </div>
  )
}

export default ImageUpload