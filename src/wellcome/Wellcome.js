import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import home_img from "../assets/images/home.jpg";
import "./Wellcome.css";

const Wellcome = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-200px",
  });
  const elRef = useRef();
  const [rotate, setRotate] = useState(0);
  const [top, setTop] = useState(50);
  const [scrollPosition, setScrollPosition] = useState(15);
  const handleScroll = () => {
    const position = window.pageYOffset;
 
    setScrollPosition(position / 5);
    setRotate(position / 10);
    
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const x = elRef.current;

  useEffect(() => {
    x && setTop(x.offsetTop);
  }, []);

  // console.log(x && x.offsetTop);

  const scrollHandler = () => {
    const { offsetTop } = elRef.current;
    // console.log(`offsetTop`);
  };

  return (
    <section className="wellcome" ref={ref}>
      <div className={inView ? "bg-inner-dark2 wellcome_bg_filter":"bg-inner-dark2"}></div>
      {/* <div className="bg-50-l"></div> */}

      {/* <div
        id="bg_object_l"
        ref={elRef}
        className="bg_object_l"
        style={{
          top: scrollPosition + "px",
          transform: `rotate(${rotate}deg)`,
        }}
        onScroll={scrollHandler}
      ></div> */}

      <div className="container-fluid">
        <div className="section-block-title">
          <article className="section-title-body">
            <h1 className={inView ? "head-title show_up" : "head-title"}>
              Welcome
            </h1>
            <div
              className={inView ? "section-col show_line" : "section-col"}
            ></div>
            <p className={inView ? "head-text show_down" : "head-text"}>
              UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS
              NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN
              REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT
              NULLA PARIATUR.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Wellcome;
