import PropTypes from 'prop-types';
import React from 'react';

export default function Layout({children}) {
  return (
    <div className="relative flex flex-col w-full h-screen font-sans text-gray-900">
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
