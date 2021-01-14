import React from 'react';
import PropTypes from 'prop-types';

export default function GoogleOpeningHours ({ hours }) {
  // Google's GraphQL returns an array of Strings
  // This splits those into an Object map
  const officeHours = [];

  hours.weekday_text.forEach((weekdayText) => {
    let [day, hrs] = weekdayText.split(': ');
    officeHours.push({ day: day, hours: hrs });
  });

  const allDays = officeHours.map((dow) => (
    <div
      key={dow}
      className="my-1 xxs:text-xs xs:text-sm sm:text-md md:text-md lg:text-xl xl:text-2xl 2xl:text-3xl"
    >
      <span className="px-2 font-medium bg-gray-200">{dow.day}</span>
    </div>
  ));

  const allHours = officeHours.map((sched) => (
    <div
      key={sched}
      className="my-1 xxs:text-xs xs:text-sm sm:text-md md:text-md lg:text-xl xl:text-2xl 2xl:text-3xl"
    >
      <span id={sched.day} className="mx-2 font-medium text-gcpr_green">
        {sched.hours}
      </span>
    </div>
  ));

  return (
    <>
      <div className="flex flex-col self-center xxs:mx-2 xxs:w-full">
        <div className="flex flex-col self-center">
          <div className="mx-0 font-semibold text-center text-black xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl xxs:py-2">
            <span>Our Hours</span>
          </div>
          <div className="flex flex-row flex-nowrap">
            <div className="flex flex-col">{allDays}</div>
            <div className="flex flex-col">{allHours}</div>
          </div>
        </div>
        <div className="self-end w-full pt-3 font-medium text-center xxs:text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          <div className="py-3">Current Status:</div>
          {/* This will get updated client-side via seperate API call in gatsby-browser.js*/}
          <div
            id="open_now"
            className="font-extrabold 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl xxs:text-3xl"
          ></div>
        </div>
      </div>
    </>
  );
};

GoogleOpeningHours.propTypes = {
  hours: PropTypes.shape({
    weekday_text: PropTypes.array,
    open_now: PropTypes.bool,
  }),
};

