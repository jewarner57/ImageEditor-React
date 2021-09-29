import EditorButton from '../EditorButton'
import { useDispatch, useSelector } from 'react-redux'
import { updateObject } from '../../actions';

function SendBackward(props) {
  const selectedItem = useSelector(state => state.selectedObject)
  const dispatch = useDispatch()

  return (
    <div className="SendBackward">
      <EditorButton
        clickAction={
          () => {
            selectedItem.zIndex -= 1
            dispatch(updateObject(selectedItem))
          }}
        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 21l-12-18h24z" /></svg>}
        tooltip={`Send Backward`}
      />
    </div>
  )
}

export default SendBackward