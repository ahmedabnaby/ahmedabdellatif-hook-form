import React, {useState} from 'react';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';



function App() {

  const [userList, setUserList] = useState([]);

  return (
    <div className="App">
      <Form userList={userList} setUserList={setUserList}/>
      <Display userList={userList}/>
    </div>
  );
}

export default App;
