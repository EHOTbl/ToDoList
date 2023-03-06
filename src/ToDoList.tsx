import React from "react";

type PropsType = {
    shapka: string,
    body?: number | string,
    // tasks:Array<TaskType>
    tasks: TaskType[],
}

type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}

const ToDoList = (props: PropsType) => {
    return (
        <div>
            <div>
                <h3>{props.shapka}</h3>
                <h3>{props.body}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map((t) => {
                        return (
                            <li><input type="checkbox" checked={t.isDone}/>
                                <span>{t.title}</span>
                            <button onClick={()=>{alert(t.id)}}>X</button></li>

                        )
                    })}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    )

}

export default ToDoList;