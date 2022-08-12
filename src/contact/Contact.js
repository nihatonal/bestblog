import React from "react";
import { useInView } from "react-intersection-observer";
import { SocialIcon } from "react-social-icons";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

import ContactForm from './ContactForm'
import "./Contact.css";

const Contact = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-200px",
  });
  return (
    <section id="contact" ref={ref}>
      <div className="bg-inner-dark2"></div>
      <div className="bg-50-l"></div>
      <div className="container-fluid">
        <div className="section-block-next">
          <div className="row">
            <div className="widget-block">
              <h4 className="widget-title">
                <IoLocationSharp className="contact-icon" />
                ADRESS:
              </h4>
              <p>MosaicDesign Web Design Studio Avanue street 255, NA</p>
            </div>
            <div className="widget-block">
              <h4 className="widget-title">
                <FaPhoneAlt className="contact-icon" />
                PHONE:
              </h4>
              <p>
                (10 808) 321-1785-952 <br></br> (10 808) 321-1785-953
              </p>
            </div>
          </div>
          <ContactForm className={inView? 'btn-flash':''} />
        </div>
        <div className="section-block-title">
          <article className="section-title-body">
            <h1 className={inView ? "head-title show_up" : "head-title"}>
              Contact
            </h1>
            <div
              className={inView ? "section-col show_line" : "section-col"}
            ></div>
            <p className={inView ? "head-text show_down" : "head-text"}>
              WE WAIT YOU WITH HAPPY TIME. CONTACT US WITH SOCIALS
            </p>
            <div
              className={
                inView ? "social-icons-block show_down" : "social-icons-block"
              }
            >
              <ul>
                <li>
                  <SocialIcon
                    network="facebook"
                    fgColor="#fff"
                    style={{ height: 25, width: 25 }}
                    className="social_icon"
                  />
                </li>
                <li>
                  <SocialIcon
                    network="linkedin"
                    fgColor="#fff"
                    style={{ height: 25, width: 25 }}
                    className="social_icon"
                  />
                </li>
                <li>
                  <SocialIcon
                    network="pinterest"
                    fgColor="#fff"
                    style={{ height: 25, width: 25 }}
                    className="social_icon"
                  />
                </li>
                <li>
                  <SocialIcon
                    network="twitter"
                    fgColor="#fff"
                    style={{ height: 25, width: 25 }}
                    className="social_icon"
                  />
                </li>
                <li>
                  <SocialIcon
                    network="github"
                    fgColor="#fff"
                    style={{ height: 25, width: 25 }}
                    className="social_icon"
                  />
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
