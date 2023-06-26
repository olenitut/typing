import { useSelector } from "react-redux";
import StatsItem from "./StatsItem";
import classes from "./stats.module.css";

const Stats = () => {
  const accuracyArr = useSelector((store) => store.stat.accuracyStats);
  const accuracy = accuracyArr.length
    ? `${Math.round(
        accuracyArr.reduce((acc, curr) => acc + curr) / accuracyArr.length
      )}%`
    : "N/a";

  return (
    <ul className={classes.stats}>
      <StatsItem accuracy={accuracy} />
    </ul>
  );
};

export default Stats;
