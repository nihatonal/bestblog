import React from "react";
import { useInView } from "react-intersection-observer";
import "./Skills.css";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";

const services = [
  {
    _id: "001",
    classIcon: "HTML",
    title: "HTML",
    text:
      "Ut magna aliqua enim ad ipsum dolor sit amet, con sectetur adipis icing minim veniam.",
  },
  {
    _id: "002",
    classIcon: "CSS",
    title: "CSS",
    text:
      "Ut magna aliqua enim ad ipsum dolor sit amet, con sectetur adipis icing minim veniam.",
  },
  {
    _id: "003",
    classIcon: "JavaScript",
    title: "JavaScript",
    text:
      "Ut magna aliqua enim ad ipsum dolor sit amet, con sectetur adipis icing minim veniam.",
  },
  {
    _id: "004",
    classIcon: "React",
    title: "React",
    text:
      "Ut magna aliqua enim ad ipsum dolor sit amet, con sectetur adipis icing minim veniam.",
  },
];

const Skills = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-200px",
  });
  return (
    <section id="skills" ref={ref}>
      <div className="bg-inner-dark2"></div>
      <div className="bg-50-l"></div>
      <div className="container-fluid">
        <div className="section-block-next">
          <div className="widget-block" >
            <h4 className="widget-title">The best one page template</h4>
            <p>
              Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident.
            </p>
          </div>
          <div className="widget-block">
            <div className="clearfix"></div>
            {services.map((service) => (
              <div className="col-lg-12 col-xxl-6" key={service._id}>
                <div className="block-feature">
                  {service.classIcon === "JavaScript" ? (
                    <IoLogoJavascript className="block-feature-icon" />
                  ) : service.classIcon === "HTML" ? (
                    <IoLogoHtml5 className="block-feature-icon" />
                  ) : service.classIcon === "CSS" ? (
                    <IoLogoCss3 className="block-feature-icon" />
                  ) : service.classIcon === "React" ? (
                    <FaReact className="block-feature-icon" />
                  ) : null}
                  <a href="/" className="block-feature-title">
                    {service.title}
                  </a>
                  <p>{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-block-title">
          <article className="section-title-body">
            <h1 className={inView ? "head-title show_up" : "head-title"}>
              Skills
            </h1>
            <div
              className={inView ? "section-col show_line" : "section-col"}
            ></div>
            <p className={inView ? "head-text show_down" : "head-text"}>
              UT ENIM AD MINIM VENIAM, QUIS NOSTRUD NISI UT ALIQUIP EX EA
              COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN
              VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR.
            </p>
            <div className="fucts-block">
              <div className={inView ? "fuct show_items" : "fuct"}>
                <h2>2 570</h2>
                <h4>Fun clients</h4>
              </div>
              <div className={inView ? "fuct show_items" : "fuct"}>
                <h2>4 881</h2>
                <h4>Followers</h4>
              </div>
              <div className={inView ? "fuct show_items" : "fuct"}>
                <h2>1 540</h2>
                <h4>Best Reviews</h4>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Skills;
