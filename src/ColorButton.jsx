const ColorButton = ({ colorName, setSelectedColor }) => {
  return <button onClick={() => setSelectedColor(colorName)}>{ colorName }</button>;
}

const PickedColor = (selectedColor) => {
  return selectedColor;
}

export default ColorButton
export { PickedColor }