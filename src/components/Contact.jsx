"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  MapPin,
  Mail,
  MessageCircle,
  Loader2,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_hg2qebn",
        "template_9noowqa",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "0aZHR9VlzyKptXBMn"
      );

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold mb-6">
              Let's Connect
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-md">
              Have a project in mind or just want to say hi? Feel free to
              reach out. I'm always open to discussing new opportunities
              and creative ideas.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:bendarya58@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email Me</p>
                  <p className="text-xl font-bold group-hover:text-primary transition-colors">
                    bendarya58@gmail.com
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/201060394855"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="p-4 rounded-2xl bg-green-500/10 text-green-500">
                  <FaWhatsapp size={24} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <p className="text-xl font-bold group-hover:text-green-500 transition-colors">
                    +20 106 039 4855
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                  <MapPin size={24} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-xl font-bold">Cairo, Egypt</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold pl-1">
                  Name
                </label>

                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold pl-1">
                  Email
                </label>

                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold pl-1">
                Message
              </label>

              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                placeholder="How can I help you?"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={20} />
                </>
              )}
            </button>

            <a
              href="https://wa.me/201060394855"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-green-500 text-white font-bold hover:opacity-90 transition"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </a>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;