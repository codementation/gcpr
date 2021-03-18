import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/layout';
import Announcement from '../../components/announcement';
import ForensicContent from '../../components/forensicContent';
import '../../styles/global.css'

const ForensicsPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <>
        <Layout>
          <Announcement announcement={data.announcement} />
          <ForensicContent props={data.content} />
        </Layout>
      </>
    );
  }
};

ForensicsPreview.propTypes = {
  props: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getIn: PropTypes.func,
};

export default ForensicsPreview;
