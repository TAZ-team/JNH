import React from 'react';
import { Preview, print } from 'react-html2pdf';
import './App.css';

function App() {

  

  return (
    <div id='element-to-print'  className="App">
          
        <Preview id={'jsx-template'} >
            <p>adsf</p>
        </Preview>
        <button onClick={()=>print('a', 'jsx-template')}> print</button>
    </div>
  );
}

export default App;
