import ImageUpload from '../ImageUpload'
import AddText from '../AddText'
import ClearCanvas from '../ClearCanvas'
import SelectedObjectToolbar from '../SelectedObjectToolbar'
import Canvas from '../Canvas'
import VerticalToolbar from '../VerticalToolbar'
import DownloadAsImage from '../DownloadAsImage'
import CanvasDetails from '../CanvasDetails'

import { useState } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../../reducers'

import './style.scss'

const store = createStore(rootReducer)

function App() {
  const [canvas, setCanvas] = useState('')

  const [canvasWidth, setCanvasWidth] = useState(800)
  const [canvasHeight, setCanvasHeight] = useState(600)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  return (
    <div className="App">
      <Provider store={store}>
        <div className="editorContainer">
          <VerticalToolbar
            contents={[<AddText />, <ImageUpload />, <DownloadAsImage canvas={canvas} />, <ClearCanvas />]}
          />
          <div className="CanvasContainer">
            <div className="canvasWrapper">
              <Canvas
                setCanvas={setCanvas}
                canvasWidth={canvasWidth}
                canvasHeight={canvasHeight}
                setCanvasWidth={setCanvasWidth}
                setCanvasHeight={setCanvasHeight}
                mouseX={mouseX}
                mouseY={mouseY}
                setMouseX={setMouseX}
                setMouseY={setMouseY}
              >
              </Canvas>
            </div>

            <CanvasDetails
              width={canvasWidth}
              height={canvasHeight}
              setWidth={setCanvasWidth}
              setHeight={setCanvasHeight}
              mouseX={mouseX}
              mouseY={mouseY}
            />
          </div>

          <SelectedObjectToolbar />
        </div>
      </Provider>
    </div>
  );
}

export default App

