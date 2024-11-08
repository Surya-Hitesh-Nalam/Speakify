import React from 'react';
import {Heading2} from './Heading2';

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center px-8 relative w-full overflow-hidden pt-10 mt-40">
      <div className="text-center mb-4 flex flex-col items-center w-full justify-center">
        <Heading2
          mainTitle={'Testimonials'}
          title={''}
          desc={
            'Create natural sounding Text to Speech (TTS) using our latest neural AI Voice generator. Boost your Videos and Content.'
          }
        />
      </div>
      <div className="relative flex flex-col items-center pb-10">
        <blockquote className="max-w-4xl mx-auto text-sm md:text-2xl text-center !leading-9 text-slate-700 mb-8">
          <h2 className="text-lg text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-700">
            The ML-enabled Logistics Solution of Bizmetric delivered out of the
            box results. The sales touched the top figure brackets with an
            extraordinary improvement in productivity.
          </h2>
        </blockquote>
        <h4 className="max-w-4xl mx-auto text-xs md:text-lg text-center !leading-9 font-medium">
          Arif Maredia
        </h4>
        <span className="max-w-4xl mx-auto md:text-base text-center text-md font-medium text-[#9ca3af]">
          Supply Chain & Strategic Sourcing{' '}
        </span>
      </div>
    </div>
  );
};

export default Testimonials;