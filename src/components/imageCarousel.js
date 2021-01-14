import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image/withIEPolyfill'; // so objectFit works
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

export default function ImageCarousel ({ images }) {
    return (
        <div className="flex flex-row content-center justify-center w-full pt-40">
            <Carousel
                centered
                autoPlay={2000}
                animationSpeed={1000}
                infinite
                slidesPerScroll={1}
                slidesPerPage={3}
                arrowLeft={<FontAwesomeIcon icon={faAngleDoubleLeft} className="mr-10 text-gcpr_green 2xl:text-6xl xl:text-4xl lg:text-2xl md:text-xl sm:text-lg"/>}
                arrowRight={<FontAwesomeIcon icon={faAngleDoubleRight}  className="ml-10 text-gcpr_green 2xl:text-6xl xl:text-4xl lg:text-2xl md:text-xl sm:text-lg"/>}
                className="md:px-40 sm:px-0"
            >
                <Img
                    alt={`${images.slider_image1.description}`}
                    fluid={images.slider_image1.image.childImageSharp.fluid}
                    imgStyle={{ objectFit: 'contain' }}
                    style={{ width: '512px' }}
                />
                <Img
                    alt={`${images.slider_image2.description}`}
                    fluid={images.slider_image2.image.childImageSharp.fluid}
                    imgStyle={{ objectFit: 'contain' }}
                    style={{ width: '512px' }}
                />
                <Img
                    alt={`${images.slider_image3.description}`}
                    fluid={images.slider_image3.image.childImageSharp.fluid}
                    imgStyle={{ objectFit: 'contain' }}
                    style={{ width: '512px' }}
                />
                <Img
                    alt={`${images.slider_image4.description}`}
                    fluid={images.slider_image4.image.childImageSharp.fluid}
                    imgStyle={{ objectFit: 'contain' }}
                    style={{ width: '512px' }}
                />
                <Img
                    alt={`${images.slider_image5.description}`}
                    fluid={images.slider_image5.image.childImageSharp.fluid}
                    imgStyle={{ objectFit: 'contain' }}
                    style={{ width: '512px' }}
                />
                <Img
                    alt={`${images.slider_image6.description}`}
                    fluid={images.slider_image6.image.childImageSharp.fluid}
                    imgStyle={{ objectFit: 'contain' }}
                    style={{ width: '512px' }}
                />
                <Img
                    alt={`${images.slider_image7.description}`}
                    fluid={images.slider_image7.image.childImageSharp.fluid}
                    imgStyle={{ objectFit: 'contain' }}
                    style={{ width: '512px' }}
                />
                <Img
                    alt={`${images.slider_image8.description}`}
                    fluid={images.slider_image8.image.childImageSharp.fluid}
                    imgStyle={{ objectFit: 'contain' }}
                    style={{ width: '512px' }}
                />
            </Carousel>
        </div>
    );
};

ImageCarousel.propTypes = {
    images: PropTypes.shape({
        slider_image1: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
        ]),
        slider_image2: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
        ]),
        slider_image3: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
        ]),
        slider_image4: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
        ]),
        slider_image5: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
        ]),
        slider_image6: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
        ]),
        slider_image7: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
        ]),
        slider_image8: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
        ]),
    }),
};

