import { useState } from 'react';
import ColorButton from './ColorButton.jsx';
import { PickedColor } from './ColorButton.jsx';

const  App = (colorName) => {
  
  const [selectedColor, setSelectedColor] = useState(""); 
  return (
    <>
     <h1>Color Picker</h1>
     <h2>You selected: { PickedColor(selectedColor) }</h2>
     <ColorButton colorName="yellow" setSelectedColor={setSelectedColor} />
     <ColorButton colorName="green" setSelectedColor={setSelectedColor} />
     <ColorButton colorName="black" setSelectedColor={setSelectedColor} />
     <ColorButton colorName="red" setSelectedColor={setSelectedColor} />

    </>
  )
}

export default App
