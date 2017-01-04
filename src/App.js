import React, { Component } from 'react';
import logo from './cookie.png';
import './App.css';

class App extends Component {

constructor(){
  super();
  this.state = {
    counter: 0,
    stack: ['hey','ho','hi','ah'],
  }
}


click(){
this.setState({
  counter : this.state.counter +1,
});

 console.log('Sucess')
 this.random();

  }
random(){

let randomize = Math.floor((Math.random()* 5));

if (this.counter % 20 === 0){
      
      let nbalea = this.random();
      let randomMes = this.stack[nbalea];
      alert(randomMes);

    }


} 

render() {
  return (
    <div className="App">
    <div className="App-header">
    <img onClick={this.click.bind(this)} id="logoclick" src={logo} className="App-logo" alt="logo" />
    <h2 className="titleh2" id="titleh">{this.state.counter}</h2>
    </div>
    <div className="timerSpan">

    </div>
    </div>
    );
}
}


export default App;
