import React, {useState} from 'react';
import cssmodules from './index.module.css';
import angular from './images/angular.png';
import bootstrap from './images/bootstrap.png';
import cplus from './images/cplus.png';
import css from './images/css.jpg';
import csharp from './images/csharp.png';
import electron from './images/electron.png';
import eslint from './images/eslint.png';
import gatsby from './images/gatsby.png';
import git from './images/git.png';
import graphql from './images/graphql.png';
import html from './images/html.png';
import java from './images/java.jpg';
import jest from './images/jest.jpg';
import js from './images/js.png';
import materialui from './images/materialui.png';
import mysql from './images/mysql.png';
import next from './images/next.png';
import node from './images/node.png';
import npm from './images/npm.png';
import nuxt from './images/nuxt.png';
import prettier from './images/prettier.png';
import python from './images/python.png';
import react from './images/react.png';
import redux from './images/redux.png';
import sass from './images/sass.png';
import sql from './images/sql.png';
import styledcomponents from './images/styledcomponents.png';
import ts from './images/ts.svg';
import vue from './images/vue.png';
import webpack from './images/webpack.png';
import xml from './images/xml.png';

function App() {
  let selections = [
    {1: angular, 2: 'angular'},
    {1: bootstrap, 2: 'bootstrap'},
    {1: cplus, 2: 'cplus'},
    {1: css, 2: 'css'},
    {1: csharp, 2: 'csharp'},
    {1: electron, 2: 'electron'},
    {1: eslint, 2: 'esint'},
    {1: gatsby, 2: 'gatsby'},
    {1: git, 2: 'git'},
    {1: graphql, 2: 'graphql'},
    {1: html, 2: 'html'},
    {1: java, 2: 'java'},
    {1: jest, 2: 'jest'},
    {1: js, 2: 'js'},
    {1: materialui, 2: 'materialui'},
    {1: mysql, 2: 'mysql'},
    {1: next, 2: 'next'},
    {1: npm, 2: 'npm'},
    {1: nuxt, 2: 'nuxt'},
    {1: prettier, 2: 'prettier'},
    {1: python, 2: 'python'},
    {1: react, 2: 'react'},
    {1: node, 2: 'node'},
    {1: redux, 2: 'redux'},
    {1: sass, 2: 'sass'},
    {1: sql, 2: 'sql'},
    {1: styledcomponents, 2: 'styledcomponents'},
    {1: ts, 2: 'ts'},
    {1: vue, 2: 'vue'},
    {1: webpack, 2: 'webpack'},
    {1: xml, 2: 'xml'},
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
  console.log(src1);
  return (
    <div className="App">
      <header className={cssmodules.header}>
        <h1>Tech Memory</h1>
      </header>

      <section className={cssmodules.section}>
        <span>Current Score: {cScore}</span>
        <span>Best Score: {bScore}</span>
      </section>

      <main className={cssmodules.main}>
        <div>
          <img src={src1[1]} alt="alternative" onClick={game} id="img1" />
          <p id="text1">{src1[2]}</p>
        </div>

        <div>
          <img src={src2[1]} alt="alternative" onClick={game} id="img2" />
          <p id="text2">{src2[2]}</p>
        </div>
        <div>
          <img src={src3[1]} alt="alternative" onClick={game} id="img3" />
          <p id="text3">{src3[2]}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
