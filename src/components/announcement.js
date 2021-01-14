import React from 'react';
import PropTypes from 'prop-types';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Announcement({ announcement }) {
  return (
    <div className="flex flex-row flex-wrap w-full pt-2 pb-1 bg-gray-800 place-content-center">
      <div>
        <FontAwesomeIcon
          icon={faBullhorn}
          className="mt-1 text-xl text-white"
        />
      </div>
      <div>
        <p className="ml-6 text-center text-white xxs:text-md xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">
          {announcement}
        </p>
      </div>
    </div>
  );
}

Announcement.propTypes = {
  announcement: PropTypes.string,
};
