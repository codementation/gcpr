import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
//import Layout from '../components/layout';
//import SEO from '../components/seo';
//import Announcement from '../components/announcement';
//import NavBar from '../components/navBar';
//import SwiperTemplate from '../components/swiper';
//import GooglePlaceReviews from '../components/googlePlaceReviews';
//import GoogleOpeningHours from '../components/googleOpeningHours';
//import { ContactCardTemplate } from '../components/contactCard';
//import ServiceCardsTemplate from '../components/serviceCards';


export default function HomePage({ data }) {
    console.log(data)
    //const { frontmatter } = data.markdownRemark;
    //const { googlePlacesPlace } = data;
    return (
        <>
        </>
    );
};

HomePage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
        googlePlacesPlace: PropTypes.shape({
            reviews: PropTypes.object,
            opening_hours: PropTypes.object,
        }),
    }),
};


export const pageQuery = graphql`
    query {
        markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
            frontmatter {
                hero_image {
                    description
                    image {
                        childImageSharp {
                            fluid(maxWidth: 2048, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                service_cards {
                    card1 {
                        heading
                        subtext
                        image {
                            description
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 512, quality: 100) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                    card2 {
                        heading
                        subtext
                        image {
                            description
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 512, quality: 100) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                    card3 {
                        heading
                        subtext
                        image {
                            description
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 512, quality: 100) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                    card4 {
                        heading
                        subtext
                        image {
                            description
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 512, quality: 100) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
                slider_images {
                    slider_image1 {
                        description
                        image {
                            childImageSharp {
                                fluid(maxWidth: 512, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    slider_image2 {
                        description
                        image {
                            childImageSharp {
                                fluid(maxWidth: 512, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    slider_image3 {
                        description
                        image {
                            childImageSharp {
                                fluid(maxWidth: 512, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    slider_image4 {
                        description
                        image {
                            childImageSharp {
                                fluid(maxWidth: 512, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    slider_image5 {
                        description
                        image {
                            childImageSharp {
                                fluid(maxWidth: 512, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    slider_image6 {
                        description
                        image {
                            childImageSharp {
                                fluid(maxWidth: 512, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    slider_image7 {
                        description
                        image {
                            childImageSharp {
                                fluid(maxWidth: 512, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    slider_image8 {
                        description
                        image {
                            childImageSharp {
                                fluid(maxWidth: 512, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }

                banner_heading
                banner_subtext
                hero_pitch_heading
                hero_pitch_subtext
                announcement
                contact_card {
                    heading
                    phone_number
                }
            }
        }
        googlePlacesPlace {
            name
            rating
            childrenGooglePlacesReview {
                author_name
                profile_photo_url
                rating
                text
                time
                relative_time_description
            }
            opening_hours {
                open_now
                weekday_text
            }
        }
    }
`;


            //<SEO title="home" />
            //<Layout>
            //    <Announcement announcement={frontmatter.announcement} />
            //    <NavBar />
            //</Layout>



               // <HomePageTemplate
               //     image={frontmatter.hero_image}
               //     banner_heading={frontmatter.banner_heading}
               //     banner_subtext={frontmatter.banner_subtext}
               //     hero_pitch_heading={frontmatter.hero_pitch_heading}
               //     hero_pitch_subtext={frontmatter.hero_pitch_subtext}
               // />
               // <div className="flex flex-row flex-wrap mt-5 place-content-center">
               //     <div className="mx-3 md:w-1/3">
               //         <GoogleOpeningHours
               //             hours={googlePlacesPlace.opening_hours}
               //         />
               //     </div>
               //     <div className="mx-3 xxs:mt-10 sm:mt-0 md:w-1/3 place-content-center">
               //         <ContactCardTemplate props={frontmatter.contact_card} />
               //     </div>
               // </div>
               // <GooglePlaceReviews googleReviewData={googlePlacesPlace} />
               // <div className="flex flex-col self-center md:w-9/12">
               //     <ServiceCardsTemplate props={frontmatter.service_cards} />
               // </div>
               // <SwiperTemplate slider_images={frontmatter.slider_images} />
