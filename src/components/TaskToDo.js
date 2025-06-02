export const TaskToDo = (props) => {
    return(
        <div key={props.id} className="tasks">
            <input type={"checkbox"} onClick={() => props.toggleTask(props.id)} defaultChecked = {props.status}></input>
            <p style={props.status ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{props.value}</p>
            <button onClick={() => props.deleteTask(props.id)}>Удалить задачу</button>
        </div>
    )
}