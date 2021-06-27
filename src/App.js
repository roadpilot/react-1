import React from 'react';
import logo from './logo.svg';
import './App.css';

const Hi = ({ name }) => (
  <div>Hello {name}!</div>
)

const MediaCard = ({title,body,imageUrl}) => (
  <div>
  <h2>{title}</h2>
  <p>{body}</p>
  <img style={{height:'30px'}} src={imageUrl} alt={logo}/>
  </div>
)

function Room() {
  const [isLit, setLit] = React.useState(true);
  return (
    <div className="room">
      this room is {isLit ? 'lit' : 'dark'}
      <br />
      <button onClick={() => setLit(!isLit)}>
        flip
      </button>
    </div>
  );
}

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code>!
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
    <MediaCard title="foo" body="foo2" imageUrl={logo}/>
    <Hi />
    <Room />
    </div>
  );
}

export default App;
