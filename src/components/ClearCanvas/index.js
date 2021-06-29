import EditorButton from '../EditorButton'
import SettingsModal from '../SettingsModal';
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { clearCanvas } from '../../actions';

import './style.css'

function ClearCanvas(props) {
  const dispatch = useDispatch()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="ClearCanvas">
      <EditorButton
        clickAction={() => setModalOpen(!modalOpen)}
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>}
        tooltip="Clear Canvas"
      />
      {modalOpen ?
        <SettingsModal header="Delete All" exitAction={setModalOpen}
          contents={
            <div className="clearCanvasModal">
              <div>Are you sure you want to clear the canvas?</div>
              <div className="modalButtonWrapper">
                <div className="cancelButton modalButton" onClick={() => setModalOpen(false)}>Cancel</div>
                <div className="clearButton modalButton" onClick={() => dispatch(clearCanvas())}>Clear</div>
              </div>
            </div>
          }
        />
        : ""}
    </div>
  )
}

export default ClearCanvas