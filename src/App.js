import { useEffect } from "react";
import KeyboardComponent from "./components/Keyboard";
import Text from "./components/Text";

function App() {
  const handleKeyDown = (e) => {
    if (e.keyCode === 32) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <Text />
      <KeyboardComponent />
    </div>
  );
}

export default App;
