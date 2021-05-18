import React from "react";
import "./Form.css";
import emailjs from "emailjs-com";

function Form() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9unwnbb",
        "contact_form",
        e.target,
        "user_n8Z4WZmxb0Cpoa9qUj8ft"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <form className="form" onSubmit={sendEmail}>
      <h3 className="formTitle">WORKING TOGETHER, LEAVE ME A MESSAGE</h3>
      <label for="email" className="emailL">
        YOUR EMAIL
        <input type="email" name="email" className="email" />
      </label>
      <label for="subject" className="subjectL">
        SUBJECT
        <input type="text" name="subject" className="subject" />
      </label>
      <label for="message" className="messageL">
        YOUR MESSAGE
        <textarea name="message" className="message"></textarea>
      </label>
      <div className="align">
        <button type="submit" className="submit">
          SUBMIT
        </button>
      </div>
    </form>
  );
}

export default Form;
