import React, {Component} from "react" ;



class Header extends Component{

    render (){
        let {currentUser, islogIn} = this.props ;
        currentUser = "welcome " + currentUser;
        return (
        <div> Header {islogIn &&  currentUser}</div>   
        );
    }

}

export default Header