import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/layout';
import Announcement from '../../components/announcement';
import Hero from '../../components/hero';
import ContactCard from '../../components/contactCard';
import ServiceCards from '../../components/serviceCards';

const HomePagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <>
        <Layout>
         <Announcement announcement={data.announcement} />
         <Hero
           image={data.hero_image}
           banner_heading={data.banner_heading}
           banner_subtext={data.banner_subtext}
           hero_pitch_heading={data.hero_pitch_heading}
           hero_pitch_subtext={data.hero_pitch_subtext}
          />
          <div className="flex flex-row flex-wrap mt-5 place-content-center">
            <div className="mx-3 border-4 xxs:mt-10 sm:mt-0 border-gcpr_green place-content-center">
            <ContactCard props={data.contact_card} />
            </div>
            <div className="flex flex-col self-center md:w-9/12">
              <ServiceCards props={data.service_cards} />
            </div>
          </div>
        </Layout>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default HomePagePreview;
