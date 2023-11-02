/**
 * cprg303 la4 My To Do List App
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import ToDoList from './ToDoList.jsx';
import ToDoForm from './ToDoForm.jsx';
import { useState } from 'react';



function App() {

  const [tasks, settasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (task) => {
    if(!tasks.includes(task))
    settasks([...tasks, task]);
  };
  

  

  return <SafeAreaView>
    <ToDoList tasks={tasks} />
    <ToDoForm addTask={addTask}/>
  </SafeAreaView>;
}

export default App;
