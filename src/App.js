import React from 'react';
  

//class react.component dont have return. they have render method. because they are not function.

//function component: return, show it on screen.
//class component: extends from react.Component, automatically execute render method, show it on screen.

//we use class component because to use state! to change ***data!***

//but state is just an object, what can i do with this? To change data!
//But we cant change state, have to use setState. setState->refresh state, and call render function.

//using state in setState is not a good idea.
//we can use *** this.setState(current => ({x: current.count}));*** instead.

// 여기까지 3-1

//mounting,  updating, unmounting
//mounting  constructor() javascript 생성시 생기는거

class App extends React.Component{
  state={
    count:0
  };

  add = () => {
    this.setState(current => ({count: current.count +1}))
  };
  minus = () => {
    this.setState(current=>({count:this.state.count-1}))
  };

  render(){
    return (
    <div>
      <h2>I am a class Num: {this.state.count} </h2>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>
    );
  }

}

export default App;
