import React, { useEffect, useState } from "react";
import Item from "./Item/Item";
import styles from "./Items.module.scss";
import axios from "axios";

const Items = ({ value }) => {
  const [data, setData] = useState([]);
  const dataMap = data.filter(el => {
    return el.name.toLowerCase().includes(value.toLowerCase());
  });

  useEffect(() => {
    axios.get("http://45.146.166.29:5000/api/items").then(res => {
      if (res.data.status === true) {
        setData(res.data.data);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      {data.length === 0
        ? "Тут пока что пусто..."
        : dataMap.map((el, index) => (
            <Item
              key={index}
              name={el.name}
              date={el.date}
              des={el.description}
            />
          ))}
    </div>
  );
};

export default Items;
