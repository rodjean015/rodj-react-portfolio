// ContactSection.js
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_i7y2hnn', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent Successfully');
      }, (error) => {
          console.log(error.text);
          alert('Failed to Send Message');
      });

    e.target.reset(); // Reset form fields after submission
  };

  return (
    <section
      id="contact"
        className="min-h-screen py-10 flex flex-col justify-center items-center transition-colors duration-300 
                bg-gray-200 dark:animate-gradient dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-black"
      >
      <h2 className="text-3xl sm:text-4xl font-bold mb-5">Connect with me</h2>
      <form ref={form} onSubmit={sendEmail} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md w-full max-w-md space-y-4" data-aos="fade-right">
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="text-white bg-[#375e7e] hover:bg-gray-800 dark:hover:bg-[#375e7e] dark:bg-gray-800 py-2 px-4 rounded-md w-full hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-black transition-all duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Contact Details */}
      <div className="mt-10 text-center" data-aos="fade-right">
        <p className="text-lg font-semibold">Email: <a href="mailto:rodjean694@gmail.com" className="text-blue-500 hover:text-blue-600">rodjean694@gmail.com</a></p>
        <p className="text-lg font-semibold mt-4">Phone: <a href="tel:+639071950638" className="text-blue-500 hover:text-blue-600">+6390719506384</a></p>
      </div>
    </section>
  );
};

export default ContactSection;
