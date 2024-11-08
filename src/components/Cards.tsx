import React from 'react';
import {Heading2} from './Heading2';
import PrimaryButton from './PrimaryButton';

export const Cards = () => {
  return (
    <section className="w-full relative mt-40 justify-center flex flex-col items-center">
      <div className="flex w-full justify-center text-center items-center">
        <Heading2
                  mainTitle={'Use Cases'}
                  title={'AI Features & Use Cases'} desc={''}        />{' '}
      </div>
      <div className="container h-fit text-white p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-2 custom_background">
            <h3 className="text-2xl font-bold mb-2 text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-700">
              Video dubbing
            </h3>
            <p className="text-md text-[#9ca3af] mb-4">
              As an AI voice generator, Bizmetric can generate the voices of
              various characters, which are often used in video dubbing of
              Youtube and TikTok. For your convenience, Bizmetricprovides a
              variety of TikTok style voices for free use.
            </p>
          </div>
          <div className="custom_background">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-700">
                {' '}
                Audiobook reading{' '}
              </h3>
              <p className="text-md text-[#9ca3af] mb-4">
                Bizmetric can convert text into natural speech, and you can
                easily create and enjoy audiobooks, bringing stories to life
                through immersive narration.
              </p>
            </div>
          </div>
          <div className="custom_background">
            <h3 className="text-2xl font-bold mb-2 text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-700">
              {' '}
              Education & Training{' '}
            </h3>
            <p className="text-md text-[#9ca3af] mb-4">
              Bizmetric can convert text to sound and read it aloud, can help
              you learn the pronunciation of words, and supports multiple
              languages, it has now become a useful tool for language learners.
            </p>
          </div>
          <div className="custom_background">
            <h3 className="text-2xl font-bold mb-2 text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-700">
              {' '}
              Marketing & Advertising
            </h3>
            <p className="text-md text-[#9ca3af] mb-4">
              Bizmetric can convert text to sound and read it aloud, can help
              you learn the pronunciation of words, and supports multiple
              languages, it has now become a useful tool for language learners.
            </p>
          </div>
          <div className="h-full rounded-lg flex">
            <div className="px-12 py-12 shadow-md rounded-lg bg-[#f7f9fc] dark:bg-gradient-to-bl from-onyx-800 via-onyx-900 to-onyx-950 flex items-center justify-center w-full">
              <PrimaryButton title="Try it for Free!" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};