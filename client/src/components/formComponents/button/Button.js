import "./Button.css";

export default function Button(props) {
  return (
    <button
      className={props.className?props.className + " button": "button"}
      onClick={props.onClick ? props.onClick : undefined}
    >
      {props.value}
    </button>
  );
}
