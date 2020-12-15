import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import chuck from'./chuck.png';
import './App.css';

const API_URL = 'https://api.chucknorris.io/jokes/random?category='

function App() {
  const [joke, setJoke] = useState('');


  const generateJoke = () => {
    fetch(API_URL + 'animal')
    .then(res => res.json())
    .then(data => setJoke(data.value));
  }
  useEffect(() => {
    generateJoke();
  }, [])


  const generateJokeCareer = () => {
    fetch(API_URL + 'career')
    .then(res => res.json())
    .then(data => setJoke(data.value));
  }
  useEffect(() => {
    generateJokeCareer();
  }, [])

  const generateJokeCelebrity = () => {
    fetch(API_URL + 'celebrity')
    .then(res => res.json())
    .then(data => setJoke(data.value));
  }
  useEffect(() => {
    generateJokeCelebrity();
  }, [])

  const generateJokeDev = () => {
    fetch(API_URL + 'dev')
    .then(res => res.json())
    .then(data => setJoke(data.value));
  }
  useEffect(() => {
    generateJokeDev();
  }, [])

  return (
    <div class="box">
    <img src = {chuck}/>
    <h2>Chuck Norris Jokes</h2>
    <h5>Click on any category to generate a joke of its category</h5>
    <p>{joke}</p>

    <button onClick={generateJoke}>Animal</button>
    <button onClick={generateJokeCareer}>Career</button>
    <button onClick={generateJokeCelebrity}>Celebrity</button>
    <button onClick={generateJokeDev}>Dev</button>


    </div>
  );
}

export default App;

// <button onClick={generateJokeExplicit}>Explicit</button>
// <button onClick={generateJokefashion}>Fashion</button>
// <button onClick={generateJokeFood}>Food</button>
// <button onClick={generateJokeHistory}>History</button>
// <button onClick={generateJokeMoney}>Money</button>
// <button onClick={generateJokeMovie}>Movie</button>
// <button onClick={generateJokeMusic}>Music</button>
// <button onClick={generateJokePolitical}>Political</button>
// <button onClick={generateJokeReligion}>Religion</button>
// <button onClick={generateJokeScience}>Science</button>
// <button onClick={generateJokeSports}>Sports</button>
// <button onClick={generateJokeTravel}>Travel</button>
