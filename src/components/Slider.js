import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../CSS/Slider.module.css";
import arrow from "../assets/arrow.png";

const Slider = () => {
  const win = useRef(0);
  const { cars } = useSelector((state) => state.cars);
  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    win.window = window;
  });

  const slideLeft = () => {
    if (curIndex <= 0) return;
    const slider = document.querySelector("#slider");
    const leftMargin = +win.window
      .getComputedStyle(slider)
      .marginLeft.slice(0, -2);
    slider.style.marginLeft = `${leftMargin + 350}px`;
    setCurIndex((curIndex) => curIndex - 1);
  };

  const slideRight = () => {
    if (curIndex >= cars.length + 1) return;
    const slider = document.querySelector("#slider");
    const leftMargin = +win.window
      .getComputedStyle(slider)
      .marginLeft.slice(0, -2);
    slider.style.marginLeft = `${leftMargin - 350}px`;
    setCurIndex((curIndex) => curIndex + 1);
  };
  return (
    <div className={styles.prevnextbtns}>
      <button type="button" onClick={() => slideLeft()}>
        <img src={arrow} alt="Previous" />
      </button>
      <button type="button" onClick={() => slideRight()}>
        <img src={arrow} alt="Next" />
      </button>
    </div>
  );
};

export default Slider;
