import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({rating, color}) => {
    return (
      <div className={`relative whitespace-nowrap text-${color}`} >
        <div>
          <FontAwesomeIcon icon={farStar} />
          <FontAwesomeIcon icon={farStar} />
          <FontAwesomeIcon icon={farStar} />
          <FontAwesomeIcon icon={farStar} />
          <FontAwesomeIcon icon={farStar} />
          <div
            className="absolute top-0 left-0 overflow-hidden text-yellow-400 whitespace-nowrap"
            style={{ width: `${(rating / 5) * 100}%` }}
          >
            <FontAwesomeIcon icon={fasStar} />
            <FontAwesomeIcon icon={fasStar} />
            <FontAwesomeIcon icon={fasStar} />
            <FontAwesomeIcon icon={fasStar} />
            <FontAwesomeIcon icon={fasStar} />
          </div>
        </div>
      </div>
    );
  };

StarRating.propTypes = {
   color: PropTypes.string,
   rating: PropTypes.number,
}

export default StarRating
