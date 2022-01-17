const Todo = (props) => {
    const todoClasses = ["bold"];

    if (props.todo.complete) {
        todoClasses.push("line-through");
    }
    return (
    <div>
        <input onChange={(newEvent) => {
            props.handleCheckBoxOnOff(props.i);
        }} 
        checked={props.todo.complete} type="checkbox" />

        <span className={todoClasses.join(" ")}>{props.todo.text}</span>

        <button onClick={(newEvent) => {
            props.handleToDoDelete(props.i);
        }}
            style={{ marginLeft: " 10px " }}
        >
            Delete Event</button>
    </div>
    )
}

export default Todo;