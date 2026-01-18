import React, { useState, useRef, useEffect } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
  });
  const [message, setMessage] = useState("");
  const textAreaRef = useRef(null);

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

  useEffect(() => {
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [message]);

  const handleMailtoClick = () => {
    const email = "locus@ioe.edu.np";
    const subject = `Contact Request: ${formData.purpose || "No Subject"}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPurpose: ${formData.purpose}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="text-[#48d0ff]">Contact</span>
            <span className="text-white"> Us</span>
          </h1>
          <div className="flex justify-center mt-6 sm:mt-8 mb-6">
            <div className="h-1 bg-gradient-to-r from-transparent via-[#48d0ff] to-transparent w-3/4 sm:w-1/2 rounded-full" />
          </div>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <a
              href="mailto:locus@ioe.edu.np"
              className="group block p-6 bg-gradient-to-b from-gray-900/90 to-gray-800/90 border-2 border-gray-700/50 hover:border-[#48d0ff] rounded-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(72,208,255,0.4)] hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#48d0ff]/10 rounded-lg group-hover:bg-[#48d0ff]/20 transition-colors flex-shrink-0">
                  <FiMail className="text-[#48d0ff] text-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">Email Us</p>
                  <p className="text-white font-semibold group-hover:text-[#48d0ff] transition-colors break-all">locus@ioe.edu.np</p>
                </div>
              </div>
            </a>

            <a
              href="tel:+9779805261687"
              className="group block p-6 bg-gradient-to-b from-gray-900/90 to-gray-800/90 border-2 border-gray-700/50 hover:border-[#48d0ff] rounded-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(72,208,255,0.4)] hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#48d0ff]/10 rounded-lg group-hover:bg-[#48d0ff]/20 transition-colors flex-shrink-0">
                  <FiPhone className="text-[#48d0ff] text-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">Call Us</p>
                  <p className="text-white font-semibold group-hover:text-[#48d0ff] transition-colors">+977 9805261687</p>
                </div>
              </div>
            </a>

            <div className="group block p-6 bg-gradient-to-b from-gray-900/90 to-gray-800/90 border-2 border-gray-700/50 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#48d0ff]/10 rounded-lg flex-shrink-0">
                  <FiMapPin className="text-[#48d0ff] text-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">Visit Us</p>
                  <p className="text-white font-semibold">IOE Pulchowk Campus, Lalitpur, Nepal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-6 sm:p-8 bg-gradient-to-b from-gray-900/90 to-gray-800/90 border-2 border-gray-700/50 rounded-xl">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-900/50 border-2 border-gray-700/50 focus:border-[#48d0ff] text-white rounded-lg outline-none transition-all duration-300 placeholder-gray-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-gray-900/50 border-2 border-gray-700/50 focus:border-[#48d0ff] text-white rounded-lg outline-none transition-all duration-300 placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+977 9800000000"
                      className="w-full px-4 py-3 bg-gray-900/50 border-2 border-gray-700/50 focus:border-[#48d0ff] text-white rounded-lg outline-none transition-all duration-300 placeholder-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="purpose" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    placeholder="What is this regarding?"
                    className="w-full px-4 py-3 bg-gray-900/50 border-2 border-gray-700/50 focus:border-[#48d0ff] text-white rounded-lg outline-none transition-all duration-300 placeholder-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleMessageChange}
                    ref={textAreaRef}
                    rows="4"
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 bg-gray-900/50 border-2 border-gray-700/50 focus:border-[#48d0ff] text-white rounded-lg outline-none transition-all duration-300 placeholder-gray-500 resize-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleMailtoClick}
                  className="w-full sm:w-auto px-8 py-3 bg-[#48d0ff] hover:bg-[#48d0ff]/90 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(72,208,255,0.5)] hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <FiSend className="text-lg" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
