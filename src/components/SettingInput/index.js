import { useState } from 'react'
import './style.scss'

function SettingInput(props) {
  const { label, changeAction, initialVal } = props
  const [inputVal, setInputVal] = useState(initialVal)

  return (
    <div>
      <label>
        <div>{label}:</div>
        <input
          value={inputVal}
          onChange={
            (e) => {
              setInputVal(e.target.value)
              changeAction(e)
            }
          }
        />
      </label>
    </div>
  )
}

export default SettingInput