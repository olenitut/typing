import { useEffect } from "react";
import { setStat } from "./store/slices/statSlice";
import Keyboard from "./components/Keyboard";
import Text from "./components/Text";
import Stats from "./components/Stats";
import { useDispatch } from "react-redux";
import Modal from "./components/Modal";
import CustomTextForm from "./components/CustomTextForm";
import { useState } from "react";

function App() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [customText, setCustomText] = useState("");

  const dispatch = useDispatch();

  //gets the stats from local storage
  useEffect(() => {
    const storedStats = localStorage.getItem("accuracyStats");
    if (storedStats) {
      dispatch(setStat(JSON.parse(storedStats).slice(0, 50)));
    }
  }, [dispatch]);

  const handleSetCustomText = (text) => {
    if (text.trim().length) {
      setCustomText(text);
      setShowAddModal(false);
    }
  };

  return (
    <div className="App">
      <Stats onAddText={() => setShowAddModal(true)} />
      <Text customText={customText} />
      <Keyboard />
      {showAddModal && (
        <Modal onClose={() => setShowAddModal(false)}>
          <CustomTextForm onSubmit={handleSetCustomText} />
        </Modal>
      )}
    </div>
  );
}

export default App;
