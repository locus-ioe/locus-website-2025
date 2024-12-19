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
          <label className="form-label">NAME</label>
          <input type="text" className="form-input" required />
        </div>

        <div className="form-group-row">
          <div className="form-group">
            <label className="form-label">SEMESTER</label>
            <input type="text" className="form-input small" required />
          </div>
          <div className="form-group">
            <label className="form-label">DEPARTMENT</label>
            <input type="text" className="form-input small" required />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">COLLEGE NAME</label>
          <input type="text" className="form-input" required />
        </div>

        <div className="form-group">
          <label className="form-label">PHONE NUMBER</label>
          <input type="tel" className="form-input" required />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
