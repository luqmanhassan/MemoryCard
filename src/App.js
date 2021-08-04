import React, {useState} from 'react';
import './index.css';

function App() {
  let selections = [
    'angular.png',
    'bootstrap.png',
    'cplus.png',
    'css.jpg',
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
  const [picked, setPicked] = useState([]);
  const [cScore, setcScore] = useState(0);
  const [bScore, setbScore] = useState(0);

  const [src1, setSrc1] = useState(randomSelections(0, selections.length));
  const [src2, setSrc2] = useState(randomSelections(0, selections.length));
  const [src3, setSrc3] = useState(randomSelections(0, selections.length));

  function cScoreChange() {
    setcScore(cScore + 1);
  }

  const bScoreChange = () => {
    setbScore(bScore + 1);
  };

  function randomSelections(min, max) {
    let x = Math.floor(Math.random() * (max - min)) + min;
    return selections[x];
  }

  function game(e) {
    let z = e.target.src;
    if (!picked.includes(z)) {
      if (!(bScore > cScore)) {
        bScoreChange();
      }
      cScoreChange();
    } else {
      setcScore(0);
    }
    setPicked((oldArray) => [...oldArray, z]);

    setSrc1(randomSelections(0, selections.length));
    setSrc2(randomSelections(0, selections.length));
    setSrc3(randomSelections(0, selections.length));
  }

  let index_src1 = src1.indexOf('.');
  let slice_src1 = src1.slice(0, index_src1);

  let index_src2 = src2.indexOf('.');
  let slice_src2 = src2.slice(0, index_src2);

  let index_src3 = src3.indexOf('.');
  let slice_src3 = src3.slice(0, index_src3);

  return (
    <div className="App">
      <header>
        <h1>Tech Memory</h1>
      </header>

      <section>
        <span>Current Score: {cScore}</span>
        <span>Best Score: {bScore}</span>
      </section>

      <main>
        <div>
          <img
            src={'images/' + src1}
            alt="alternative"
            onClick={game}
            id="img1"
          />
          <p id="text1">{slice_src1}</p>
        </div>
        <div>
          <img
            src={'images/' + src2}
            alt="alternative"
            onClick={game}
            id="img2"
          />
          <p id="text2">{slice_src2}</p>
        </div>
        <div>
          <img
            src={'images/' + src3}
            alt="alternative"
            onClick={game}
            id="img3"
          />
          <p id="text3">{slice_src3}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
