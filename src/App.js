import { node } from 'prop-types';
import React, {setState, useState} from 'react';
import {cTurn} from  './CPlayer'


import './App.css';


function initBoard (totalScore = 25 ){

  const matchesArray = Array(totalScore).fill("Match");
  
  return matchesArray;
}



const isWinner = score =>  !(score % 2) ;

function BoardField () {

  const matchesArray = initBoard();

  return (
    <div className="Board">
      {matchesArray.map((item,i) => <div className={item} key={i} onClick={handleMatchClick}></div>)}
    </div>
  );
}


function PlayerScore (props) {
  return   <div className="ScoreBox">Score: {props.name}</div>
}

function TotalScore (props) {
  return   <h1>Matches: {props.name}</h1>
}

var count = 0;
var totalScore = 25;
var playerScoreV = 0;


function handleMatchClick (e) {
  let target = e.target || e.srcElement;
  
  if (count < 3 && target.style.backgroundColor != 'green') {
      target.style.backgroundColor = 'green';   
      count++;
 
 } else if (target.style.backgroundColor == 'green'){
    target.style.backgroundColor = '#e4ab42';
    count--;

  } 
}

function chooseMatches () {
  alert("Choose matches!");
}

function endTurn () {

  if (count == 0)
    chooseMatches();
  else {

  playerScoreV += count;
  count = 0;

  let matches = document.getElementsByClassName("Match");
  
  for (var i = matches.length - 1; i >= 0; --i) {
    if (matches[i].style.backgroundColor == 'green')
    matches[i].remove();
  }

  totalScore = matches.length;

 totalScore = game (totalScore);
 if (totalScore == 0) 
  {
    if (isWinner == true)
    console.log("You won")
    else 
    console.log("You lost")
  }
}
}



function game (total) {

  
      let turn = cTurn(total);
      total -= turn;
      
      let matches = document.getElementsByClassName("Match");

      for (var i = matches.length - 1; i > total - turn; i--) {
        matches[i].remove();
        console.log("Something went wrong");
      }
      console.log("total " + total);
      console.log("Comp took " + turn);
    return total;
 

}



function App() {

  const [totalScoreValue, setTotal] = useState(25);

  initBoard(totalScore);
  count = 0;
  playerScoreV = 0;

  return (  
    <div className="App">
    
    <TotalScore name={totalScore}/>
    <BoardField/>
    <div className="PlayerInfo">
       <PlayerScore name={playerScoreV}/>
       <button className="TurnBtn" onClick={endTurn}>Turn</button>
    </div>
    </div> 
  );
}

export default App;
