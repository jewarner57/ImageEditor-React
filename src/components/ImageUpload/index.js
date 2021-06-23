import { useDispatch } from 'react-redux';
import { addToCanvas } from '../../actions';

function ImageUpload(props) {
  const dispatch = useDispatch()

  const handleChange = (event) => {

    const img = new Image()
    img.src = URL.createObjectURL(event.target.files[0])

    img.onload = () => {
      dispatch(addToCanvas(
        {
          type: 'image',
          url: img.src,
          xPos: 0,
          yPos: 0,
          width: img.width,
          height: img.height
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