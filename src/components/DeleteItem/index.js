import EditorButton from '../EditorButton'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCanvas, setSelectedObject } from '../../actions';

function DeleteItem(props) {
  const selectedItem = useSelector(state => state.selectedObject)
  const dispatch = useDispatch()

  return (
    <div className="ClearCanvas">
      <EditorButton
        clickAction={
          () => {
            dispatch(removeFromCanvas(selectedItem))
            dispatch(setSelectedObject(false))
          }}
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>}
        tooltip={`Delete ${selectedItem.type}`}
      />
    </div>
  )
}

export default DeleteItem