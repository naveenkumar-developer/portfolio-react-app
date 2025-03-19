import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import "../assets/styles/Contact.css";
function Contact() {
  //SET INITIAL STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company_name: "",
    position: "",
    message: "",
  });

  const form = useRef();

  //SET ERROR STATE
  const [nameErrorFlag, setNameErrorFlag] = useState(false);
  const [emailErrorFlag, setEmailErrorFlag] = useState(false);
  const [companyErrorFlag, setCompanyErrorFlag] = useState(false);
  const [positionErrorFlag, setPositionErrorFlag] = useState(false);
  const [messageErrorFlag, setMessageErrorFlag] = useState(false);

  //ALERT BOX SHOW

  const [alertBoxOpen, setAlertBoxOpen] = useState(false);
  const [submitBox, setSubmitBoxOpen] = useState(false);

  // SET VALUES STATE USER ENTER THE LETTERS
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // VALIDATE THE NAME
  const validateName = () => {
    const isValid = formData.name.trim().length > 0;
    setNameErrorFlag(!isValid);
    return isValid;
  };

  //VALIDATE THE EMAIL
  const validateEmail = () => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const isValid = emailPattern.test(formData.email.trim());
    setEmailErrorFlag(!isValid);
    return isValid;
  };

  //VALIDATE THE COMPANY NAME
  const validateCompanyName = () => {
    const isValid = formData.company_name.trim().length > 0;
    setCompanyErrorFlag(!isValid);
    return isValid;
  };

  // VALIDATE THE POSITION
  const validatePosition = () => {
    const isValid = formData.position.trim().length > 0;
    setPositionErrorFlag(!isValid);
    return isValid;
  };

  //VALIDATE MESSAGES
  const validateMessage = () => {
    const isValid = formData.message.trim().length >= 25;
    setMessageErrorFlag(!isValid);
    return isValid;
  };

 // CLEAR THE INPUT VALUES AFTER THE SUBMITTED
 const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted", formData);
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isCompanyValid = validateCompanyName();
    const isPositionValid = validatePosition();
    const isMessageValid = validateMessage();

    if (
      isNameValid &&
      isEmailValid &&
      isCompanyValid &&
      isPositionValid &&
      isMessageValid
    ) {
      const service_id="service_ri8h3ej";
      const template_id="template_e9k72ru";
      const public_key="dM7GIGSk621njewwi";
      emailjs.sendForm(service_id,template_id, form.current,{
        publicKey:public_key,
      })
      .then(
        ()=>{
          console.log("SUCCESS")
        },
        (error)=>{
          console.log("FAILED...", error.text);
        }
      )
      setFormData({
        name: "",
        email: "",
        company_name: "",
        position: "",
        message: "",
      });
      setAlertBoxOpen(false);
      setSubmitBoxOpen(true);
    } else {
      setAlertBoxOpen(true);
      setSubmitBoxOpen(false);
    }
  };
  return (
    <>
      <div className="contact_container">
        {alertBoxOpen && (
          <div className="errorBox">
            <div className="errorIcon">
              <ErrorIcon />
            </div>
            <h6>Error!</h6>
            <p>Fix the all errors</p>
            <button
              type="button"
              className="closeBtn"
              onClick={() => setAlertBoxOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>
        )}
        {submitBox && (
          <div className="submittedBox">
            <div className="submitIcon">
              <CheckCircleIcon />
            </div>
            <h6>Success!</h6>
            <p>Form submitted</p>
            <button
              type="button"
              className="closeBtn"
              onClick={() => setSubmitBoxOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>
        )}
        <h1>Contact</h1>
        <form ref={form} onSubmit={handleSubmit} className="contact_form">
          <div className="inputGroup">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              aria-label="name"
              onChange={handleChange}
              placeholder="Enter the name"
              required
            />
            {nameErrorFlag && <div className="error">Enter your name</div>}
          </div>
          <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              aria-label="email"
              onChange={handleChange}
              placeholder="Enter the email"
              required
            />
            {emailErrorFlag && (
              <div className="error">Enter your correct email address</div>
            )}
          </div>
          <div className="inputGroup">
            <label htmlFor="Company_name">Company name</label>
            <input
              type="text"
              name="company_name"
              id="Company_name"
              value={formData.company_name}
              aria-label="company name"
              onChange={handleChange}
              placeholder="Enter the company name"
              required
            />
            {companyErrorFlag && (
              <div className="error">Enter your company name</div>
            )}
          </div>
          <div className="inputGroup">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              id="position"
              value={formData.position}
              aria-label="position"
              onChange={handleChange}
              placeholder="Enter the position"
              required
            />
            {positionErrorFlag && (
              <div className="error">Enter the job title</div>
            )}
          </div>
          <div className="inputGroup">
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              name="message"
              id="message"
              value={formData.message}
              aria-label="message"
              onChange={handleChange}
              placeholder="Messge"
              required
            />
            {messageErrorFlag && (
              <div className="error">minimum 25 charecters required</div>
            )}
          </div>
          <button
            type="submit"
            className="submitBtn"
            aria-label="ContactFrom Submit button"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
