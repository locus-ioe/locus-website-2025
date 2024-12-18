import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-section">
      <div className="title-main"><h1 className="contact-title">
         <span>Contact</span> Us
         
      </h1>
      <hr className="line"/></div>
      
      <form className="contact-form">
        <h2 className="form-heading">Lets Get Connected !</h2>

        <div className="form-group">
          <label className="form-label">Name</label>
          <input type="text" className="form-input" required />
        </div>

        <div className="form-group-row">
          <div className="form-group">
            <label className="form-label">Semester</label>
            <input type="text" className="form-input small" required />
          </div>
          <div className="form-group">
            <label className="form-label">Department</label>
            <input type="text" className="form-input small" required />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">College Name</label>
          <input type="text" className="form-input" required />
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input type="tel" className="form-input" required />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
