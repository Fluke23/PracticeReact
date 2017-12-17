import React, {Component} from "react" ;



class Header extends Component{

    constructor(props){
        super(props)
        this.handleHeaderClicked = this.handleHeaderClicked.bind(this);
    }
    handleHeaderClicked(){
        alert (this.props.currentUser + "อย่ากด");
    }

    render (){
        let {currentUser, islogIn} = this.props ;
        currentUser = "welcome " + currentUser;


        return (
        <div onClick={this.handleHeaderClicked}> Header {islogIn &&  currentUser}</div>   
        );
    }

}

export default Header