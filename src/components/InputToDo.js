export const InputToDo = (props) => {
   return (
    <>
        <div className="add-task">
            <input value={props.toDo} 
                onChange={(e) => props.setToDo(e.target.value)}/>
            <button onClick={() => props.addTask()}>Добавить задачу</button>
        </div>
    </>
   ) 
}