import React from 'react';

export default function Contact() {
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
            <label htmlFor="semester" className="block text-white text-sm font-medium">
              SEMESTER
            </label>
            <input
              type="text"
              id="semester"
              name="semester"
              className="w-full px-3 py-2 bg-transparent border  border-primary focus:border-teal-400 text-white rounded-md outline-none shadow-[0_0_10px_rgba(79,209,197,0.1)] focus:shadow-[0_0_15px_rgba(79,209,197,0.2)]"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="department" className="block text-white text-sm font-medium">
              DEPARTMENT
            </label>
            <input
              type="text"
              id="department"
              name="department"
              className="w-full px-3 py-2 bg-transparent border  border-primary focus:border-teal-400 text-white rounded-md outline-none shadow-[0_0_10px_rgba(79,209,197,0.1)] focus:shadow-[0_0_15px_rgba(79,209,197,0.2)]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="college" className="block text-white text-sm font-medium">
            COLLEGE NAME
          </label>
          <input
            type="text"
            id="college"
            name="college"
            className="w-full px-3 py-2 bg-transparent border  border-primary focus:border-teal-400 text-white rounded-md outline-none shadow-[0_0_10px_rgba(79,209,197,0.1)] focus:shadow-[0_0_15px_rgba(79,209,197,0.2)]"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-white text-sm font-medium">
            PHONE NUMBER
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-3 py-2 bg-transparent border  border-primary focus:border-teal-400 text-white rounded-md outline-none shadow-[0_0_10px_rgba(79,209,197,0.1)] focus:shadow-[0_0_15px_rgba(79,209,197,0.2)]"
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
  )
}

