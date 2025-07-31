"use client";
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'

const content = [
  {
    title: "Expert Instructors",
    description:
      "Learn from professional musicians and certified instructors with years of teaching and performance experience. They tailor lessons to fit each student's goals and style.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--violet-500),var(--fuchsia-500))] text-white">
        Expert Instructors
      </div>
    ),
  },
  {
    title: "Personalized Curriculum",
    description:
      "Whether you're a beginner or an advanced student, our flexible curriculum adapts to your learning pace and preferred genres – classical, pop, jazz, and more.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--sky-500))] text-white">
        Personalized Curriculum
      </div>
    ),
  },
  {
    title: "Performance Opportunities",
    description:
      "Participate in recitals, concerts, and competitions to build confidence and stage experience. Showcase your talent in front of an audience throughout the year.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--amber-500),var(--rose-500))] text-white">
        Performance Opportunities
      </div>
    ),
  },
  {
    title: "Modern Facilities",
    description:
      "Our music school is equipped with state-of-the-art instruments, soundproof practice rooms, and digital learning tools to enhance your music education.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-500),var(--lime-500))] text-white">
        Modern Facilities
      </div>
    ),
  },
];


const WhyChoseUs = () => {
  return (
    <div className=''>

  
    <div className="w-full ">

      <StickyScroll content={content} />
    </div>
      </div>
  )
}

export default WhyChoseUs