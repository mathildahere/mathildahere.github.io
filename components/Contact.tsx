'use client';

import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch('https://formspree.io/f/xvzwzwzp', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-10 text-sm">
          Have a project in mind or just want to say hi? Drop me a message!
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs text-gray-500 mb-2 tracking-widest uppercase">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Mathilda"
                className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-pink-accent transition-colors duration-200"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-2 tracking-widest uppercase">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="hello@example.com"
                className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-pink-accent transition-colors duration-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-2 tracking-widest uppercase">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project or just say hi!"
              className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-pink-accent transition-colors duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-accent to-purple-accent text-white rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-accent/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <FaPaperPlane className={status === 'sending' ? 'animate-bounce' : ''} />
            <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
          </button>

          {status === 'success' && (
            <p className="text-center text-sm text-green-400">
              Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-sm text-red-400">
              Something went wrong. Try emailing me directly at mathilda.here@gmail.com
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
