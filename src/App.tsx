import React from 'react';
import ScoreTs from './components/ScoreTs'
import ScoreJS from './components/ScoreJs'
import ScoreJsPrototypes from './components/ScoreJsPrototypes'
import Score from './components/score/Score'

import './App.css'

function App() {
  return (
    <div className="match-backgorund">

      <h1>Usando TS</h1>
      <div>
        <ScoreTs 
          local= {{name: "Tot", score: 0, shirt: 'white'}}
          visit= {{name: "Mun", score: 3, shirt: 'red'}}
        />  
      </div>
      
      <br></br>

      <h1>JS Puro</h1>
      <div>
        <ScoreJS
          local= {{name: "Lei", score: 0, shirt: 'blue'}}
          visit= {{name: "Ars", score: 2, shirt: 'yellow'}}
        />
      </div>

      <br></br>

      <h1>JS con PropTypes</h1>
      <div>
        <ScoreJsPrototypes
          local= {{name: "Mci", score: 0, shirt: 'white'}}
          visit= {{name: "Cry", score: 2, shirt: 'blue'}}
        />
      </div>

      <br></br>



      <h1>Con ArchivoLogic</h1>
      <div>
        <Score
          local= {{name: "Bur", score: 3, shirt: 'yellow'}}
          visit= {{name: "Bre", score: 1, shirt: 'red'}}
        />
      </div>
    </div>
  );
}

export default App;
