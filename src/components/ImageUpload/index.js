import { useDispatch } from 'react-redux';
import { addToCanvas } from '../../actions';

function ImageUpload(props) {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(addToCanvas(
      {
        type: 'image',
        url: URL.createObjectURL(event.target.files[0])
      }
    ))
  }

  return (
    <div>
      <input type="file" onChange={(e) => handleChange(e)} />
    </div>
  )
}

export default ImageUpload