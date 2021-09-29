import EditorButton from '../EditorButton'
import SettingsModal from '../SettingsModal'
import SettingInput from '../SettingInput'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedObject, updateObject } from '../../actions';
import './style.scss'

function ChangeImageSettings(props) {
  const selectedItem = useSelector(state => state.selectedObject)
  const [modalOpen, setModalOpen] = useState(false)
  const [scaleProportionally, setScaleProporionally] = useState(true)
  const dispatch = useDispatch()

  return (
    <div className="ChangeTextSettings">
      <EditorButton
        clickAction={() => {
          setModalOpen(!modalOpen)
        }}
        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="30" height="30" viewBox="0 0 24 24"><path d="M15.562 20.22l-3.562.718.719-3.562 2.843 2.844zm-2.136-3.552l2.844 2.845 7.73-7.73-2.845-2.845-7.729 7.73zm-2.91.332l4.51-4.76-2.026-3.24-2.52 4-2.48-1.96-4 5.96h6.516zm-3.516-8.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5c0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5zm3.352 10.5h-8.352v-14h18v2.312h2v-4.312h-22v18h9.969l.383-2z" /></svg>}
        tooltip="Image Settings"
      />

      {modalOpen ?
        <SettingsModal
          exitAction={setModalOpen}
          header="Edit Image"
          contents={
            <div className="modalContents">
              <SettingInput
                label="Width"
                initialVal={selectedItem.width}
                changeAction={
                  (e) => {
                    selectedItem.width = Number(e.target.value)
                    dispatch(updateObject(selectedItem))

                    if (scaleProportionally) {
                      selectedItem.height = Math.round(Number(e.target.value * selectedItem.sizeProportion))
                      console.log(selectedItem.height)
                    }
                  }
                }
              />

              {
                scaleProportionally ? '' :
                  <SettingInput
                    label="Height"
                    initialVal={selectedItem.height}
                    changeAction={
                      (e) => {
                        selectedItem.height = Math.round(Number(e.target.value))

                        dispatch(updateObject(selectedItem))
                      }
                    }
                  />
              }

              {/* Keep image dimensions checkbox */}
              {/* Add check box */}
              <label>
                <div>Scale Proportionally</div>
                <input
                  checked={scaleProportionally}
                  onChange={() => setScaleProporionally(!scaleProportionally)}
                  type="checkbox"
                />
              </label>
              {/* Display bottom if not check */}
              {/* If not checked then width slider should also update height based in the image ratio */}

            </div>
          } />
        : ''}
    </div>
  )
}

export default ChangeImageSettings