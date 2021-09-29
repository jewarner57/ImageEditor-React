import './style.scss'

function EditorButton(props) {
  const { clickAction, icon, tooltip, addonClass } = props

  return (
    <div
      className={`editorButton ${addonClass}`} onClick={(e) => clickAction(e)}
      title={tooltip}>
      {icon}
    </div>
  )
}

export default EditorButton