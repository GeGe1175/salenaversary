
import React from 'react';
import { Milestone } from '../types';

interface Props {
  milestones: Milestone[];
}

const Timeline: React.FC<Props> = ({ milestones }) => {
  return (
    <section id="story" className="py-20 px-6 bg-rose-50/50 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif-elegant text-rose-900 text-center mb-16">
          Our Journey Together
        </h2>
        
        <div className="relative border-l-2 border-rose-200 ml-4 md:ml-0 md:left-1/2 md:-translate-x-px">
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.id} 
              className={`mb-12 relative flex items-center w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-rose-500 border-4 border-rose-50 z-20" />
              
              {/* Content Card */}
              <div className={`w-full md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 pl-8' : 'md:pl-12 pl-8'
              }`}>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-rose-100 hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{milestone.icon}</span>
                    <span className="text-rose-400 font-semibold text-sm uppercase tracking-wider">
                      {milestone.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-rose-900 mb-2">{milestone.title}</h3>
                  <p className="text-rose-700 leading-relaxed">{milestone.description}</p>
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
