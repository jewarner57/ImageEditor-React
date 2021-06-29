import './style.css'
import EditorButton from '../EditorButton'
import SettingsModal from '../SettingsModal'
import SettingInput from '../SettingInput'
import { useState } from 'react'

function DownloadAsImage(props) {
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
  // To the changeAction prop we send it which
  // Cant be set directly to state
  const setDownloadValue = (e) => {
    setDownload(e.target.value)
  }

  return (
    <div className="DownloadAsImage">
      <EditorButton
        clickAction={() => setShowModal(!showModal)}
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z" /></svg>}
        tooltip="Download Canvas"
      />
      <a href="/" download={download} ref={a => setLinkRef(a)} className="hiddenDownloadLink">Download Canvas</a>
      {showModal ?
        <SettingsModal exitAction={setShowModal} header="Download As Image" contents={
          <div className="downloadModal">
            <SettingInput label="Filename" initialVal={download} changeAction={setDownloadValue} />
            <div className="submitButton" onClick={() => downloadCanvas()}>Download</div>
          </div>
        } />
        : ""}
    </div >
  )
}

export default DownloadAsImage