import React from 'react';
import './index.css';
// {useState, useEffect}
function App() {
  return (
    <div className="App">
      <header>
        <h1>Tech Memory</h1>
      </header>

      <section>
        <button>Current Score: {}</button>
        <button>Best Score: {}</button>
      </section>

      <main>
        <div>
          <img src="/images/xml.png" alt="alternative" />
          <p>HTML</p>
        </div>
        <div>
          <img src="/images/css.png" alt="alternative" />
          <p>CSS</p>
        </div>
        <div>
          <img src="/images/js.png" alt="alternative" />
          <p>JavaScript</p>
        </div>
      </main>
    </div>
  );
}

export default App;
