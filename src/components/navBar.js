import { Link } from 'gatsby';
import React, { useState } from 'react';
import logo from '../images/raster/GCPR-768x381.jpg';

export default function NavBar() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header>
      <div className="flex flex-row flex-wrap items-center justify-between p-4 mx-auto 2xl:max-w-6xl xl:max-w-5xl lg:max-w-4xl md:max-w-3xl">
          <Link to="/">
            <img
              src={logo}
              alt="Gulf Coast Phone Repair"
              className="2xl:h-24 xl:h-22 lg:h-20 md:h-16 sm:h-14 xs:h-12 xxs:h-16"
            ></img>
          </Link>
          <button
            className="items-center block px-3 py-2 focus:outline-none md:hidden"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="w-8 h-8 fill-current text-gcpr_green"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          <nav
            className={`${
              isExpanded ? `block` : `hidden`
            } md:block md:items-center w-full md:w-auto font-medium 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl xxs:text-lg `}
          >
            <ul className="list-none">
              {[
                {
                  route: `/`,
                  title: `Home`,
                },
                {
                  route: `/location`,
                  title: `Location`,
                },
              ].map((link) => (
                <li key={link.title} className="inline-block px-2 align-middle">
                  <Link
                    className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-6 focus:text-gcpr_green hover:text-gcpr_green before:empty-content before:h-2 before:bg-gcpr_green before:block before:-bottom-40 before:relative before:scaleX-0 hover_before:scaleX-1"
                    to={link.route}
                    activeClassName="text-gcpr_green"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
      </div>
    </header>
  );
}
