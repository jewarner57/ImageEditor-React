import VerticalToolbar from '../VerticalToolbar'
import DeleteItem from '../DeleteItem'
import BringForward from '../BringForward'
import SendBackward from '../SendBackward'
import ChangeTextSettings from '../ChangeTextSettings'
import ChangeImageSettings from '../ChangeImageSettings'
import Deselect from '../Deselect'
import CropImage from '../CropImage'
import { useSelector } from 'react-redux'
import './style.scss'

function SelectedObjectToolbar(props) {

  const selectedItem = useSelector(state => state.selectedObject)

  const itemSpecificTools = (type) => {
    switch (type) {
      case 'text':
        return [<ChangeTextSettings />]
      case 'image':
        return [<ChangeImageSettings />, <CropImage />]
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
                <BringForward />,
                <SendBackward />,
                <Deselect />,
                < DeleteItem />
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