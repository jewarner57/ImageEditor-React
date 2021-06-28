import VerticalToolbar from '../VerticalToolbar'
import DeleteItem from '../DeleteItem'
import BringForward from '../BringForward'
import SendBackward from '../SendBackward'
import { useSelector } from 'react-redux'
import './style.css'

function SelectedObjectToolbar(props) {

  const selectedItem = useSelector(state => state.selectedObject)

  return (
    <div className="SelectedObjectToolbar">
      {
        selectedItem ?
          <VerticalToolbar
            contents={[
              <DeleteItem />,
              <BringForward />,
              <SendBackward />
            ]}
          />
          :
          ''
      }
    </div >
  )
}

export default SelectedObjectToolbar