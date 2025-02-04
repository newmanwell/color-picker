// button component
const ColorButton = ({ colorName, setSelectedColor }) => {
  // create buttons
  return <button onClick={() => setSelectedColor(colorName)}>{ colorName }</button>;
}

// display color component
const PickedColor = (selectedColor) => {
  return selectedColor;
}

// export components
export default ColorButton
export { PickedColor }