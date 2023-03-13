import React, {useState} from 'react';
import './App.css';
import ToDoList, {TaskType} from "./ToDoList";
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed"

function App(): JSX.Element {
    const [tasks1, setTasks] = useState(
        [
            {id: v1(), title: "CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "React", isDone: false},
            {id: v1(), title: "Superman", isDone: false},
            {id: v1(), title: "Superman2", isDone: false}
        ])

    const shapka1 = 'What to learn111 11';
    const shapka2 = 'What to learn222 22';
    // let tasks1 = [
    //     {id: 1, title: "CSS", isDone: true},
    //     {id: 2, title: "JS", isDone: true},
    //     {id: 3, title: "React", isDone: false},
    //     {id: 4, title: "Superman", isDone: false},
    //     {id: 5, title: "Superman2", isDone: false}
    // ]

    const removeTask = (taskId: string) => {
        setTasks(tasks1.filter((task) => task.id !== taskId))
    }
    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(), title: title, isDone: false
        }
        setTasks([...tasks1, newTask])

    }

    const [filter, setFilter] = useState<FilterValuesType>("all")

    const changeToDolistFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }


    let tasksForRender: Array<TaskType> = []
    if (filter === "all") {
        tasksForRender = tasks1
    }
    if (filter === "active") {
        tasksForRender = tasks1.filter(t => t.isDone === false)
    }
    if (filter === "completed") {
        tasksForRender = tasks1.filter(t => t.isDone === true)
    }


    return (
        <div className="App">
            <ToDoList shapka={shapka1}
                      tasks={tasksForRender}
                      removeTask={removeTask}
                      changeToDolistFilter={changeToDolistFilter}
                      addTask={addTask}/>
        </div>
    );
}


export default App;
