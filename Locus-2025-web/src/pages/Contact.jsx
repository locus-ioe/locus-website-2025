import React, { useState, useRef, useEffect } from 'react';

export default function Contact() {
  const [message, setMessage] = useState('');
  const textAreaRef = useRef(null);

  // Handle the input change
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // Adjust the height of the textarea as text is entered
  useEffect(() => {
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Reset height to auto
      textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
    }
  }, [message]);

  const submitHandler = (event) => {
    event.preventDefault();
    // Add your form submission logic here
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

        <form className="space-y-6" onSubmit={submitHandler}>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-white text-sm font-medium">
              NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 bg-transparent border border-primary focus:border-teal-400 text-white rounded-md outline-none shadow-[0_0_10px_rgba(79,209,197,0.1)] focus:shadow-[0_0_15px_rgba(79,209,197,0.2)]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-white text-sm font-medium">
                EMAIL
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full px-3 py-2 bg-transparent border border-primary focus:border-teal-400 text-white rounded-md outline-none shadow-[0_0_10px_rgba(79,209,197,0.1)] focus:shadow-[0_0_15px_rgba(79,209,197,0.2)]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-white text-sm font-medium">
                PHONE NUMBER
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 bg-transparent border border-primary focus:border-teal-400 text-white rounded-md outline-none shadow-[0_0_10px_rgba(79,209,197,0.1)] focus:shadow-[0_0_15px_rgba(79,209,197,0.2)]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="purpose" className="block text-white text-sm font-medium">
              PURPOSE
            </label>
            <input
              type="text"
              id="purpose"
              name="purpose"
              className="w-full px-3 py-2 bg-transparent border border-primary focus:border-teal-400 text-white rounded-md outline-none shadow-[0_0_10px_rgba(79,209,197,0.1)] focus:shadow-[0_0_15px_rgba(79,209,197,0.2)]"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-white text-sm font-medium">
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              ref={textAreaRef}
              rows="2" // Only set one row initially
              className="w-full px-3 py-2 bg-transparent border border-primary focus:border-teal-400 text-white rounded-md outline-none shadow-[0_0_10px_rgba(79,209,197,0.1)] focus:shadow-[0_0_15px_rgba(79,209,197,0.2)] resize-none" // Remove resizing using the UI
            />
          </div>

          <button 
            type="submit"
            className="w-32 mx-auto block px-4 py-2 bg-transparent hover:bg-teal-400/10 text-teal-400 border-2 border-teal-400 rounded-md shadow-[0_0_15px_rgba(79,209,197,0.2)] hover:shadow-[0_0_20px_rgba(79,209,197,0.4)] transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
