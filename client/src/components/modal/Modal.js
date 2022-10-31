import "./Modal.css";

export default function Modal(props) {

  return (
      <section className="modal_component">
        {props.children}
      </section>
  );


}
