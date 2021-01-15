# Website for GCPR


## This site uses the following technologies:

- [Gatsby](https://www.gatsbyjs.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [NetlifyCMS](https://www.netlifycms.org/)
- [Google Places API](https://cloud.google.com/maps-platform/places/)
- [Google Maps API](https://cloud.google.com/maps-platform/)

## Deployment pipeline

We use a Git-based workflow that auto builds on updates to the *Master* branch

The site is hosted on [Netlify's](https://www.netlify.com/) CDN

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)

## Project Layout
```
src/
├── cms
│   ├── cms.js
│   └── preview-templates
│       └── HomePagePreview.js
├── components
│   ├── announcement.js
│   ├── contactCard.js
│   ├── googleMap.js
│   ├── googleOpeningHours.js
│   ├── googlePlaceReviews.js
│   ├── jsonLd.js
│   ├── layout.js
│   ├── locationCard.js
│   ├── navBar.js
│   ├── seo.js
│   ├── serviceCards.js
│   ├── starRating.js
│   └── swiper.js
├── favicon.png
├── images
│   ├── abduction-illustration.svg
│   ├── cat-and-human-illustration.svg
│   ├── dog-illustration.svg
│   ├── GCPR-768x381.jpg
│   ├── GCPR.jpg
│   ├── tailwind-icon.png
│   └── vector
│       ├── facebookLogo.svg
│       └── googleLogo.svg
├── pages
│   ├── 404.js
│   ├── index.md
│   └── location.md
├── styles
│   └── global.css
└── templates
    ├── home-page.js
    └── location.js
```
