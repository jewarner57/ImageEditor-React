import ImageUpload from '../ImageUpload'
import AddText from '../AddText'
import Canvas from '../Canvas'
import VerticalToolbar from '../VerticalToolbar'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../../reducers'

import './style.css'

const store = createStore(rootReducer)

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <div className="editorContainer">
          <VerticalToolbar
            contents={[<AddText />, <ImageUpload />]}
          />
          <Canvas></Canvas>
          <VerticalToolbar
            contents={[<ImageUpload />]}
          />
        </div>
      </Provider>
    </div>
  );
}

export default App

