import React,{Component} from "react";

class TodoItem extends Component{
    render() {
        let{text} =this.props
       return(
           <div>
            <input type="checkbox" />
             {text}
            </div>
        )
    }

}
export default TodoItem