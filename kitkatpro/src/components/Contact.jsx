import React, { useState } from "react";
import Orb from "./Orb"; 
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_x256ti8",   
        "template_x9gih5y",  
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "jkritika@275gmail.com",
        },
        "l8exylisCxiO7jTJN"    
      )
      .then(
        () => {
          setLoading(false);
          setStatus("✅ Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          setStatus("❌ Failed to send message. Try again later.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <>
      <div className="flex justify-between items-start p-6  min-h-screen bg-gradient-to-br from-black to-slate-800">
        <div className="w-1/2 ">
          <div className="min-h-screen  flex items-center justify-center px-4 py-12">
            <div className="bg-slate-600/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-xl border border-white/10">
              <h2 className="text-xl font-sans text-white mb-6 ">GET IN TOUCH</h2>
              <h3 className="text-6xl font-extrabold text-slate-400 mb-2">Contact</h3>
              <br />
              <br />
              <form onSubmit={handleSubmit} className="space-y-6 text-white">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 bg-transparent border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-white/70"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 bg-transparent border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-white/70"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium">Your Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 bg-transparent border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-white/70"
                    placeholder="Tell us what you want to say..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-cyan-500 text-white px-6 py-2 rounded-xl hover:bg-cyan-600 transition disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>

              {status && <p className="text-center mt-4">{status}</p>}
            </div>
          </div>
        </div>

        <div className="w-1/2 py-20">
          <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <Orb
              hoverIntensity={1.75}
              rotateOnHover={true}
              hue={20}
              forceHoverState={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
