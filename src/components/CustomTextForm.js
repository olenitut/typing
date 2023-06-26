import { useState } from "react";
import classes from "./customTextForm.module.css";

const CustomTextForm = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  };
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <h2 className={classes.title}>Input the text you want to practice</h2>
      <textarea
        maxLength="300"
        minLength="50"
        required
        rows="7"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={classes.textarea}
      ></textarea>
      <button className={classes.button}>Use this text</button>
    </form>
  );
};

export default CustomTextForm;
