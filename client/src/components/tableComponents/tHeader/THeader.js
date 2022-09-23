import "./THeader.css";

export default function THeader(props) {
  return (
    <thead className="thead">
      <tr>
        <th colSpan="5" className="table-title">
          {props.title}
        </th>
      </tr>
      <tr>
        {props.topics.map((item, index) => (
          <th key={index}>{item}</th>
        ))}
      </tr>
    </thead>
  );
}
