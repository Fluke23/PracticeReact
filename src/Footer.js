import React, {Component} from "react";


class Footer extends Component{

    constructor (props){
        super(props);
        this.state = {
            time : 0 
        }
    }
    render (){
        let{time} = this.state;
        return (
            <div>Footer online time {time}</div> 
        );
    }

}

export default Footer ;