import React from "react"

function TodoList(props){
    return(
    <div class="todo-div">
        <input
            type="checkbox" checked={props.data.completed}
            onChange={() => props.handleClick(props.data.id) }
        />
        {props.data.text}
    </div>)
}
export default TodoList