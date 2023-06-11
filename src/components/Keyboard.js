import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const KeyboardComponent = () => {
  const onKeyPress = (button) => {
    console.log("Button pressed", button);
  };

  const keyboardOptions = {
    physicalKeyboardHighlight: true,
    physicalKeyboardHighlightPress: true,
    onKeyPress,
  };

  return (
    <div>
      <Keyboard {...keyboardOptions} />
    </div>
  );
};

export default KeyboardComponent;
