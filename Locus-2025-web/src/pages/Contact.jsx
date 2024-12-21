import React, { useState, useRef, useEffect } from "react";

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
    const email = "karkidivya5@gmail.com";
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
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="border-white border-2 px-16 py-8 rounded-md shadow-md bg-black/10 backdrop-blur-sm">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-teal-400">Contact</span>{" "}
            <span className="text-white">Us</span>
          </h1>
        </div>

        <form className="space-y-6">
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
            className="w-32 mx-auto block px-4 py-2 bg-transparent hover:bg-teal-400/10 text-teal-400 border-2 border-teal-400 rounded-md shadow-[0_0_15px_rgba(79,209,197,0.2)] hover:shadow-[0_0_20px_rgba(79,209,197,0.4)] transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
