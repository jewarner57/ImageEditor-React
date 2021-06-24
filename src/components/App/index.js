import ImageUpload from '../ImageUpload'
import Canvas from '../Canvas'

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
          <Canvas></Canvas>
          <ImageUpload></ImageUpload>
        </div>
      </Provider>
    </div>
  );
}

export default App

