export default function Post(props) {

    return (
        <div >
            <h3>{props.id}-{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}