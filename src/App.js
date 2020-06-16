/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React from "react";
//import Hello from "./Components/Hello";
import "./App.css";
import randomizer from "randomizer-js";
var faker = require('faker');



function App(){ 
  let rand = randomizer();

  rand.randomSentence();
  let firstName = faker.name.findName();
  let firstPic = faker.image.avatar();
  let firstJob = faker.name.jobTitle();
  let firstFriend = faker.random.number();
  let secondName = faker.name.findName();
  let secondPic = faker.image.avatar();
  let secondJob = faker.name.jobTitle();
  let secondFriend = faker.random.number();
  let thirdName = faker.name.findName();
  let thirdPic = faker.image.avatar();
  let thirdJob = faker.name.jobTitle();
  let thirdFriend = faker.random.number();
  return (
  //<div>
    
  //  <Hello first={rand.randomSentence()}/>
  //  <Hello second="Hello"/>
  //  <Hello third="I like the avengers"/>
  //</div>
  
  <div class="ui link cards">
  <div class="card">
    <div class="image">
      <img src={secondPic}></img>
    </div>
    <div class="content">
      <div class="header">{firstName}</div>
      <div class="meta">
        <a>Friends</a>
      </div>
      <div class="description">
      {firstName} is a {firstJob} living in New York.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2013
      </span>
      <span>
        <i class="user icon"></i>
        {firstFriend} Friends
      </span>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src={firstPic}></img>
    </div>
    <div class="content">
      <div class="header">{secondName}</div>
      <div class="meta">
        <span class="date">Coworker</span>
      </div>
      <div class="description">
      {secondName} is a {secondJob} living in Paris.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2011
      </span>
      <span>
        <i class="user icon"></i>
        {secondFriend} Friends
      </span>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src={thirdPic}></img>
    </div>
    <div class="content">
      <div class="header">{thirdName}</div>
      <div class="meta">
        <a>Coworker</a>
      </div>
      <div class="description">
      {thirdName} is a {thirdJob} working in New York.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2014
      </span>
      <span>
        <i class="user icon"></i>
        {thirdFriend} Friends
      </span>
    </div>
  </div>
</div>
    
    
    
    
   

    );


}




export default App;