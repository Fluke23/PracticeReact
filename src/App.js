import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList'
import Header from './Header';
import Footer from './Footer'

class App extends Component {

  constructor(props) {

    super(props)
    this.state = {
      todoItems: []
    }

    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(newTodo) {
    this.setState({
      todoItems: this.state.todoItems.concat([newTodo])  //เปลี่ยนจากpushเป็น concat concatจะรับค่า array
    })
  }
  

    render(){
      let { todoItems } = this.state
      let { currentTime } = this.state
      return (

        <div>
          <TodoInput onAddTodo={this.addTodo} />
          <TodoList items={todoItems} /> 
          <Header currentUser="Fluke" islogIn={true} />
          <div>currentTime = {currentTime}</div>
          <Footer onTimeClick={this.handleFooterClicked} />
        </div>
      
         
        
      )
    }
  
}

export default App;