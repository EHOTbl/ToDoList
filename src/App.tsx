import React from 'react';
import './App.css';
import ToDoList from "./ToDoList";


function App(): JSX.Element {
    const shapka1 = 'What to learn111 11';
    const shapka2 = 'What to learn222 22';
    let tasks1 = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Superman", isDone: false},
        {id: 5, title: "Superman2", isDone: false}
    ]

    // let tasks2=[
    //     {id:1, title:"Scream", isDone:true},
    //     {id:2, title:"Students", isDone:false},
    //     {id:3, title:"We", isDone:false},
    //     {id:4, title:"Superman", isDone:false},
    //     {id:5, title:"Superman2", isDone:false}
    // ]
    return (
        <div className="App">
            <ToDoList shapka={shapka1} body={100} tasks={tasks1}/>
            {/*<ToDoList shapka={shapka2} tasks={tasks2}/>*/}
        </div>
    );
}


export default App;
