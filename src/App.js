import { useEffect } from "react";
import { setStat } from "./store/slices/statSlice";
import Keyboard from "./components/Keyboard";
import Text from "./components/Text";
import Stats from "./components/Stats";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

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
  useEffect(() => {
    const storedStats = localStorage.getItem("accuracyStats");
    if (storedStats) {
      dispatch(setStat(JSON.parse(storedStats).slice(0, 50)));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Stats />
      <Text />
      <Keyboard />
    </div>
  );
}

export default App;
