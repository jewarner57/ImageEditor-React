import VerticalToolbar from '../VerticalToolbar'
import DeleteItem from '../DeleteItem'
import BringForward from '../BringForward'
import SendBackward from '../SendBackward'
import ChangeTextSettings from '../ChangeTextSettings'
import ChangeImageSettings from '../ChangeImageSettings'
import { useSelector } from 'react-redux'
import './style.css'

function SelectedObjectToolbar(props) {

  const selectedItem = useSelector(state => state.selectedObject)

  const itemSpecificTools = (type) => {
    switch (type) {
      case 'text':
        return [<ChangeTextSettings />]
      case 'image':
        return [<ChangeImageSettings />]
      default:
        return []
    }
  }

  return (
    <div className="SelectedObjectToolbar">
      {

        <VerticalToolbar
          contents={
            selectedItem ?
              [
                ...itemSpecificTools(selectedItem.type),
                < DeleteItem />,
                <BringForward />,
                <SendBackward />,
              ]
              :
              []
          }
        />

      }
    </div >
  )
}

export default SelectedObjectToolbar