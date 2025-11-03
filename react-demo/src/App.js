import logo from './logo.svg';
import './App.css';

function MyButton(props) {
  return <button className="button" onClick= {handler}>{props.text}</button>;
}

function handler() {
  alert('You clicked me!');
}

function Pokemon(props) {
  return (
    <div className="Pokemon-card">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <MyButton text={"Catch " + props.name} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pokemon name="Pikachu" image="Pikachu.png" />
        <Pokemon name="Charmeleon" image="Charmeleon.png"/>
        <Pokemon name="Charizard" image="Charizard.png"/>

      </header>
    </div>
  );
}

export default App;
