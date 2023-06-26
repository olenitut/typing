import classes from "./text.module.css";
import { generateRandom } from "../data/generateText";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setStat } from "../store/slices/statSlice";

const Text = ({ customText }) => {
  const [practiceText, setPracticeText] = useState(generateRandom(30));
  const [position, setPosition] = useState(0);
  const [actions, setActions] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyPress = (event) => {
      let { key } = event;

      // If the key pressed is correct
      if (key === practiceText[position]) {
        // If the letter at the current position has already been wrong, we do not overwrite it
        if (!actions[position]) {
          setActions((prevState) => [...prevState, "right"]);
        }
        setPosition((prevState) => prevState + 1);
        //if the whole text has been practiced
        if (position === practiceText.length - 1) {
          const stat =
            (actions.filter((action) => action === "right").length /
              practiceText.length) *
            100;
          dispatch(setStat(stat));
          setPracticeText(generateRandom(30));
          setPosition(0);
          setActions([]);
        }
      } else {
        // If the letter is not correct
        if (!actions[position]) {
          setActions((prevState) => [...prevState, "wrong"]);
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [practiceText, position, actions, dispatch]);

  useEffect(() => {
    if (customText) {
      setPracticeText(customText.trim().toLowerCase());
      setPosition(0);
      setActions([]);
    }
  }, [customText]);

  return (
    <section className={classes["text-container"]}>
      <p className={classes.text}>
        {practiceText.split("").map((letter, i) => {
          let calculatedClassName = "";
          //if the current letter has been typed already and we have moved to the next letter :we add correct classes
          if (actions[i] && position > i) {
            calculatedClassName =
              actions[i] === "right" ? classes.right : classes.wrong;
          }
          //_\u200B is for breaking the word here as _ does not break by default
          return (
            <span key={i} className={calculatedClassName}>
              {letter === " " ? "_\u200B" : letter}
            </span>
          );
        })}
      </p>
    </section>
  );
};

export default Text;
