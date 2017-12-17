import React, {Component} from "react" ;



class Header extends Component{

    handleHeaderClicked(){
        alert ("Header Cliked");
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