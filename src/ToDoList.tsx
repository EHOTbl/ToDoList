import React, {useRef, useState} from "react";
import {FilterValuesType} from "./App";

type PropsType = {
    shapka: string,
    body?: number | string,
    // tasks:Array<TaskType>
    tasks: TaskType[],
    removeTask: (taskId: string) => void,
    changeToDolistFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void,
}


export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}


const ToDoList = (props: PropsType) => {
    const [title, setTitle] = useState<string>('')

    const addTaskHandler = () => {
        props.addTask(title)
    }


    return (
        <div>
            <div>
                <h3>{props.shapka}</h3>
                <h3>{props.body}</h3>
                <div>
                    <input onChange={(e) => setTitle(e.currentTarget.value)}/>
                    {/*//e.currentTarget ==input*/}
                    <button onClick={addTaskHandler}>+</button>
                </div>
                <ul>
                    {props.tasks.map((t, index) => {
                        return (
                            <li key={t.id}><input type="checkbox" checked={t.isDone}/>
                                <span>{t.title}</span>
                                <button onClick={() => {
                                    props.removeTask(t.id)
                                }}>X
                                </button>
                            </li>

                        )
                    })}
                </ul>
                <div>
                    <button onClick={() => {
                        props.changeToDolistFilter("all")
                    }}>All
                    </button>
                    <button onClick={() => {
                        props.changeToDolistFilter("active")
                    }}>Active
                    </button>
                    <button onClick={() => {
                        props.changeToDolistFilter("completed")
                    }}>Completed
                    </button>
                </div>
            </div>
        </div>
    )
}


export default ToDoList;