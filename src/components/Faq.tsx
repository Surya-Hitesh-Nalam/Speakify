/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { Heading2 } from './Heading2';

const Faq = () => {
  return (
    <section className="w-full relative flex flex-col justify-center items-center mt-40">
      <div className="flex flex-col justify-center text-center items-center">
        <Heading2
          mainTitle={'FAQ'}
          title={'Any Questions? Look Here'}
          desc={
            'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.'
          }
        />{' '}
      </div>
      <div className="container mt-10">
        <div className="flex flex-col justify-center w-full items-center text-center">
          <AccordionItem
            header="This is a dummy question for testing?"
            text="We’re happy to hear that you’re interested in joining Bizmetric! To apply for a position, please visit our Careers page, where you’ll find all the relevant details. Typically, you will apply with your CV. We will thoroughly review your application and come back to you as soon as possible."
          />
          <AccordionItem
            header="This is a dummy question for testing?"
            text="We’re happy to hear that you’re interested in joining Bizmetric! To apply for a position, please visit our Careers page, where you’ll find all the relevant details. Typically, you will apply with your CV. We will thoroughly review your application and come back to you as soon as possible."
          />
          <AccordionItem
            header="This is a dummy question for testing?"
            text="We’re happy to hear that you’re interested in joining Bizmetric! To apply for a position, please visit our Careers page, where you’ll find all the relevant details. Typically, you will apply with your CV. We will thoroughly review your application and come back to you as soon as possible."
          />

          <AccordionItem
            header="This is a dummy question for testing?"
            text="We’re happy to hear that you’re interested in joining Bizmetric! To apply for a position, please visit our Careers page, where you’ll find all the relevant details. Typically, you will apply with your CV. We will thoroughly review your application and come back to you as soon as possible."
          />
          <AccordionItem
            header="This is a dummy question for testing?"
            text="We’re happy to hear that you’re interested in joining Bizmetric! To apply for a position, please visit our Careers page, where you’ll find all the relevant details. Typically, you will apply with your CV. We will thoroughly review your application and come back to you as soon as possible."
          />
          <AccordionItem
            header="This is a dummy question for testing?"
            text="We’re happy to hear that you’re interested in joining Bizmetric! To apply for a position, please visit our Careers page, where you’ll find all the relevant details. Typically, you will apply with your CV. We will thoroughly review your application and come back to you as soon as possible."
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;

const AccordionItem = ({ header, text }: {header:string;text:string}) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <div className="mb-5 w-[40rem] rounded-lg p-3 custom_background">
      <button
        className={`faq-btn flex w-full text-left items-center`}
        onClick={() => handleToggle()}
      >
        <div className="w-full">
          <h4 className="text-lg font-medium text-[#F4FFFA00] bg-clip-text bg-gradient-to-b from-white to-[#a0a0a0]">
            {header}
          </h4>
        </div>
        <div
          className={`transition-colors duration-700 mr-5 z-10 flex px-1 py-2 w-full max-w-[40px] items-center justify-center rounded-lg`}
        >
          <BiChevronDown
            className={`fill-gray-400 stroke-primary duration-200 ease-in-out ${
              active ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      <div
        className={`duration-200 ease-in-out ${active ? 'block' : 'hidden'}`}
      >
        <p className="py-3 text-left text-md leading-relaxed font-normal text-white">
          {text}
        </p>
      </div>
    </div>
  );
};