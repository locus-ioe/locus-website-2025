import React, { useState, useRef, useEffect } from "react";
import { FiMail, FiPhone } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
  });
  const [message, setMessage] = useState("");
  const textAreaRef = useRef(null);

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // Adjust the height of the textarea dynamically
  useEffect(() => {
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height to auto
      textarea.style.height = `${textarea.scrollHeight}px`; // Adjust height
    }
  }, [message]);

  // Handle mailto link generation and redirection
  const handleMailtoClick = () => {
    const email = "locus@ioe.edu.np";
    const subject = `Contact Request: ${formData.purpose || "No Subject"}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPurpose: ${formData.purpose}\n\nMessage:\n${message}`;

    // Create mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Redirect to the mailto link
    window.location.href = mailtoLink;
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6">
      <div className="border-white border-2 px-4 sm:px-8 md:px-12 lg:px-16 py-6 md:py-8 rounded-md shadow-md bg-black/10 backdrop-blur-sm">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            <span className="text-[#00abe6]">Contact</span>{" "}
            <span className="text-white">Us</span>
          </h1>
        </div>

        {/* Contact Info Cards */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 md:mb-8 justify-center -mx-2 sm:mx-0">
          <a 
            href="mailto:locus@ioe.edu.np" 
            className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 bg-gradient-to-br from-[#00abe6]/10 to-[#00abe6]/5 border-2 border-[#00abe6]/30 rounded-lg hover:border-[#00abe6] hover:shadow-[0_0_15px_rgba(0,171,230,0.3)] transition-all duration-300 text-white no-underline flex-1 sm:flex-initial"
          >
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-[#00abe6]/20 rounded-lg flex-shrink-0">
              <FiMail className="text-[#00abe6] text-base sm:text-xl" />
            </div>
            <div className="text-left min-w-0 flex-1">
              <p className="text-[10px] sm:text-xs text-gray-400 mb-0.5">Email Us</p>
              <p className="text-xs sm:text-sm font-semibold truncate">locus@ioe.edu.np</p>
            </div>
          </a>

          <a 
            href="tel:+9779805261687" 
            className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 bg-gradient-to-br from-[#00abe6]/10 to-[#00abe6]/5 border-2 border-[#00abe6]/30 rounded-lg hover:border-[#00abe6] hover:shadow-[0_0_15px_rgba(0,171,230,0.3)] transition-all duration-300 text-white no-underline flex-1 sm:flex-initial"
          >
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-[#00abe6]/20 rounded-lg flex-shrink-0">
              <FiPhone className="text-[#00abe6] text-base sm:text-xl" />
            </div>
            <div className="text-left min-w-0 flex-1">
              <p className="text-[10px] sm:text-xs text-gray-400 mb-0.5">Call Us</p>
              <p className="text-xs sm:text-sm font-semibold">+977 9805261687</p>
            </div>
          </a>
        </div>

        <form className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-white text-sm font-medium"
            >
              NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-transparent border border-primary focus:border-teal-400 text-white rounded-md outline-none shadow-[0_0_10px_rgba(79,209,197,0.1)] focus:shadow-[0_0_15px_rgba(79,209,197,0.2)]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-white text-sm font-medium"
              >
                EMAIL
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-transparent border border-primary focus:border-teal-400 text-white rounded-md outline-none shadow-[0_0_10px_rgba(79,209,197,0.1)] focus:shadow-[0_0_15px_rgba(79,209,197,0.2)]"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-white text-sm font-medium"
              >
                PHONE NUMBER
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-transparent border border-primary focus:border-teal-400 text-white rounded-md outline-none shadow-[0_0_10px_rgba(79,209,197,0.1)] focus:shadow-[0_0_15px_rgba(79,209,197,0.2)]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="purpose"
              className="block text-white text-sm font-medium"
            >
              PURPOSE
            </label>
            <input
              type="text"
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-transparent border border-primary focus:border-teal-400 text-white rounded-md outline-none shadow-[0_0_10px_rgba(79,209,197,0.1)] focus:shadow-[0_0_15px_rgba(79,209,197,0.2)]"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-white text-sm font-medium"
            >
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              ref={textAreaRef}
              rows="2"
              className="w-full px-3 py-2 bg-transparent border border-primary focus:border-teal-400 text-white rounded-md outline-none shadow-[0_0_10px_rgba(79,209,197,0.1)] focus:shadow-[0_0_15px_rgba(79,209,197,0.2)] resize-none"
            />
          </div>

          <button
            type="button"
            onClick={handleMailtoClick}
            className="w-32 mx-auto block px-4 py-2 bg-transparent hover:bg-[#00abe6]/10 text-[#00abe6] border-2 border-[#00abe6] rounded-md shadow-[0_0_15px_rgba(79,209,197,0.2)] hover:shadow-[0_0_20px_rgba(79,209,197,0.4)] transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
