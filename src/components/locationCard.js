import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

export default function LocationCard({ props }) {
  return (
    <>
      <div className="flex flex-row my-2 flex-nowrap">
        <div className="mx-4 text-center xxs:text-base xs:text-lg w-min sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          <FontAwesomeIcon icon={faMapPin} className="mx-1 text-gray-700" />
        </div>
        <div className="mx-4 text-left text-white w-max xxs:mx-12 xxs:text-base xs:text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl">
          <p>{props.formatted_address}</p>
        </div>
      </div>
      <div className="flex flex-row my-2 w-min flex-nowrap">
        <div className="mx-4 text-center xxs:text-base xs:text-lg w-min sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          <FontAwesomeIcon icon={faPhoneAlt} className="text-gray-700" />
        </div>
        <div className="mx-2 text-left text-white w-max xxs:mx-12 xxs:text-base xs:text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          <p>{props.contact_card.phone_number}</p>
        </div>
      </div>
    </>
  );
}

LocationCard.propTypes = {
  props: PropTypes.object,
  contact_card: PropTypes.object,
  formatted_address: PropTypes.object,
  allGooglePlacesPlace: PropTypes.object,
};
