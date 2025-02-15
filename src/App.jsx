// import components
import { useState } from 'react';
import ColorButton from './ColorButton.jsx';
import { PickedColor } from './ColorButton.jsx';

// app component
const  App = (colorName) => {
  
  const [selectedColor, setSelectedColor] = useState("");
  // return html to page 
  return (
    <>
      <section id={selectedColor}>
        <h1>Color Picker</h1>
        <h2>You selected: { PickedColor(selectedColor) }</h2>
        <ColorButton colorName="yellow" setSelectedColor={setSelectedColor} />
        <ColorButton colorName="green" setSelectedColor={setSelectedColor} />
        <ColorButton colorName="black" setSelectedColor={setSelectedColor} />
        <ColorButton colorName="red" setSelectedColor={setSelectedColor} />
        <ColorButton colorName="cornflower-blue" setSelectedColor={setSelectedColor} />

      </section>
    </>
  )
}

export default App
