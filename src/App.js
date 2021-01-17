import React from "react"
import todoData from "./todoData"
import TodoList from "./todoList"

class App extends React.Component{
  constructor()
  {
    super()
    this.state={
      todos: todoData
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(id){
    this.setState(prevState => {
      // console.log(id)
      const updatedtodo=prevState.todos.map(item => {
        // console.log(id)
        if(id===item.id)
        {
          return{
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
      console.log(updatedtodo)
      return {todos: updatedtodo}
    })
  }
  render(){
    //console.log(todoData)
    const todo=this.state.todos.map(item => <TodoList key={item.id} data={item} 
      handleClick={this.handleClick}/>)
    //console.log(todo)
    return(
      <div>{todo}</div>
    )
  }
}
export default App;
