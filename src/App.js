
import './App.css';
import { useState } from "react";
import Axios from "axios";

function App() {

  const [catFact, setCatFact] = useState('');

  const getCatFact = () => {
    Axios.get("https://meowfacts.herokuapp.com/").then((response) => {
      setCatFact(response.data.data[0]);
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="App">
      <div className='Intro'>
        <h1> Welcome to Cat Facts! </h1>
        <p>
          One can never know too much about cats... 
          which is why we've created this site for you!
        </p>
      </div>

      <div className='CatFact'>
        <div className='CatFactButton'>
          <button onClick={getCatFact}> Random Cat Fact </button>
        </div>
        <div className='Fact'>
          {catFact}
        </div>
      </div>
    </div>
  );
}

export default App;
