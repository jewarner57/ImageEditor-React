import ImageUpload from '../ImageUpload'
import Canvas from '../Canvas'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../../reducers'

const store = createStore(rootReducer)

function App() {

  return (
    <div>
      <Provider store={store}>
        <ImageUpload></ImageUpload>
        <Canvas></Canvas>
      </Provider>
    </div>
  );
}

export default App

