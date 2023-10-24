import React from "react";
import styles from "./AddButton.module.scss";
import Button from "@mui/material/Button";
import Modal from "../Modal/Modal";
import { useState } from "react";

const AddButton = ({ view, setView }) => {
  return (
    <div className={styles.container}>
      <Button variant="contained" onClick={() => setView(true)}>
        Добавить объвление
      </Button>
      {view && <Modal view={view} setView={setView} />}
    </div>
  );
};

export default AddButton;
