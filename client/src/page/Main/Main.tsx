import { useState } from 'react'
import style from './style.module.scss'

export default function Main() {
    const [task, setTask] = useState({ title: '', description: '' });
    function changeInput(e) {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    return (
        <div className={style.wrapper}>
            <h1>TODO LIST</h1>
            <div className={style.header}>
                <input type="text" name='title' placeholder='enter title...' onChange={changeInput}/>
                <input type="text" name='description' placeholder='enter description...'onChange={changeInput} />
                <button type="submit">CREATE</button>
            </div>
        </div>
    )
}

