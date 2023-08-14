import React from 'react';
import './App.css';
import BoxList from './part1/BoxList';
import ToDoList from './part2/ToDoList';

function App() {
  return (
    <div className='App'>
        <div id='Part1'>
            <BoxList/>
        </div>
        <div id='Part2'>
            <ToDoList/>
        </div>
    </div>
  );
}

export default App;
