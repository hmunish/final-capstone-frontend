import React from "react";
import styles from "../CSS/Slider.module.css";
import arrow from "../assets/arrow.png";

const Slider = () => {
  const slider = document.querySelector("#slider");
  const slideLeft = () => {
    const leftMargin = +window.getComputedStyle(slider).marginLeft.slice(0, -2);
    if (leftMargin < (slider.childElementCount + 1) * -350) return;
    document.querySelector("#slider").style.marginLeft = `${
      leftMargin - 350
    }px`;
  };

  const slideRight = () => {
    const leftMargin = +window.getComputedStyle(slider).marginLeft.slice(0, -2);
    if (leftMargin >= 0) return;
    document.querySelector("#slider").style.marginLeft = `${
      leftMargin + 350
    }px`;
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
