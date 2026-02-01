
import React from 'react';
import { Milestone, Memory } from './types';

export const INITIAL_MILESTONES: Milestone[] = [
  {
    id: '1',
    date: 'February 2, 2025',
    title: 'Our Beautiful Beginning',
    description: 'The day we officially started this amazing journey together. A date I will never forget.',
    icon: '✨'
  },
  {
    id: '2',
    date: 'February 14, 2025',
    title: 'First Valentine\'s Day',
    description: 'Celebrating love just a few weeks in, but it already felt like we had known each other forever.',
    icon: '💝'
  },
  {
    id: '3',
    date: 'Today',
    title: 'Our First Anniversary',
    description: 'Looking back at how far we have come in such a short time and looking forward to everything else.',
    icon: '🌹'
  }
];

export const INITIAL_MEMORIES: Memory[] = [
  { id: 'm1', url: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&q=80&w=800', caption: 'Parisian Dreams' },
  { id: 'm2', url: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800', caption: 'Sweet Moments' },
  { id: 'm3', url: 'https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=800', caption: 'Cozy Afternoons' },
  { id: 'm4', url: 'https://images.unsplash.com/photo-1516589174184-c6852657d803?auto=format&fit=crop&q=80&w=800', caption: 'Laughing Together' },
  { id: 'm5', url: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&q=80&w=800', caption: 'Golden Hour' },
  { id: 'm6', url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=800', caption: 'Forever Yours' },
];
