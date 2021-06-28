import EditorButton from '../EditorButton'
import { useDispatch, useSelector } from 'react-redux'
import { updateObject } from '../../actions';

function BringForward(props) {
  const selectedItem = useSelector(state => state.selectedObject)
  const dispatch = useDispatch()

  return (
    <div className="BringForward">
      <EditorButton
        clickAction={
          () => {
            selectedItem.zIndex += 1
            dispatch(updateObject(selectedItem))
          }}
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3l12 18h-24z" /></svg>}
        tooltip={`Bring Forward`}
      />
    </div>
  )
}

export default BringForward