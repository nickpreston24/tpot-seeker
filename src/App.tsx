import hello from './assets/hello-there.gif'
import * as AssetsService from "./services/assets-service";
import WordCloud from './components/WordCloud'
import { useState } from 'react';

function App() {

  const initialState = {
    words: [
      {
        text: 'faith',
        value: 64,
      },
      {
        text: 'cults',
        value: 45,
      },
      {
        text: 'Jesus Christ',
        value: 67,
      },
      {
        text: 'Grace',
        value: 52,
      },
    ]
  }

  const [state, setState] = useState(initialState)

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={AssetsService.getResourceURL(hello)}
          alt="loading..."
        />
        {/* <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus illum autem dolorem, facere amet a quod deleniti cum quis pariatur. Quaerat, odio eaque. Soluta consequuntur, sunt placeat odio quam aliquid!</h1> */}
      </header>
      <WordCloud {...state} />
    </div>
  );
}

export default App;
