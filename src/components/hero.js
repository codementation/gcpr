import React from 'react';
import PropTypes from 'prop-types';

export default function Hero ({
    image,
    banner_heading,
    banner_subtext,
    hero_pitch_heading,
    hero_pitch_subtext,
}) {
  return(
    <>
        <div className="relative flex flex-col w-full 2xl:h-152 xl:h-152 lg:h-142 md:h-132 sm:h-96 xs:h-80 xxs:h-72 place-content-center">
            <div
                className="absolute z-0 flex-1 w-full h-full bg-no-repeat bg-cover"
                role="img"
                aria-label={`${image.description}`}
                style={{
                    backgroundImage: `url(${
                        image.image.childImageSharp
                            ? image.image.childImageSharp.fluid.src
                            : image.image
                    })`,
                }}
            />
            <div className="z-10 2xl:mx-72 xl:mx-60 lg:mx-52 md:mx-40 sm:mx-20 xs:mx-10 xxs:mx-5 2xl:my-16 xl:my-14 lg:my-12 md:my-10 sm-my-8 xs:my-4 xxs:my-2">
                <p className="font-normal leading-relaxed text-center 2xl:text-8xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl xxs:text-3xl">
                    {banner_heading}
                </p>
            </div>
            <div className="z-10">
                <div>
                    <p className="font-normal leading-relaxed text-center 2xl:mx-96 xl:mx-80 lg:mx-72 md:mx-40 sm:mx-20 xs:mx-10 xxs:mx-5 2xl:my-7 xl:my-6 lg:my-5 md:my-4 sm-my-3 xs:my-2 xxs:my-1 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg">
                        {banner_subtext}
                    </p>
                </div>
            </div>
        </div>
        <div className="relative flex flex-col place-content-center 2xl:h-142 xl:h-132 lg:h-96 md:h-80 sm:h-75 xs:h-50 xxs:h-40">
            <div className="absolute z-0 flex-1 w-full h-full bg-cover bg-gradient-to-b from-gray-200" />
            <div className="z-10 2xl:mx-72 xl:mx-60 lg:mx-52 md:mx-40 sm:mx-20 xs:mx-10 xxs:mx-5 2xl:my-16 xl:my-14 lg:my-12 md:my-10 sm-my-8 xs:my-4 xxs:my-2">
                <p className="font-medium leading-relaxed text-center 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl xxs:text-xl">
                    {hero_pitch_heading}
                </p>
            </div>
            <div className="z-10 2xl:mx-72 xl:mx-60 lg:mx-52 md:mx-40 sm:mx-20 xs:mx-10 xxs:mx-5 2xl:mt-7 xl:mt-6 lg:mt-5 md:mt-4 sm-mt-3 xs:mt-2 xxs:mt-1">
                <p className="font-normal leading-relaxed text-center 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl xxs:text-lg">
                    {hero_pitch_subtext}
                </p>
            </div>
        </div>
    </>
)}

Hero.propTypes = {
    image: PropTypes.object,
    banner_heading: PropTypes.string,
    banner_subtext: PropTypes.string,
    hero_pitch_heading: PropTypes.string,
    hero_pitch_subtext: PropTypes.string,
};
