import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
//import slides from './equip'
import q1 from '../assets/equip1.jpg'
import q2 from '../assets/equip2.jpg'
import q3 from '../assets/equip3.jpg'
import q4 from '../assets/equip4.jpg'
import q5 from '../assets/equip5.png'
import q6 from '../assets/equip6.jpg'
import s1 from '../assets/soft1.jpg'
import s2 from '../assets/soft2.png'
import s3 from '../assets/soft3.png'
import s4 from '../assets/soft4.png'
import s5 from '../assets/soft5.jpg'
import s6 from '../assets/soft6.jpg'
import "./Equipment.css";
const slides = [q1,q2,q3,q4,q5,q6]
const software=[s1,s2,s3,s4,s5,s6]
export default function Equipment () {
  const [slide1, setSlide1] = useState(0);

  const nextSlide1 = () => {
    setSlide1(slide1 === slides.length - 1 ? 0 : slide1 + 1);
  };

  const prevSlide1 = () => {
    setSlide1(slide1 === 0 ? slides.length - 1 : slide1 - 1);
  };
  const [slide2, setSlide2] = useState(0);

  const nextSlide2 = () => {
    setSlide2(slide2 === software.length - 1 ? 0 : slide2 + 1);
  };

  const prevSlide2 = () => {
    setSlide2(slide2 === 0 ? software.length - 1 : slide2 - 1);
  };
  return (
    <div className="equip_con">
    <h1>HARDWARE REQUIRED</h1>
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide1} className="arrow arrow-left" />
      {slides.map((item,idx) => {
        return (
          <img
            src={item}
            alt="equipments"
            className={slide1 === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide1}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {slides.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide1 === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide1(idx)}
            ></button>
          );
        })}
      </span>
    </div>
    <h1>SOFTWARE REQUIRED</h1>
    <div className="carousel2">
      <BsArrowLeftCircleFill onClick={prevSlide2} className="arrow arrow-left" />
      {software.map((item,idx) => {
        return (
          <img
            src={item}
            alt="equipments"
            className={slide2 === idx ? "slide2" : "slide2 slide-hidden2"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide2}
        className="arrow arrow-right"
      />
      <span className="indicators2">
        {software.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide2 === idx ? "indicator2" : "indicator2 indicator-inactive2"
              }
              onClick={() => setSlide2(idx)}
            ></button>
          );
        })}
      </span>
    </div>
    </div>
  );
};