import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

//the keyboard is only used for visual representation
const KeyboardComponent = () => {
  const keyboardOptions = {
    physicalKeyboardHighlight: true,
    physicalKeyboardHighlightPress: true,
  };

  return (
    <section>
      <Keyboard {...keyboardOptions} />
    </section>
  );
};

export default KeyboardComponent;
