import React from 'react';
import Invoice from './invoice'
import { Preview, print } from 'react-html2pdf';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      
    }
  }

render(){
  return (
    <div id='element-to-print'  className="App">
          
        <Preview className='jsx-template' >
          <Invoice />
        </Preview>
        <button onClick={()=>print('a', 'jsx-template')}> print</button>
    </div>
  );
}
}

export default App;
