import VerticalToolbar from '../VerticalToolbar'
import DeleteItem from '../DeleteItem'
import { useSelector } from 'react-redux'
import './style.css'

function SelectedObjectToolbar(props) {

  const selectedItem = useSelector(state => state.selectedObject)
  console.log(selectedItem)
  return (
    <div className="SelectedObjectToolbar">
      {
        selectedItem ?
          <VerticalToolbar
            contents={[<DeleteItem />]}
          />
          :
          ''
      }
    </div >
  )
}

export default SelectedObjectToolbar