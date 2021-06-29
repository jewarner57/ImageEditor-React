import EditorButton from '../EditorButton'
import { useDispatch, useSelector } from 'react-redux'
import { updateObject } from '../../actions';

import './style.css'

function CropImage(props) {
  const selectedItem = useSelector(state => state.selectedObject)
  const dispatch = useDispatch()

  return (
    <div className="CropImage">
      <EditorButton
        clickAction={
          () => {
            selectedItem.isBeingCropped = !selectedItem.isBeingCropped
            dispatch(updateObject(selectedItem))
          }
        }
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M24 18h-4v-14h-14v-4h-2v4h-4v2h4v14h14v4h2v-4h4v-2zm-18 0v-12h12v12h-12zm2-8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm5.292.5l-1.812 3.833-1.48-1.272-2 3.439h8.292l-3-6z" /></svg>}
        tooltip="Crop Image"
      />
    </div>
  )
}

export default CropImage