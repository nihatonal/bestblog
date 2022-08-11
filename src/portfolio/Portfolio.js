import React from "react";
import { useInView } from "react-intersection-observer";
import Lightbox from "./Ligthbox";
import "./Portfolio.css";
const Portfolio = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-200px",
  });

  return (
    <section id="portfolio" ref={ref}>
      <div className="bg-inner-dark2"></div>
      <div className="bg-50-r"></div>
      <div className="container-fluid">
        <div className="section-block-title">
          <article className="section-title-body">
            <h1 className={inView ? "head-title show_up" : "head-title"}>
              Portfolio
            </h1>
            <div
              className={inView ? "section-col show_line" : "section-col"}
            ></div>
            <p className={inView ? "head-text show_down" : "head-text"}>
              As an emerging web-designer, I found my true self in web-design
              where the impossible doesn't exist. If you want to have a unique
              and amazing website, your assistant is here.
            </p>
          </article>
        </div>
        <div className="lightbox-wrapper">
          <Lightbox />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
