import './style.scss'
import EditorButton from '../EditorButton'
import SettingsModal from '../SettingsModal'
import SettingInput from '../SettingInput'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedObject } from '../../actions';

function DownloadAsImage(props) {
  const dispatch = useDispatch()
  const [linkRef, setLinkRef] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [download, setDownload] = useState(`Image-${String(new Date().getTime()).slice(8)}`)

  const downloadCanvas = () => {
    const canvas = props.canvas
    const url = canvas.toDataURL("image/png");
    // I used a ref here because if you use state
    // Then it doesnt update before linkRef.click()
    // Is called which causes an empty download to trigger
    linkRef.href = url
    linkRef.click()
    setShowModal(false)
  }

  // This helper function is necessary because
  // The setting input sends back an event object
  // to the changeAction prop we send it which
  // Cannot be set directly to state
  const setDownloadValue = (e) => {
    setDownload(e.target.value)
  }

  return (
    <div className="DownloadAsImage">
      <EditorButton
        clickAction={() => setShowModal(!showModal)}
        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z" /></svg>}
        tooltip="Download Canvas"
      />
      <a href="/" download={download} ref={a => setLinkRef(a)} className="hiddenDownloadLink">Download Canvas</a>
      {showModal ?
        <SettingsModal exitAction={setShowModal} header="Download As Image" contents={
          <div className="downloadModal">
            <SettingInput label="Filename" initialVal={download} changeAction={setDownloadValue} />
            <div className="submitButton"
              onClick={() => {
                dispatch(setSelectedObject(false));

                // I use setimeout to give time for the setSelectedObject dispatch
                // To cause all items to be deselected and for those changes
                // To show on the canvas
                setTimeout(
                  function () {
                    downloadCanvas()
                  },
                  250
                );
              }}>Download</div>
          </div>
        } />
        : ""}
    </div >
  )
}

export default DownloadAsImage