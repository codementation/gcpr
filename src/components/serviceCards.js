import React from 'react';
import PropTypes from 'prop-types';

const ServiceCardsTemplate = ({ props }) => {
  const cards = Object.values(props).map((card) => (
    <div
      key={card}
      className="relative flex flex-col p-2 mx-5 mt-16 text-center border-4 border-gray-400 md:w-5/12 xxs:w-2/3 space-y-8"
    >
      <div
        className="w-full h-40 bg-center bg-no-repeat bg-contain"
        role="img"
        aria-label={`${card.image.description}`}
        style={{
          backgroundImage: `url(${
            card.image.image.childImageSharp
              ? card.image.image.childImageSharp.fluid.src
              : card.image.image
          })`,
        }}
      />
      <div className="mx-2 font-semibold xxs:mx-12 xxs:text-md xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        <p>{card.heading}</p>
      </div>
      <div className="xxs:text-sm xs:text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
        <span>{card.subtext}</span>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-row flex-wrap self-center justify-center flex-grow">
      {cards}
    </div>
  );
};

ServiceCardsTemplate.propTypes = {
  props: PropTypes.object,
};

export default ServiceCardsTemplate;
