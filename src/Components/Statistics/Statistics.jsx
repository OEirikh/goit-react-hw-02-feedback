// import s from "./Statistics.module.css";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <span>Good:{good}</span>
      <span>Neutral:{neutral}</span>
      <span>Bad:{bad}</span>
      <span>Total:{total}</span>
      <span>Positive Feedback:{positivePercentage(total)}%</span>
    </div>
  );
}
