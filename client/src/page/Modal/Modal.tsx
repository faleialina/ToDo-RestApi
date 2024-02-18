import axios from "axios";
import { useState } from "react";
import { ModalProps } from "../../interfaces";
import style from "./style.module.scss";

export default function Modal({ setOpen, task }: ModalProps) {
  const [updateItemText, setUpdateItemText] = useState({
    taitle: "",
    description: "",
  });

  function changeUpdateItem(e: React.ChangeEvent<HTMLInputElement>) {
    setUpdateItemText({ ...updateItemText, [e.target.name]: e.target.value });
  }

  return (
    <div className={style.modal}>
      <div className={style.modalWrapper}>
        <div className={style.modalContent}>
          <div className={style.wrapper}>
            <h1>UPDATE NOTE</h1>
            <div className={style.inputs}>
              <input
                type="text"
                placeholder="input your note..."
                name="taitle"
                onChange={changeUpdateItem}
              />
              <input
                type="text"
                placeholder="input your description note..."
                name="description"
                onChange={changeUpdateItem}
              />
            </div>

            <div className={style.buttonTag}>
              <div
                className={style.cancelButton}
                onClick={() => setOpen(false)}
              >
                CANCEL
              </div>
              <div
                className={style.applyButton}
                onClick={async () => {
                  const result = await axios.put(
                    `http://localhost:3000/task/${task._id}`,
                    updateItemText
                  );
                  console.log(result);
                  location.reload();
                }}
              >
                APPLY
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
