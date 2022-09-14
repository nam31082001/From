const TodoList=(props)=>{
    const todos = props.todos;

    return (
        <>
            <ol>
            {
                todos.map((item, index) => {
                    return (
                        <li key={item.id}>
                            {item.text}
                        </li>
                    )
                })
            }
            </ol>
        </>
    )
}
export default TodoList