import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [userContact, setUserContact] = useState({
    username: "",
    email: "",
    msg: "",
  });

  function handleContact(e) {
    setUserContact({ ...userContact, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { username, email, msg } = userContact;

    if (!username || !email || !msg) {
      return toast.error("All fields are mandatory");
    }

    try {
      await addDoc(collection(db, "contacts"), {
        username,
        email,
        msg,
        timestamp: new Date(),
      });
      toast.success("Message sent successfully!");
      setUserContact({ username: "", email: "", msg: "" });
    } catch (error) {
      console.error("Error adding contact: ", error);
      toast.error("Failed to send message");
    }
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <img
            src="/images/contact.jpg"
            alt="Contact Us"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Contact Info & Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Have questions or need assistance? Fill out the form below or reach
            us directly through our contact details.
          </p>

          <div className="mb-6">
            <p className="text-gray-700">
              <strong>Email:</strong> support@example.com
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> +1 (234) 567-890
            </p>
            <p className="text-gray-700">
              <strong>Address:</strong> 123 Spice Street, Flavor Town
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Your Name"
              value={userContact.username}
              onChange={handleContact}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={userContact.email}
              onChange={handleContact}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            />
            <textarea
              name="msg"
              placeholder="Your Message"
              rows="4"
              value={userContact.msg}
              onChange={handleContact}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
