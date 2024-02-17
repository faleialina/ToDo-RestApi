import axios from "axios";
import { useEffect, useState } from "react";
import { iTask } from "../../interfaces";
import Modal from "../Modal/Modal";
import style from "./style.module.scss";

export default function Main() {
  const [task, setTask] = useState({ taitle: "", description: "" });
  const [listTasks, setListTasks] = useState<iTask[]>([]);
  // const [isUpdating, setIsUpdating] = useState("");
  // const [updateItemText, setUpdateItemText] = useState({});
  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);

  function swapCheckbox(index: number) {
    const updatedTasks = [...listTasks];
    updatedTasks[index].isCheck = !updatedTasks[index].isCheck;
    setListTasks(updatedTasks);
  }

  function changeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setTask({ ...task, [e.target.name]: e.target.value });
  }

  const addTask = async () => {
    try {
      const res = await axios.post("http://localhost:3000/task", task);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const getItemsList = async () => {
    try {
      const res = await axios.get("http://localhost:3000/task");
      const listTaskCheck = res.data.map((el: iTask) => ({
        ...el,
        isCheck: false,
      }));
      console.log(listTaskCheck);
      setListTasks(listTaskCheck);
      console.log(listTasks); //   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getItemsList();
  }, []);

  const deleteItem = async (id: string) => {
    try {
      const res = await axios.delete(`http://localhost:3000/task/${id}`);
      console.log(res);
      const newListItems = listTasks.filter((item: any) => item._id !== id);
      setListTasks(newListItems);
    } catch (err) {
      console.log(err);
    }
  };

  // function changeUpdateItem(e: any) {
  //   setUpdateItemText({ ...updateItemText, [e.target.name]: e.target.value });
  // }

  // const updateItem = async () => {
  //   try {
  //     const res = await axios.put(
  //       `http://localhost:3000/task/${isUpdating}`,
  //       updateItemText
  //     );
  //     console.log(res.data);
  //     setListTasks((prev) => [...prev, res.data]);
  //     setIsUpdating("");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const renderUpdateForm = () => {
  //   const updated = listTasks.filter((item: any) => item._id === isUpdating);
  //   console.log(updated);
  //   return (
  //     <form
  //       className={style.updateForm}
  //       onSubmit={() => {
  //         updateItem();
  //       }}
  //     >
  //       <input
  //         className={style.updateNewInput}
  //         type="text"
  //         name="taitle"
  //         placeholder="New note"
  //         onChange={changeUpdateItem}
  //       />
  //       <input
  //         className={style.updateNewInput}
  //         type="text"
  //         name="description"
  //         placeholder="New description"
  //         onChange={changeUpdateItem}
  //       />
  //       {/* <input className={style.updateNewInput} type="text" name='taitle' placeholder="New note" onChange={changeUpdateItem} value={updateItemText?.taitle ?? updated[0].taitle} />
  //               <input className={style.updateNewInput} type="text" name='description' placeholder="New description" onChange={changeUpdateItem} value={updateItemText?.description ?? updated[0].description} /> */}
  //       <button className={style.updateNewBtn} type="submit">
  //         Update
  //       </button>
  //     </form>
  //   );
  // };

  return (
    <>
      <div className={style.wrapper}>
        <h1>TODO LIST</h1>
        <form className={style.header} onSubmit={() => addTask()}>
          <input
            type="text"
            name="taitle"
            placeholder="Create note..."
            onChange={changeInput}
            value={task?.taitle}
          />
          <input
            type="text"
            name="description"
            placeholder="Create description note..."
            onChange={changeInput}
            value={task?.description}
          />
          <button type="submit">CREATE</button>
        </form>
        {listTasks.length == 0 ? (
          <div className={style.empty}>
            <div className={style.image}></div>
            <h2>Empty...</h2>
          </div>
        ) : (
          <div className={style.toDoListItems}>
            {listTasks.map((item, index) => (
              <div className={style.todoItemWrap}>
                <div className={style.todoItem}>
                  {/* {isUpdating === item._id ? (
                renderUpdateForm()
              ) : ( */}
                  <>
                    <input
                      type="checkbox"
                      key={index}
                      name={String(index)}
                      onChange={() => swapCheckbox(index)}
                      checked={item.isCheck}
                      className={style.form_checkbox}
                    />
                    <p
                      className={
                        listTasks[index].isCheck ? style.checked : style.def
                      }
                    >
                      {item.taitle}
                    </p>
                    <p
                      className={
                        listTasks[index].isCheck ? style.checked : style.def
                      }
                    >
                      {item.description}
                    </p>
                    {/* <button
                    className={style.updateItem}
                    onClick={() => {
                      setIsUpdating(item._id);
                    }}
                  ></button> */}
                    <button
                      className={style.updateItem}
                      onClick={() => {
                        setModalInfoOpen(true);
                      }}
                    ></button>
                    <Modal
                      isOpen={modalInfoIsOpen}
                      onClose={() => setModalInfoOpen(false)}
                    />
                    <button
                      className={style.deleteItem}
                      onClick={() => {
                        deleteItem(item._id);
                      }}
                    ></button>
                  </>
                  {/* )}*/}
                </div>

                <div className={style.line}></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
