import React,{Component} from "react";

class TodoInput extends Component{
   
   constructor(props){
       super(props)
       this.state ={
           newTodo : ""   //newTodo อันนี้จะเก็บต่า จากช่องที่ใส่ขอ้มูล
       }
       this.addClicked = this.addClicked.bind(this)
   }
   
   addClicked(){
        let {onAddTodo} =this.props
        onAddTodo(this.state.newTodo)
        this.setState({ newTodo:""   //setstate ทำมาเพื่อเคลียค่า
        })  
   }
   
    render() {
        let {newTodo} = this.state
       return(
           <div>
               ADD Todo 
        <input value={newTodo} onChange={(e) => this.setState({newTodo: e.target.value})}/>
        <button onClick={this.addClicked}> Add </button>
            </div>
        )
    }

}
export default TodoInput