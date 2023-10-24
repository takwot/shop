import React from "react";
import styles from "./Item.module.scss";
import Button from "@mui/material/Button";
import axios from "axios";
import ModalChange from "./Modal/ModalChange";

const Item = ({
  name,
  des,
  date,
  link,
  id,
  setData,
  setViewModal,
  viewModal,
}) => {
  return (
    <div className={styles.container}>
      {viewModal && (
        <ModalChange
          desValue={des}
          nameValue={name}
          tgValue={link}
          setView={setViewModal}
        />
      )}
      <div className={styles.buy_container}>
        <p className={styles.name}>{name}</p>
        <a target="_blank" href={link}>
          <Button
            variant="contained"
            sx={{
              height: "50px",
              width: "100px",
              position: "relative",
              zIndex: "0",
            }}
          >
            Купить
          </Button>
        </a>
      </div>
      <p className={styles.description}>{des}</p>
      <p className={styles.date}>Дата добавления: {date}</p>
      <Button
        sx={{ color: "white", backgroundColor: "red" }}
        className={styles.button}
        variant="contained"
        onClick={() => {
          axios
            .delete(`http://localhost:5000/api/items?id=${id}`)
            .then(res => {
              console.log(res.data);
            })
            .then(() => {
              axios.get("http://localhost:5000/api/items").then(res => {
                if (res.data.status === true) {
                  console.log(res.data);
                  setData(res.data.data);
                }
              });
            });
        }}
      >
        Удалить
      </Button>
      <Button onClick={() => setViewModal(true)}>Изменить</Button>
    </div>
  );
};

export default Item;
