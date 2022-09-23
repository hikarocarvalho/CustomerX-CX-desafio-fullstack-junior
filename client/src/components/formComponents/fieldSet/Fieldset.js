import "./Fieldset.css";

export default function Fieldset(props) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset_title">{props.fieldsetTitle}</legend>
      {props.children}
    </fieldset>
  );
}
