import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="bg-gradient-to-b from-[#e7f2fb] to-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-white/70 p-8 backdrop-blur ring-1 ring-slate-200">
          <h3 className="text-2xl font-semibold text-slate-900">Let’s connect</h3>
          <p className="mt-2 max-w-2xl text-slate-600">
            I’d love to hear from you—whether it’s about projects, opportunities, or simply sharing ideas.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#f7f4ef] px-4 py-2 text-slate-800 ring-1 ring-slate-200 transition hover:bg-white"
            >
              <Instagram className="h-5 w-5 text-pink-600" /> Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#f7f4ef] px-4 py-2 text-slate-800 ring-1 ring-slate-200 transition hover:bg-white"
            >
              <Linkedin className="h-5 w-5 text-sky-700" /> LinkedIn
            </a>
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-[#f7f4ef] px-4 py-2 text-slate-800 ring-1 ring-slate-200 transition hover:bg-white"
            >
              <Mail className="h-5 w-5 text-amber-600" /> Email
            </a>
          </div>

          <p className="mt-8 text-sm text-slate-500">© {new Date().getFullYear()} My Learning Journey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
