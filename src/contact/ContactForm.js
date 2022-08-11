import React, { useState } from "react";
import Modal from "react-modal";
import "./ContactForm.css";
Modal.setAppElement("#root");

function ContactForm(props) {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Text, setText] = useState("");

  const [NameError, setNameError] = useState({});
  const [EmailError, setEmailError] = useState({});
  const [TextError, setTextError] = useState({});

  const [ModalIsOpen, setModalIsOpen] = useState(false);

  const Validate = () => {
    const NameError = {};
    const EmailError = {};
    const TextError = {};
    let isValid = true;

    if (Name.trim().length < 1) {
      NameError.errText = "*Name Field Required";
      isValid = false;
    }
    if (Text.trim().length < 1) {
      TextError.errText = "*Message Field Required";
      isValid = false;
    }
    if (Email.trim().length < 1) {
      EmailError.errText = "*Email Field Required";
      isValid = false;
      setNameError(NameError);
      setEmailError(EmailError);
      setTextError(TextError);
      return isValid;
    }
    if (!Email.includes("@") || !Email.includes(".")) {
      EmailError.errText = "*Invalid Email Field";
      isValid = false;
    }

    setNameError(NameError);
    setEmailError(EmailError);
    setTextError(TextError);
    return isValid;
  };

  const doSubmit = (e) => {
    e.preventDefault();

    const isValid = Validate();
    if (isValid) {
      //    ------   rady ---------

      setModalIsOpen(true);
      //alert("Thanks you.")

      //    -----------------------
      //   alert("Thanks you.  Name: "+Name+"  Phone: "+Phone+"  Email: "+Email+"  Text: "+Text)
    }
  };

  return (
    <>
      <Modal
        isOpen={ModalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="popup-send"
      >
        <div className="block-popup">
          <h4> {Name},</h4>
          <h4>The mail has been sent successfully </h4>
          <h4>Thank you.</h4>
        </div>
        <span
          onClick={() => setModalIsOpen(false)}
          className="close-btn"
        ></span>
      </Modal>
      <div id="form-wrapper">
        <div id="form-inner">
          <div id="MainResult"></div>
          <div id="MainContent">
            <form
              id="MyContactForm"
              name="MyContactForm"
              method="post"
              onSubmit={doSubmit}
            >
              <p className="name">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name*"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name" id="nameLb">
                  <span className="error">{NameError.errText}</span>
                </label>
              </p>
              <p>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your Email*"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email" id="emailLb">
                  <span className="error error1">{EmailError.errText}</span>
                </label>
              </p>
              <p>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Your Telephone"
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor="phone" id="phoneLb"></label>
              </p>
              <p className="textarea">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message*"
                  rows="4"
                  value={Text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
                <label htmlFor="message" id="messageLb">
                  <span className="error">{TextError.errText}</span>
                </label>
              </p>
              <div className="clearfix"></div>
              <div className={`text-center`}>
                <input
                  type="submit"
                  className={`contact-btn ${props.className}`}
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
