import React, { Component } from 'react';
import logo from './cookie.png';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      counter: 0,
      stack: ['Nasus','Darius','Poppy','Teemo','Rengar','Arrête de clicker','Ahri','Trundle','Kayle','Velkoz','Lucian','Ta pas mieux à faire ?','lux','Khazix','Ashe','Garen','pantheon','Rumble','Annie','Jhin','Syndra','Cassiopia','Reksai','Tryndamere','Jax','Olaf']
    }
  }


  click(){
    this.setState({
      counter : this.state.counter +1,
    });
    this.random();

    console.log('Sucess')

  }
  random(){

    if (this.state.counter % 10 === 0){
      let rand = this.state.stack;
      alert(rand[Math.floor(Math.random()* rand.length)]);
      

    };


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
