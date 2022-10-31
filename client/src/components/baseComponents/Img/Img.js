import './Img.css';

export default function Img(props){
    return (
        <figure>
            <img className={props.className?"img" + props.className: "img"} src={props.url} alt={props.alt} />
            <figcaption>{props.description}</figcaption>
        </figure>
    );
}