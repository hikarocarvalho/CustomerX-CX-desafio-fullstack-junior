import "./Fieldset.css";

export default function Fieldset(props) {
  return (
    <fieldset className={props.className?props.className:"fieldset"} name={props.name?props.name:undefined}>
      <legend className="fieldset_title">{props.fieldsetTitle}</legend>
      {props.children}
    </fieldset>
  );
}
