import React, { useEffect, useState } from 'react';
import { Text, View, LogBox } from 'react-native';
import Board from './Board';
import { mainApp } from '../styles/styles';
const URL = 'http://www.whatyouwant.somee.com/api/Games';

LogBox.ignoreAllLogs();

export default function Game({ navigation }) {
  const [gameResult, setGameResult] = useState({
    p1: '',
    p2: '',
  });
  const [modal, toggleModal] = useState(false);

  //Player, game, and modal states
  const [playerTurn, changeTurn] = useState(true);
  const [end, endGame] = useState(false);

  //Result message for winner and tie games
  const [result, setResult] = useState('');

  //Turns dictionary to store turns taken
  const [turns, setTurn] = useState({});

  //Hook toggles for components to render and switch players
  const togglePlayer = () => changeTurn(!playerTurn);
  const toggleGame = () => endGame(!end);
  const triggerModal = () => toggleModal(!modal);

  function checkWinner() {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (
        turns[a] === turns[b] &&
        turns[b] === turns[c] &&
        a in turns &&
        b in turns &&
        c in turns
      ) {
        //postGameResult();
        //Winner is determined
        setResult(
          playerTurn ? 'Congratulations Player 1!' : 'Nice going Player 2!'
        );
        finishGame();
      }
    }

    //when the board is full with no winner, it results in a tie
    if (Object.keys(turns).length === 9) {
      setResult('Tie Game!');
      finishGame();
    }
  }
  const postGameResult = async () => {
    setGameResult;
    fetch(URL + '/SetGameResults', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        player1: gameResult.p1,
        player2: gameResult.p2,
      }),
    });
  };

  function checkTurn(value) {
    const tempTurns = turns;
    tempTurns[value] = playerTurn ? 'X' : 'O';

    //Sets the turn state with the new value added
    setTurn({ ...tempTurns });

    //Here we call a function to check if the game is won abd change players
    checkWinner();
    togglePlayer();
  }

  //Hook to end the game and render components needed
  const finishGame = () => {
    console.log('finishGame');
    toggleGame();
    triggerModal();
  };

  //Hook to set a new game
  const newGame = () => {
    console.log('newGame activated');
    setTurn({});
    endGame(false);
    toggleModal(false);
    changeTurn(true);
  };

  return (
    <View style={mainApp.container}>
      <Text style={mainApp.paragraph}>Let's play Tic-Tac-Toe</Text>
      <Board turns={turns} checkTurn={checkTurn} />
      {modal &&
        navigation.navigate('Result Modal', {
          result: result,
          newGame: newGame,
        })}
      <View style={mainApp.legend}>
        <Text style={mainApp.subheader}>X - Player 1</Text>
        <Text style={mainApp.subheader}>O - Player 2</Text>
      </View>
    </View>
  );
}
