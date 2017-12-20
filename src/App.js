import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer'

class App extends Component {

  constructor(props) {

    super(props)
    this.state = { currentTime: 0 }
    this.handleFooterClicked = this.handleFooterClicked.bind(this)
  }

handleFooterClicked(time){
  this.setState({currentTime:time })
}

render(){

  let { currentTime } = this.setState
  return (

    <div>
      <Header currentUser="Fluke" islogin />
      <div>currentTime = {currentTime}</div>
      <Footer onTimeClick={this.handleFooterClicked} />
    </div>
    )
  }
}

export default App;