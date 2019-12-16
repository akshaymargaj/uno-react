
import React from 'react';
import ReactDOM from 'react-dom'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Table from './Table'
import Card from './Card';


function App(){
  return(
    <div classname="App">
      < Topbar />
      <Sidebar />
      <Card />
      <Table />  
    </div>
  );
}
    
export default App;