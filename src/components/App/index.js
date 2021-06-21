import React, { useState } from 'react'
import ImageUpload from '../ImageUpload'
import Canvas from '../Canvas'

function App() {
  const [image, setImage] = useState('')

  return (
    <div>
      <ImageUpload setImage={setImage}></ImageUpload>
      <Canvas uploadedImage={image}></Canvas>
    </div>
  );
}

export default App

