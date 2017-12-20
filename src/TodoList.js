import React,{Component} from "react";
import TodoItem from './TodoItem' ;

class TodoList extends Component{
    render() {
        let {items} = this.props //อันนี้ดึงจาก props เพราะ data เข้ามาจาก property
       return(
           <div>
              <ul>
                  {items.map((todo,i) => 
                  <li key={i}>
                  <TodoItem  text={todo}/></li>)}  
                  {//ใส่ปีกกาเพื่อทำloop บอกข้างในว่า เป็น java scrip code
                   //items เป็น array เรียกฟังชั่น mnap การเปลี่ยนอย่างหนึ่งไปเป็นอีกอย่างนึง map  รับฟังชั่นเป็น paramiter แล้วreturn เป็นก้อน jsf
                  }
              </ul>    
            </div>
        )
    }

}
export default TodoList