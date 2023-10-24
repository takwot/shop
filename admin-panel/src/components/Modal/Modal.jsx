import React, { useState } from "react";
import styles from "./Modal.module.scss";
import axios from "axios";
import Button from "@mui/material/Button";

const Modal = ({ setView }) => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [tg, setTg] = useState("");

  return (
    <div className={styles.container} onClick={() => setView(false)}>
      <div
        onClick={e => e.stopPropagation()}
        className={styles.content_container}
      >
        <p>Добавить товар</p>
        <input
          placeholder="Введите название"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="Введите описание"
          onChange={e => setDes(e.target.value)}
          value={des}
        />
        <input
          placeholder="Введите ссылку продавца"
          value={tg}
          onChange={e => setTg(e.target.value)}
        />
        <Button
          onClick={() => {
            const data = new Date();
            const newData = String(data).split(" ");
            axios
              .post("http://45.146.166.29:5000/api/items", {
                name: name,
                description: des,
                telegramm: tg,
                date: `${newData[2]} ${newData[1]} ${newData[3]}`,
              })
              .then(res => {
                console.log(res.data);
                setView(false);
              });
          }}
        >
          Сохранить
        </Button>
      </div>
    </div>
  );
};

export default Modal;
