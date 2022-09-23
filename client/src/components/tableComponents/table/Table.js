import "./Table.css";

export default function Table(props) {
  return (
    <article className="table_container">
      <table className="table">{props.children}</table>
    </article>
  );
}
