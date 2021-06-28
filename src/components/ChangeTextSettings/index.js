import EditorButton from '../EditorButton'
import SettingsModal from '../SettingsModal'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateObject } from '../../actions';
import './style.css'

function ChangeTextSettings(props) {
  const [modalOpen, setModalOpen] = useState(false)
  const selectedItem = useSelector(state => state.selectedObject)
  const [textValue, setTextValue] = useState(selectedItem.text)
  const [fontValue, setFontValue] = useState(selectedItem.fontSize.slice(0, -2))
  const dispatch = useDispatch()

  const getNewTextSize = (textObj) => {
    console.log(textObj.fontSize.slice(0, -2))
    console.log(textObj.text.length)
    return textObj.fontSize.slice(0, -2) * 0.6 * textObj.text.length
  }

  return (
    <div className="ChangeTextSettings">
      <EditorButton
        clickAction={() => { setModalOpen(!modalOpen) }}
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20v1h-4v-1h.835c.258 0 .405-.178.321-.422l-.473-1.371h-2.231l-.575-1.59h2.295l-1.362-4.077-1.154 3.451-.879-2.498.921-2.493h2.222l3.033 8.516c.111.315.244.484.578.484h.469zm-6-1h1v2h-7v-2h.532c.459 0 .782-.453.633-.887l-.816-2.113h-6.232l-.815 2.113c-.149.434.174.887.633.887h1.065v2h-7v-2h.43c.593 0 1.123-.375 1.32-.935l5.507-15.065h3.952l5.507 15.065c.197.56.69.935 1.284.935zm-10.886-6h4.238l-2.259-6.199-1.979 6.199z" /></svg>}
        tooltip="Text Settings"
      />

      {modalOpen ?
        <SettingsModal
          exitAction={setModalOpen}
          header="Text Settings"
          contents={
            <div className="modalContents">
              <label>
                <div>Text Value:</div>
                <input
                  value={textValue}
                  onChange={
                    (e) => {
                      setTextValue(e.target.value)
                      selectedItem.text = e.target.value
                      selectedItem.width = getNewTextSize(selectedItem)
                      selectedItem.height = Number(selectedItem.fontSize.slice(0, -2))
                      dispatch(updateObject(selectedItem))
                    }
                  }
                />
              </label>

              <label>
                <div>Font Size:</div>
                <input
                  value={fontValue}
                  onChange={
                    (e) => {
                      setFontValue(e.target.value)
                      selectedItem.fontSize = e.target.value + 'px'
                      selectedItem.width = getNewTextSize(selectedItem)
                      selectedItem.height = Number(selectedItem.fontSize.slice(0, -2))
                      dispatch(updateObject(selectedItem))
                    }
                  }
                />
              </label>
            </div>
          } />
        : ''}
    </div>
  )
}

export default ChangeTextSettings