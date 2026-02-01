import React from 'react';
import { Milestone, Memory } from './types';

export const INITIAL_MILESTONES: Milestone[] = [
  {
    id: '0',
    date: 'October 5, 2025',
    title: 'The Prologue',
    description:
      'Somehow you were next to me at Knockout 2025 dancing. I talked to you and asked if l can see your eyes. You said why. I said because l wanted to see if you were ugly or not. Then you became my ravebae.',
    icon: '🕺🏻',
  },
  {
    id: '5',
    date: 'January 25 2025',
    title: 'Asylum Seeker Refugee',
    description: 'The day you sneaked me into your house after HTID.',
    icon: '🥳',
  },
  {
    id: '1',
    date: 'February 2, 2025',
    title: 'The Beginning',
    description:
      'The day we were at Centennial Park bike riding. We became official in the car ride back home.',
    icon: '✨',
  },
  {
    id: '2',
    date: 'February 14, 2025',
    title: "First Valentine's Day",
    description:
      'Celebrating love just a few weeks in, but it already felt like we had known each other forever. lol',
    icon: '💝',
  },
  {
    id: '3',
    date: 'February 2, 2026',
    title: 'Our First Anniversary',
    description: 'Looking back at how far we have come in such a short time.',
    icon: '🌹',
  },
];

export const INITIAL_MEMORIES: Memory[] = [
  {
    id: 'm1',
    url: './components/pictures/IMG_8486.JPG',
    caption: 'First Rave KO2025',
  },
  {
    id: 'm2',
    url: './components/pictures/IMG_8606.JPG',
    caption: 'Kids Go Dating',
  },
  {
    id: 'm3',
    url: './components/pictures/IMG_9153.JPG',
    caption: 'Bumped Into Each Other Randomly At Sanct',
  },
  {
    id: 'm6',
    url: './components/pictures/IMG_2594.JPG',
    caption: 'Mog',
  },
  {
    id: 'm4',
    url: './components/pictures/IMG_3756.JPG',
    caption: 'Salena Goes WAO Halloween',
  },
  {
    id: 'm5',
    url: './components/pictures/IMG_4962.JPG',
    caption: 'HTID 2026',
  },
];
