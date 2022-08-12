import React from "react";
import { useInView } from "react-intersection-observer";
import "./Lightbox.css";
import project_1 from "../assets/images/project_1.jpg";
import project_2 from "../assets/images/project_2.jpg";
import project_3 from "../assets/images/project_3.jpg";
import project_4 from "../assets/images/project_4.jpg";
function Lightbox() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-250px",
  });
  return (  
    <div className="portfolio-items" ref={ref}>
      <div
        className={
          inView
            ? "portfolio-item-wrapper"
            : "portfolio-item-wrapper"
        }
      >
        <div className="single-portfolio-block">
          <div className="bg-portfolio"></div>
          <a href="https://vedexpress.netlify.app/" target="_blank">
            <img
              className="img-fluid"
              alt="Comfort Office tools"
              src={project_1}
            />
          </a>
          <span className="single-portfolio-title">Landing Page</span>
        </div>
      </div>
      <div
        className={
          inView
            ? "portfolio-item-wrapper"
            : "portfolio-item-wrapper"
        }
      >
        <div className="single-portfolio-block">
          <div className="bg-portfolio"></div>
          <a href="https://petsshelter.netlify.app/" target="_blank">
            <img
              className="img-fluid"
              alt="Comfort Office tools"
              src={project_2}
            />
          </a>
          <span className="single-portfolio-title">Shelter House</span>
        </div>
      </div>
      <div
        className={
          inView
            ? "portfolio-item-wrapper"
            : "portfolio-item-wrapper"
        }
      >
        <div className="single-portfolio-block">
          <div className="bg-portfolio"></div>
          <a href="https://medicalexp.netlify.app/" target="_blank">
            <img
              className="img-fluid"
              alt="Comfort Office tools"
              src={project_3}
            />
          </a>
          <span className="single-portfolio-title">Medical</span>
        </div>
      </div>
      <div
        className={
          inView
            ? "portfolio-item-wrapper"
            : "portfolio-item-wrapper"
        }
      >
        <div className="single-portfolio-block">
          <div className="bg-portfolio"></div>
          <a href="https://emailmarketing.netlify.app/" target="_blank">
            <img
              className="img-fluid"
              alt="Comfort Office tools"
              src={project_4}
            />
          </a>
          <span className="single-portfolio-title">Productivty</span>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
