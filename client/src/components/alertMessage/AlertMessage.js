import Button from "../button/Button";
import "./AlertMessage.css";

export default function AlertMessage(props) {
  const accept = (event) => {
    event.preventDefault();
    props.execute();
    props.close(event);
  };

  return (
    <section className="modal_component">
      <article className="modal">
        <h1>Advice Message</h1>
        <p>Do you really want to do this?</p>
        <Button onClick={accept} value={"Yes"} />
        <Button onClick={props.close} value={"No"} />
      </article>
    </section>
  );
}
