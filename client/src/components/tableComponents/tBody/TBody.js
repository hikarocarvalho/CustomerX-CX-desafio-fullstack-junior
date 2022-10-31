import "./TBody.css";
import setDateFormat from "../../../scripts/validations/setDateFormat";

export default function TBody(props) {
  return (
    <tbody className="tbody">
      {props.list.map((item, index) => (
        <tr key={index} id={item.id} onClick={props.event?props.event:undefined}>
          {props.dataNames.map((name, indexName) =>
            name === "created_at" ? (
              <td key={indexName}>{setDateFormat(item[name])}</td>
            ) : (
              <td key={indexName}>
                {item[name]}
              </td>
            )
          )}
          <td>
            <i className="bi bi-pencil-square" onClick={props.editEvent}></i>|
            <i className="bi bi-trash-fill" onClick={props.deleteEvent}></i>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
