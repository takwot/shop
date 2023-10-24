import React from "react";
import styles from "./Item.module.scss";
import Button from "@mui/material/Button";

const Item = ({ name, des, date, link }) => {
  return (
    <div className={styles.container}>
      <div className={styles.buy_container}>
        <p className={styles.name}>{name}</p>
        <Button variant="contained" sx={{ height: "50px", width: "100px" }}>
          Купить
        </Button>
      </div>
      <p className={styles.description}>{des}</p>
      <p className={styles.date}>Дата добавления: {date}</p>
    </div>
  );
};

export default Item;
