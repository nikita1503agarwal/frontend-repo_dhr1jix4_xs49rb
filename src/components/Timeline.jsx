import React from 'react';
import { Calendar, School, BookOpen, University } from 'lucide-react';

const timelineData = [
  {
    stage: 'Elementary School',
    years: '2009 – 2015',
    description:
      'Where curiosity began. I discovered a love for reading, art, and science fairs, and learned the joy of teamwork.',
    image:
      'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop',
  },
  {
    stage: 'Middle School',
    years: '2015 – 2018',
    description:
      'Explored technology clubs and community service. Built my first small projects and presented at school events.',
    image:
      'https://images.unsplash.com/photo-1588072432707-5dbf06f0d9f7?q=80&w=1600&auto=format&fit=crop',
  },
  {
    stage: 'High School',
    years: '2018 – 2022',
    description:
      'Focused on academics and leadership. Led group projects, joined competitions, and learned to manage time and goals.',
    image:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    stage: 'University',
    years: '2022 – Present',
    description:
      'Diving deeper into my field, collaborating with peers, and building real-world projects that make a difference.',
    image:
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1600&auto=format&fit=crop',
  },
];

const IconForStage = ({ stage }) => {
  if (stage.includes('Elementary')) return <School className="h-5 w-5" />;
  if (stage.includes('Middle')) return <BookOpen className="h-5 w-5" />;
  if (stage.includes('High')) return <Calendar className="h-5 w-5" />;
  return <University className="h-5 w-5" />;
};

const Timeline = () => {
  return (
    <section id="journey" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">My Journey</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          A timeline of moments that shaped my path—from first classrooms to university lecture halls.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-slate-200 sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-12">
          {timelineData.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-start gap-6 sm:flex-row ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
            >
              <div className="relative w-full sm:w-1/2">
                <img
                  src={item.image}
                  alt={item.stage}
                  className="h-64 w-full rounded-2xl object-cover shadow-md"
                  loading="lazy"
                />
              </div>

              <div className="relative w-full sm:w-1/2">
                <div className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <div className="mb-2 inline-flex items-center gap-2 text-sky-700">
                    <IconForStage stage={item.stage} />
                    <span className="text-sm font-medium uppercase tracking-wide">{item.stage}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.years}</h3>
                  <p className="mt-2 text-slate-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
