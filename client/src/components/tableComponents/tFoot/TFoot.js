import './TFoot.css';

export default function TFoot(props){
    return (
        <tfoot>
            <tr>
              <td colSpan={props.topics.length-1}>numero de registros:</td>
              <td>{props.quantity}</td>
            </tr>
        </tfoot>
    );
}