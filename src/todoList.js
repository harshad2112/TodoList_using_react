import React from "react"

function TodoList(props){
    return(
    <div className="todo-div">
        <input
            type="checkbox" checked={props.data.completed}
            onChange={() => props.handleClick(props.data.id) }
        />
        <div class="text">
        {props.data.text}

        </div>
    </div>)
}
export default TodoList