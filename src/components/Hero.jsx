import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowDown, GraduationCap } from 'lucide-react';

const Hero = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white via-[#f7f4ef] to-[#e7f2fb]">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-[#e7f2fb]/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-10 pb-24 sm:pt-16">
        {/* Simple Top Nav */}
        <nav className="mb-10 flex w-full items-center justify-between rounded-2xl bg-white/70 px-5 py-3 backdrop-blur">
          <div className="flex items-center gap-2 font-semibold text-slate-800">
            <GraduationCap className="h-5 w-5 text-sky-600" />
            <span>My Learning Journey</span>
          </div>
          <div className="hidden gap-6 text-slate-700 md:flex">
            <button onClick={() => handleScroll('journey')} className="transition-colors hover:text-sky-700">Journey</button>
            <button onClick={() => handleScroll('gallery')} className="transition-colors hover:text-sky-700">Gallery</button>
            <button onClick={() => handleScroll('contact')} className="transition-colors hover:text-sky-700">Contact</button>
          </div>
        </nav>

        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Growing through curiosity, dedication, and community
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            Hello! I’m a student with a love for learning and creating. This portfolio
            captures my path from early school days to university—moments that shaped my
            goals, values, and dreams.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => handleScroll('journey')}
              className="rounded-full bg-sky-600 px-6 py-3 text-white shadow-sm transition hover:bg-sky-700"
            >
              Explore My Journey
            </button>
            <button
              onClick={() => handleScroll('gallery')}
              className="rounded-full bg-white/80 px-6 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200 backdrop-blur transition hover:bg-white"
            >
              View Gallery
            </button>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <button onClick={() => handleScroll('journey')} className="group inline-flex items-center gap-2 text-slate-600">
              <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
              Scroll
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
