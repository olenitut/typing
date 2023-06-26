import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

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
