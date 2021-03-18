import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import '../styles/global.css';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Announcement from '../components/announcement';
import NavBar from '../components/navBar';
import ForensicContent from '../components/forensicContent';

export default function Forensics({ data }) {
  const { frontmatter } = data.markdownRemark;
  return (
    <React.Fragment>
      <SEO title="home" />
        <Layout>
          <Announcement announcement={frontmatter.announcement} />
          <NavBar />
          <ForensicContent props={frontmatter.content} />
        </Layout>
    </React.Fragment>
  );
}

Forensics.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "forensics" } }) {
      frontmatter {
        announcement
        content {
          section1 {
            title
            body
          }
          section2 {
            title
            body
          }
          section3 {
            title
            body
          }
        }
      }
    }
  }
`;
