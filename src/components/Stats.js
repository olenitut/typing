import { useSelector } from "react-redux";
import classes from "./stats.module.css";

const Stats = ({ onAddText }) => {
  const accuracyArr = useSelector((store) => store.stat.accuracyStats);
  const accuracy = accuracyArr.length
    ? `${Math.round(
        accuracyArr.reduce((acc, curr) => acc + curr) / accuracyArr.length
      )}%`
    : "N/a";

  return (
    <ul className={classes.stats}>
      <li>Average accuracy: {accuracy}</li>
      <li>
        <button onClick={onAddText} className={classes.button}>
          Add your text
        </button>
      </li>
    </ul>
  );
};

export default Stats;
