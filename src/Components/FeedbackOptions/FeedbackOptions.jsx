import s from "./FeedbackOptions.module.css";
export default function FeedbackOptions({ options, onLeaveFeeeddback }) {
  return (
    <div>
      <ul className={s.list}>
        {Object.keys(options).map((key) => (
          <li key={key} className={s.item}>
            <button type="button" onClick={onLeaveFeeeddback} id={key}>
              {key}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
