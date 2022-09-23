import './TableContainer.css';

export default function TableContainer(props){
    return (
        <article className="table-container">
            {props.children}
        </article>
    );
}