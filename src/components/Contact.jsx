import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Thanks for your message!");
  }

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Contact Me
        </h2>

        <p className="text-white/70 max-w-2xl text-sm sm:text-base">
          Feel free to reach out for collaborations, internships, or just to say hi.
        </p>

        <form
          action="https://formsubmit.co/anujyadav999688@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
          className="mt-8 bg-[#0d0d0d] p-6 sm:p-8 rounded-2xl shadow-xl border border-white/10 w-full"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm">Name</label>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full bg-black border border-white/20 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-[#6049ea]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm">Email</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full bg-black border border-white/20 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-[#6049ea]"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="text-sm">Message</label>
            <textarea
              required
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="mt-1 w-full bg-black border border-white/20 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-[#6049ea]"
              placeholder="Write your message..."
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-6 w-full sm:w-auto px-6 py-3 rounded-xl bg-[#6049ea] hover:bg-white hover:text-black transition duration-300 font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
