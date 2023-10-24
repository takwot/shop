import React, { useState } from "react";
import styles from "./Modal.module.scss";
import axios from "axios";
import Button from "@mui/material/Button";

const ModalChange = ({ setView, nameValue, desValue, tgValue }) => {
  const [name, setName] = useState(nameValue);
  const [des, setDes] = useState(desValue);
  const [tg, setTg] = useState(tgValue);

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
              .patch("http://45.146.166.29:5000/api/items", {
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
          Изменить
        </Button>
      </div>
    </div>
  );
};

export default ModalChange;
