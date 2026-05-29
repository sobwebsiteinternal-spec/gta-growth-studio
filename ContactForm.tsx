"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="form-row">
        <label>
          Name
          <input name="name" type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="you@company.com" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Phone
          <input name="phone" type="tel" placeholder="+1 416 555 0190" />
        </label>
        <label>
          Business name
          <input name="business" type="text" placeholder="Company name" />
        </label>
      </div>
      <label>
        Current website
        <input name="website" type="url" placeholder="https://example.com" />
      </label>
      <div className="form-row">
        <label>
          Service interest
          <select name="service" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            <option>Website design</option>
            <option>Website development</option>
            <option>Local SEO</option>
            <option>Monthly management</option>
            <option>Analytics setup</option>
            <option>AI chatbot</option>
          </select>
        </label>
        <label>
          Budget / timeline
          <input name="budget" type="text" placeholder="$3k-$8k, launch in 8 weeks" />
        </label>
      </div>
      <label>
        Business inquiry
        <textarea
          name="message"
          rows={6}
          placeholder="Tell us what you want the website or marketing system to accomplish."
        />
      </label>
      <button className="button button-primary" type="submit">
        Send inquiry
      </button>
      {submitted ? (
        <p className="form-success">
          Inquiry noted. Connect a form backend or calendar tool when you are
          ready to receive live submissions.
        </p>
      ) : null}
    </form>
  );
}
