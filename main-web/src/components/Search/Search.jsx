import React from "react";
import styles from "./Search.module.scss";

const Search = ({ value, setValue }) => {
  return (
    <div className={styles.container}>
      <p>ПРОДАЖА АККАУНТОВ</p>
      <input
        placeholder="Введите название товара..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
