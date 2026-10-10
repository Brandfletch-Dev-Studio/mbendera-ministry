"use client";

import { useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Booking enquiry — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:hello@georgeenockmbendera.site?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full bg-cream border border-line rounded-lg px-4 py-3 text-[15px] text-ink focus:outline-none focus:border-crimson";

  return (
    <form onSubmit={submit} className="space-y-4">
      <input
        required
        className={field}
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        required
        type="email"
        className={field}
        placeholder="Email (required)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        required
        rows={5}
        className={field}
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="btn-solid w-full">
        Send
      </button>
      <p className="text-soft text-[13px] text-center italic">
        Thank you for your response. ✨
      </p>
    </form>
  );
}
