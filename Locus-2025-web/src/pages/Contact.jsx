import React, { useState, useRef, useEffect } from "react";
import { Mail, Phone } from "lucide-react";

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
    <div className="w-full px-4 sm:px-6">
      <div className="max-w-3xl mx-auto mb-8">
        <div className="border border-[#48d0ff]/30 px-6 sm:px-10 py-10 rounded-xl bg-black/40 backdrop-blur-sm">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold">
              <span className="text-[#48d0ff]">Contact</span>{" "}
              <span className="text-white">Us</span>
            </h1>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <a 
              href="mailto:locus@ioe.edu.np" 
              className="flex items-center gap-3 px-5 py-4 bg-[#48d0ff]/10 border border-[#48d0ff]/30 rounded-lg hover:bg-[#48d0ff]/20 transition-colors text-white no-underline"
            >
              <Mail className="text-[#48d0ff] w-5 h-5 flex-shrink-0" />
              <div className="text-left min-w-0">
                <p className="text-xs text-gray-400">Email Us</p>
                <p className="text-sm font-semibold truncate">locus@ioe.edu.np</p>
              </div>
            </a>

            <a 
              href="tel:+9779805261687" 
              className="flex items-center gap-3 px-5 py-4 bg-[#48d0ff]/10 border border-[#48d0ff]/30 rounded-lg hover:bg-[#48d0ff]/20 transition-colors text-white no-underline"
            >
              <Phone className="text-[#48d0ff] w-5 h-5 flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs text-gray-400">Call Us</p>
                <p className="text-sm font-semibold">+977 9805261687</p>
              </div>
            </a>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-black/30 border border-[#48d0ff]/30 focus:border-[#48d0ff] text-white rounded-lg outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/30 border border-[#48d0ff]/30 focus:border-[#48d0ff] text-white rounded-lg outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/30 border border-[#48d0ff]/30 focus:border-[#48d0ff] text-white rounded-lg outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="purpose" className="block text-white text-sm font-medium mb-2">
                PURPOSE
              </label>
              <input
                type="text"
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-black/30 border border-[#48d0ff]/30 focus:border-[#48d0ff] text-white rounded-lg outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleMessageChange}
                ref={textAreaRef}
                rows="5"
                className="w-full px-4 py-3 bg-black/30 border border-[#48d0ff]/30 focus:border-[#48d0ff] text-white rounded-lg outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="button"
              onClick={handleMailtoClick}
              className="w-full px-8 py-3 bg-[#48d0ff]/10 text-[#48d0ff] border border-[#48d0ff]/30 rounded-lg font-semibold text-lg hover:bg-[#48d0ff]/20 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Contact Information Below Form - Wider */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 bg-black/40 backdrop-blur-sm border border-[#48d0ff]/30 rounded-xl">
          <h3 className="text-xl font-semibold text-[#48d0ff] mb-4">Robo Events Inquiry</h3>
          <div className="text-white space-y-2">
            <p className="text-sm text-gray-400">Contact:</p>
            <p className="text-lg font-medium">Ghanshyam Bhandari</p>
            <a href="tel:+9779864413534" className="text-[#48d0ff] text-lg hover:underline inline-block">
              9864413534
            </a>
          </div>
        </div>

        <div className="p-8 bg-black/40 backdrop-blur-sm border border-[#48d0ff]/30 rounded-xl">
          <h3 className="text-xl font-semibold text-[#48d0ff] mb-4">Project Demonstration Inquiry</h3>
          <div className="text-white space-y-2">
            <p className="text-sm text-gray-400">Contact:</p>
            <p className="text-lg font-medium">Bishal Lamichhane</p>
            <a href="tel:+9779864511097" className="text-[#48d0ff] text-lg hover:underline inline-block">
              9864511097
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
