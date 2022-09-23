import "./Input.css";

export default function Input(props) {
  return (
    <>
      <label htmlFor={props.id} className="input_title">
        {props.description}
      </label>
      <input
        id={props.id}
        name={props.id}
        className="input"
        onChange={props.onChange ? props.onChange : null}
        defaultValue={props.value ? props.value : undefined}
      />
    </>
  );
}
