import React from 'react';
import PropTypes from 'prop-types';

export function JsonLd({ children }) {
  return <script type="application/ld+json">{JSON.stringify(children)}</script>;
}

JsonLd.propTypes = {
  children: PropTypes.object,
};
