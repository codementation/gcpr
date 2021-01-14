import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import GoogleLogo from '../images/vector/googleLogo.svg';
import FacebookLogo from '../images/vector/facebookLogo.svg';
import StarRating from './starRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

export default function GooglePlaceReviews ({ googleReviewData }) {

  const googleReviews = googleReviewData.childrenGooglePlacesReview.map(
    (review) => {
      if (review.rating >= 4) {
        return (
          <div
            key={review}
            className="flex flex-col w-10/12 p-3 text-white place-items-center"
          >
            <div className="mx-20 my-2 2xl:text-3xl xl:text-2xl sm:text-xl">
              <StarRating rating={review.rating} color={'white'} />
            </div>
            <div>
              <p className="italic text-center text-white xl:text-xl lg:text-lg md:text-base sm:text-base">
                {review.relative_time_description}
              </p>
            </div>
            <div className="py-3 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-2xl xs:text-xl xxs:text-xl">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-white align-top opacity-50"
              />
              <span>{` ${review.text.substring(0, 450)} `}</span>
              <FontAwesomeIcon
                icon={faQuoteRight}
                className="text-white align-top opacity-50"
              />
            </div>
            <div className="flex sm:flex-row xxs:flex-col place-items-center xl:text-2xl">
              <div>
                <img
                  alt="Google Profile Photo"
                  className="xxs:h-7 xs:h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 2xl:h-13"
                  src={review.profile_photo_url}
                />
              </div>
              <div className="pt-2 xxs:px-2 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg xxs:text-lg">
                <p>{review.author_name}</p>
              </div>
            </div>
          </div>
        );
      } else {
        return <div />;
      }
    },
  );

  return (
    <>
      {/* Flex Container 1 */}
      <div className="flex flex-col flex-wrap content-center w-full mx-3 text-center xl:my-9 lg:my-8 sm:my-7 xxs:my-7">
        {/* Flex Item 1 */}
        <div className="px-1 font-medium 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl xxs:text-xl justify-self-center">
          <p>Check out what our customers think of us!</p>
        </div>
        {/* END Flex Container 1 */}
      </div>
      {/* Flex Container 2 */}
      <div className="flex flex-row flex-wrap content-center justify-center w-full 2xl:mb-10 xl:mb-8 lg:mb-6 md:mb-4 sm:mb-3 xs:mb-2">
        {/* Flex Container 2 Item 1 */}
        <div className="relative flex flex-col my-5 place-items-center">
          {/* This makes the whole div a clickable link! */}
          <a
            href="https://www.facebook.com/pg/gcprgs/reviews/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute z-10 w-full h-full no-underline bg-white border-black bg-opacity-0"
          />
          {/* Flex Container 2 Item 1 Row 1 */}
          <div className="mx-16 my-1">
            <FacebookLogo className="2xl:h-24 xl:h-20 lg:h-16 md:h-14 xs:h-12 xxs:h-12" />
          </div>
          {/* Flex Container 2 Item 1 Row 2 */}
          <div className="mx-16 my-1 xl:text-xl sm:text-lg">
            {/* Hard coding this until a later time */}
            {/* Facebook API reqires special approval */}
            <StarRating rating={5.0} color="black" />
          </div>
          {/* Flex Container 2 Item 1 Row 3 */}
          <div className="mx-16 my-1">
            <span className="font-semibold text-left xl:text-xl md:text-lg">
              5.0
            </span>
          </div>
          {/* END Flex Container 2 Item 1 */}
        </div>
        {/* Flex Container 2 Item 2 */}
        <div className="relative flex flex-col my-5 place-items-center">
          {/* This makes the whole div a clickable link! */}
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJFwDKmtAEmogRxE3otwrgohg"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute z-10 w-full h-full no-underline bg-white border-black bg-opacity-0"
          />
          {/* Flex Container 2 Item 2 Row 1 */}
          <div className="mx-16 my-1">
            <GoogleLogo className="2xl:h-24 xl:h-20 lg:h-16 md:h-14 xs:h-12 xxs:h-12" />
          </div>
          {/* Flex Container 2 Item 2 Row 2 */}
          <div className="my-1 xxs:mx-3 xl:text-xl sm:text-xl xs:text-lg xxs:text-base">
            <StarRating rating={googleReviewData.rating} color="black" />
          </div>
          {/* Flex Container 2 Item 2 Row 3 */}
          <div className="mx-16 my-1">
            <span className="font-semibold text-left xl:text-xl md:text-lg">
              {googleReviewData.rating}
            </span>
          </div>
          {/* END Flex Container 2 Item 2 */}
        </div>
        {/* END Flex Container 2 */}
      </div>
      {/* Flex Container 3 */}
      <div className="flex flex-row w-full h-auto place-content-center bg-gcpr_green">
        <Carousel
          centered
          autoPlay={13000}
          animationSpeed={100}
          infinite
          slidesPerScroll={1}
          slidesPerPage={1}
        >
          {googleReviews}
        </Carousel>
      </div>
    </>
  );
};

GooglePlaceReviews.propTypes = {
  googleReviewData: PropTypes.shape({
    childrenGooglePlacesReview: PropTypes.array,
    rating: PropTypes.number,
  }),
};

