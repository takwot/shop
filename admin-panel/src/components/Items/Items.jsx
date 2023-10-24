import React, { useEffect, useState } from "react";
import Item from "./Item/Item";
import styles from "./Items.module.scss";
import axios from "axios";

const Items = ({ view }) => {
  const [data, setData] = useState([]);
  const [modalView, setModalView] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:5000/api/items").then(res => {
      if (res.data.status === true) {
        setData(res.data.data);
      }
    });
  }, [view, modalView]);

  return (
    <div className={styles.container}>
      {data.length === 0
        ? "Тут пока что пусто..."
        : data.map((el, index) => (
            <Item
              key={index}
              name={el.name}
              date={el.date}
              link={el.telegramm}
              id={el.id}
              des={el.description}
              viewModal={modalView}
              setViewModal={setModalView}
              setData={setData}
            />
          ))}
    </div>
  );
};

export default Items;
