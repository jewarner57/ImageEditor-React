import './style.css'

function VerticalToolbar(props) {

  return (
    <div
      className="VerticalToolbar"
    >
      {props.contents.map((element, index) => {
        return (
          <div key={index}>{element}</div>
        )
      })}
    </div>
  )
}

export default VerticalToolbar