"use client";

import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  // ฟังก์ชันจัดการการเปลี่ยนแปลงในฟอร์ม
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ฟังก์ชันสำหรับการส่งข้อมูล
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  
    try {
      const response = await fetch("http://localhost:3000/#home", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log("Form submitted successfully!");
      } else {
        const errorResponse = await response.json();
        console.error("Failed to submit form:", errorResponse);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <footer className="bg-orange-500 text-black py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
        {/* Contact Section */}
        <div className="w-full md:w-1/2 mb-8">
          <h2 className="text-3xl font-bold tracking-wider mb-4">CONTACT ME</h2>
          <p className="mb-4">WRITE OR CALL ME IF YOU HAVE MORE QUESTIONS</p>
          <p className="font-semibold">CHANTHAWAT.A@KU.TH</p>
          <p className="font-semibold mb-8">0842352924</p>
          <div className="flex space-x-4">
            <FaFacebook className="w-6 h-6 hover:text-gray-700 cursor-pointer" />
            <FaTwitter className="w-6 h-6 hover:text-gray-700 cursor-pointer" />
            <FaInstagram className="w-6 h-6 hover:text-gray-700 cursor-pointer" />
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <label className="block text-sm font-bold mb-2">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border border-black bg-transparent"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-bold mb-2">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border border-black bg-transparent"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-bold mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-black bg-transparent"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-bold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 border border-black bg-transparent"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-bold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-black bg-transparent"
                rows={4}
              ></textarea>
            </div>
            <div className="col-span-2">
              <button type="submit" className="bg-black text-white px-6 py-2 mt-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-16 text-center text-sm">
        <p>
          © 2024 BY TOYGALLAGHER. Powered and secured by <span className="underline cursor-pointer">OASIS</span>
        </p>
      </div>
    </footer>
  );
}