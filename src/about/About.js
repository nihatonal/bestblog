import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import "./About.css";
const About = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-100px",
  });
  return (
    <section id="about" ref={ref}>
      <div className="bg-inner-dark2"></div>
      <div className="bg-50-r"></div>
      <div className="container-fluid">
        <div className="section-block-title">
          <article className="section-title-body">
            <h1 className={inView ? "head-title show_up" : "head-title"}>About</h1>
            <div className={inView ? "section-col show_line":"section-col"}></div>
            <p className={inView ? "head-text show_down":"head-text"}>
              As an emerging web-designer, I found my true self in web-design
              where the impossible doesn't exist. If you want to have a unique
              and amazing website, your assistant is here.
            </p>
          </article>
        </div>
        <div className="section-block-next">
          <div className="widget-block">
            <h4 className="widget-title">Get to know me by numbers</h4>
            <p>
              A warrior needs weapons to achieve victory. <br></br>And these are
              my tools to create something interesting and amazing.
            </p>
          </div>
          <div className="widget-block wow fadeInDown animated">
            <div className="clearfix"></div>

            <div className="progress">
              <div
                className={inView ? "progress-bar full_up_1" : "progress-bar"}
              ></div>
              <span className="skill-value">
                JavaScript{" "}
                <span>
                  <CountUp redraw={inView} end={75} />%
                </span>
              </span>
            </div>

            <div className="progress">
              <div
                className={inView ? "progress-bar full_up_3" : "progress-bar"}
              ></div>
              <span className="skill-value">
                HTML5{" "}
                <span>
                  <CountUp redraw={inView} end={95} />%
                </span>
              </span>
            </div>

            <div className="progress">
              <div
                className={inView ? "progress-bar full_up_3" : "progress-bar"}
              ></div>
              <span className="skill-value">
                CSS3{" "}
                <span>
                  <CountUp redraw={inView} end={95} />%
                </span>
              </span>
            </div>

            <div className="progress">
              <div
                className={inView ? "progress-bar full_up_2" : "progress-bar"}
              ></div>
              <span className="skill-value">
                React{" "}
                <span>
                  <CountUp redraw={inView} end={85} />%
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
