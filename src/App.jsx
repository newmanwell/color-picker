import ColorButton from './ColorButton.jsx';

const  App = (colorName) => {

  return (
    <>
     <h1>Color Picker</h1>
     <ColorButton colorName="yellow" />
     <ColorButton colorName="green" />
     <ColorButton colorName="black" />
    </>
  )
}

export default App
