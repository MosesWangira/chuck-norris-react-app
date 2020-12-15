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

  const generateJokeScience = () => {
    fetch(API_URL + 'science')
    .then(res => res.json())
    .then(data => setJoke(data.value));
  }
  useEffect(() => {
    generateJokeScience();
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
    <button onClick={generateJokeScience}>Science</button>


    </div>
  );
}

export default App;
