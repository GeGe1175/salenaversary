import React from 'react';
import { Milestone } from '../types';

interface Props {
  milestones: Milestone[];
}

const Timeline: React.FC<Props> = ({ milestones }) => {
  return (
    <section id='story' className='py-20 px-6 bg-rose-50/50 relative z-10'>
      <div className='max-w-6xl mx-auto relative'>
        <h2 className='text-4xl md:text-5xl font-serif-elegant text-rose-900 text-center mb-16'>
          Our Journey Together
        </h2>

        {/* The Vertical Line */}
        <div className='absolute left-8 md:left-1/2 top-32 bottom-0 w-0.5 bg-rose-200 -translate-x-1/2 z-0' />

        <div className='relative z-10'>
          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className={`mb-16 flex flex-col md:flex-row items-start md:items-center w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot - Pinned to the line */}
              <div className='absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-rose-500 border-4 border-white shadow-sm z-20' />

              {/* Content Card */}
              <div
                className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                }`}
              >
                <div className='bg-white p-6 rounded-2xl shadow-md border border-rose-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                  <div className='flex items-center gap-3 mb-3'>
                    <span className='text-3xl animate-pulse'>
                      {milestone.icon}
                    </span>
                    <span className='text-rose-400 font-bold text-xs uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full'>
                      {milestone.date}
                    </span>
                  </div>
                  <h3 className='text-xl font-bold text-rose-900 mb-2'>
                    {milestone.title}
                  </h3>
                  <p className='text-rose-700 leading-relaxed text-sm md:text-base'>
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Spacer for the other side on desktop */}
              <div className='hidden md:block md:w-1/2' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
