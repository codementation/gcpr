import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import '../styles/global.css';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Announcement from '../components/announcement';
import NavBar from '../components/navBar';
import LocationCard from '../components/locationCard';
import GoogleMaps from '../components/googleMap';
import DirectionsButton from '../images/vector/directions-button.svg';
import { View, Linking, Platform, TouchableOpacity } from 'react-native';

export default function Location({ data }) {
  console.log(data);
  const graphData = {};

  data.allMarkdownRemark.edges.forEach((edge) => {
    for (const [key, value] of Object.entries(edge.node.frontmatter)) {
      if (value !== null) {
        Object.assign(graphData, { [key]: value });
      }
    }
  });
  for (const [key, value] of Object.entries(
    data.allGooglePlacesPlace.nodes[0],
  )) {
    if (value !== null) {
      Object.assign(graphData, { [key]: value });
    }
  }

    function getDirections() {
        const lat = "30.30327457673613"
        const lng = "-87.68379330633275"
        const label = "Gulf Coast Phone Repair"
        let url = ''


        if (Platform.OS === 'android') {
          url = `google.navigation:q=${lat}+${lng}`;
        } else if (Platform.OS === 'ios') {
          url = `http://maps.apple.com/?q=${encodeURIComponent(label)}&sll=${lat},${lng}&z=14`;
        } else {
          url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${process.env.GATSBY_GOOGLE_PLACE_ID}`
        }
 
        Linking.openURL(url);
    }

  return (
    <>
      <SEO title="loction" />
      <Layout>
        <Announcement announcement={graphData.announcement} />
        <NavBar />
        <div className="mt-20" />
        <div className="flex flex-col self-center xxs:space-y-4 sm:space-y-8 xxs:w-full md:w-11/12 lg:w-10/12 2xl:w-8/12 xl:w-9/12 flex-nowrap">
          <div className="flex flex-col self-center justify-center h-52 xxs:w-full md:w-11/12 lg:w-10/12 2xl:w-6/12 xl:w-9/12 bg-gcpr_green">
            <LocationCard props={graphData} />
          </div>
          <View>
            <TouchableOpacity
              onPress={() => getDirections()}
              activeOpacity={0.4}
              className="self-center"
            >
              <DirectionsButton className="self-center 2xl:h-24 xl:h-20 lg:h-16 md:h-14 xs:h-12 xxs:h-12" />
            </TouchableOpacity>
          </View>
          <div
            className="bg-center bg-no-repeat bg-contain h-132"
            role="img"
            aria-label={`${graphData.location_image.description}`}
            style={{
              backgroundImage: `url(${
                graphData.location_image.image.childImageSharp
                  ? graphData.location_image.image.childImageSharp.fluid.src
                  : graphData.location_image.image
              })`,
            }}
          />
          <div className="relative self-center justify-center border-8 rounded-lg xxs:w-full md:w-11/12 lg:w-10/12 2xl:w-6/12 xl:w-9/12 h-132 border-gcpr_green">
            <GoogleMaps />
          </div>
          <div className="h-40 my-20" />
        </div>
      </Layout>
    </>
  );
}
Location.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      edges: PropTypes.array,
    }),
    allGooglePlacesPlace: PropTypes.shape({
      nodes: PropTypes.array,
      reviews: PropTypes.object,
      opening_hours: PropTypes.object,
    }),
  }),
};

export const query = graphql`
  {
    allGooglePlacesPlace {
      nodes {
        formatted_address
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            announcement
            contact_card {
              phone_number
            }
            location_image {
              description
              image {
                childImageSharp {
                  fluid(maxWidth: 768, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
