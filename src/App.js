import React, {useState} from 'react';
import './index.css';
// , useEffect
function App() {
  const [cScore, setcScore] = useState(0);

  const [bScore, setbScore] = useState(0);

  // const [src1, setSrc1] = useState('N/A');
  // const [src2, setSrc2] = useState(null);
  // const [src3, setSrc3] = useState(null);

  let selections = [
    'angular.png',
    'bootstrap.png',
    'cplus.png',
    'csharp.png',
    'electron.png',
    'eslint.png',
    'gatsby.png',
    'git.png',
    'graphql.png',
    'html.png',
    'java.jpg',
    'jest.jpg',
    'js.png',
    'materialui.png',
    'mysql.png',
    'next.png',
    'node.png',
    'npm.png',
    'nuxt.png',
    'prettier.png',
    'python.png',
    'react.png',
    'redux.png',
    'sass.png',
    'sql.png',
    'styledcomponents.png',
    'ts.svg',
    'vue.png',
    'webpack.png',
    'xml.png',
  ];

  function cScoreChange() {
    setcScore(cScore + 1);
  }

  const bScoreChange = () => {
    setbScore(bScore + 1);
  };

  function randomSelections(min, max) {
    let x = Math.floor(Math.random() * (max - min)) + min;
    // document.getElementById('text2').innerHTML = '' + selections[x];
    // setSrc1(selections[x]);
    // setSrc2(selections[x]);
    // setSrc3(selections[x]);
    return selections[x];
  }

  function something() {
    document.getElementById('img1').src =
      'images/' + randomSelections(0, selections.length);
    document.getElementById('img2').src =
      'images/' + randomSelections(0, selections.length);
    document.getElementById('img3').src =
      'images/' + randomSelections(0, selections.length);
  }

  function yyy() {
    let x = document.getElementById('img1').src;
    document.getElementById('text1').innerHTML = x + '';
  }

  return (
    <div className="App">
      <header>
        <h1>Tech Memory</h1>
      </header>

      <section>
        <span onClick={cScoreChange}>Current Score: {cScore}</span>
        <span onClick={bScoreChange}>Best Score: {bScore}</span>
      </section>

      <main>
        <div>
          <img
            src={'images/' + randomSelections(0, selections.length)}
            alt="alternative"
            onClick={something}
            id="img1"
          />
          <p id="text1" onLoad={yyy()}></p>
        </div>
        <div>
          <img
            src={'images/' + randomSelections(0, selections.length)}
            alt="alternative"
            onClick={something}
            id="img2"
          />
          <p id="B">{/*{src2}*/}</p>
        </div>
        <div>
          <img
            src={'images/' + randomSelections(0, selections.length)}
            alt="alternative"
            onClick={something}
            id="img3"
          />
          <p id="C"></p>
        </div>
      </main>
    </div>
  );
}

export default App;

/* 
- Store and Display src value in p elements
- 
*/
