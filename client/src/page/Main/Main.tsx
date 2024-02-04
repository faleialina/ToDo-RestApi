import axios from 'axios';
import { useEffect, useState } from 'react'
import style from './style.module.scss'

export default function Main() {
    const [task, setTask] = useState({ taitle: '', description: '' });
    const [listTasks, setListTasks] = useState([]);
    function changeInput(e: any) {
        setTask({ ...task, [e.target.name]: e.target.value });
    };


    const addTask = async () => {
        try {
            const res = await axios.post('http://localhost:3000/task', task);
            console.log(res);

            setListTasks(prev => [...prev, res.data]);
            setTask({ taitle: '', description: '' });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const getItemsList = async () => {
            try {
                const res = await axios.get('http://localhost:3000/task');
                setListTasks(res.data);
                console.log('render')
            } catch (err) {
                console.log(err);
            }
        };
        getItemsList();
    }, []);


    return (
        <div className={style.wrapper}>
            <h1>TODO LIST</h1>
            <form className={style.header} onSubmit={e => addTask(e)}>
                <input type="text" name='taitle' placeholder='Create note...' onChange={changeInput} value={task?.taitle} />
                <input type="text" name='description' placeholder='Create description note...' onChange={changeInput} value={task?.description} />
                <button type="submit">CREATE</button>
            </form>

            <div className={style.toDoListItems}>
                {
                    listTasks.map(item => (
                        <div className={style.todoItemWrap}>
                            
                            <div className={style.todoItem}>
                                <p className={style.itemContent}>{item.taitle}</p>
                                <p className={style.itemContent}>{item.description}</p>
                                <button className={style.updateItem} onClick={() => { setIsUpdating(item._id) }}></button>
                                <button className={style.deleteItem} onClick={() => { deleteItem(item._id) }}></button>
                            </div>

                            <div className={style.line}></div>

                        </div>
                    ))
                }

            </div>

        </div>
    )
}

