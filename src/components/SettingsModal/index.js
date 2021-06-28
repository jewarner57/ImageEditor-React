import './style.css'

function SettingsModal(props) {
  const { contents, exitAction, header } = props

  return (
    <div className="SettingsModal">
      <div className='header'>
        <div className="headerTitle">{header}</div>
        <div className='closeModal' onClick={() => { exitAction(false) }}>X</div>
      </div>
      {contents}
    </div >
  )
}

export default SettingsModal