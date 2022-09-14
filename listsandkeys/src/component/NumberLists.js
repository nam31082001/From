
import ListItem from "./ListItem"
const NumberList = (props) => {
    const number = props.number
    const listItems = number.map((number) =>
       <ListItem  key={number.toString()} value={number}/>
    )
    return (
        <>
          <ul>{listItems}</ul>
        </>
    )
}
export default NumberList