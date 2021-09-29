import './style.scss'
import EditorButton from '../EditorButton'
import { useDispatch } from 'react-redux'
import { addToCanvas, setSelectedObject } from '../../actions';
import { v4 as uuidv4 } from 'uuid';

function AddText(props) {
  const dispatch = useDispatch()

  const addTextToCanvas = () => {
    const text = 'Hello World'
    const font = 'monospace'
    const fontSize = 50

    const textObj = {
      type: 'text',
      id: uuidv4(),
      text: text,
      font: font,
      fontSize: `${fontSize}px`,
      xPos: 10,
      yPos: fontSize,
      width: fontSize * 0.6 * text.length,
      height: fontSize,
      isBeingDragged: false,
      dragStartX: 0,
      dragStartY: 0,
      color: '#000000'
    }

    dispatch(addToCanvas(textObj))
    dispatch(setSelectedObject(textObj))
  }

  return (
    <div className="AddText">
      <EditorButton
        clickAction={addTextToCanvas}
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 24 24"><path d="M22 0h-20v6h1.999c0-1.174.397-3 2.001-3h4v16.874c0 1.174-.825 2.126-2 2.126h-1v2h9.999v-2h-.999c-1.174 0-2-.952-2-2.126v-16.874h4c1.649 0 2.02 1.826 2.02 3h1.98v-6z" /></svg>}
        tooltip="Insert Text"
      />
    </div>
  )
}

export default AddText