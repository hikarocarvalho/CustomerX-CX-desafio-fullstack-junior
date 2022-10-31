import "./Form.css";

export default function Form(props) {
  return (
    <form className={props.className?"form "+props.className:"form"} onSubmit={props.onSubmit ? props.onSubmit : null}>
      <fieldset className="fieldset_form">
        <legend className="form_title">{props.formTitle}</legend>
        {props.children}
      </fieldset>
    </form>
  );
}
