import React, { useState } from 'react';

const photos = [
  {
    url: 'https://images.unsplash.com/photo-1510552776732-01acc9a4c4ed?q=80&w=1600&auto=format&fit=crop',
    title: 'Science Fair Win',
    description:
      'My first big achievement—our team built a simple robotics project and presented it to the school.',
  },
  {
    url: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3e3?q=80&w=1600&auto=format&fit=crop',
    title: 'Community Service Day',
    description:
      'Volunteering taught me empathy and responsibility. We organized a book drive and tutoring sessions.',
  },
  {
    url: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop',
    title: 'Graduation Milestone',
    description:
      'A moment of pride shared with friends and mentors who supported me every step of the way.',
  },
  {
    url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop',
    title: 'Campus Life',
    description:
      'Study sessions, new ideas, and late-night brainstorming—university life in full color.',
  },
];

const Gallery = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">Gallery</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Moments from school events, achievements, and everyday campus life.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p, idx) => (
          <button
            key={idx}
            onClick={() => setActive(p)}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
          >
            <img
              src={p.url}
              alt={p.title}
              className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-slate-600">{p.description}</p>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-slate-900/70 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={active.url} alt={active.title} className="max-h-[60vh] w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-slate-900">{active.title}</h3>
              <p className="mt-2 text-slate-700">{active.description}</p>
              <div className="mt-4 text-right">
                <button
                  onClick={() => setActive(null)}
                  className="rounded-full bg-sky-600 px-4 py-2 text-white hover:bg-sky-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
