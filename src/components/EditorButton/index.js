import './style.css'

function ImageUpload(props) {
  const { clickAction, icon, tooltip } = props

  return (
    <div
      className="editorButton" onClick={(e) => clickAction(e)}
      title={tooltip}>
      {icon}
    </div>
  )
}

export default ImageUpload