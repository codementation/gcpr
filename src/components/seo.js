import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { JsonLd } from './jsonLd';

function SEO({ description, lang, meta, keywords, title }) {
    const { site } = useStaticQuery(graphql`
        query DefaultSEOQuery {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `);

    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
            ]
                .concat(
                    keywords.length > 0
                        ? {
                              name: `keywords`,
                              content: keywords.join(`, `),
                          }
                        : [],
                )
                .concat(meta)}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
        >
            <JsonLd>
                {{
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    url: 'http://culfcoastphonerepair.com',
                    name: 'Gulf Coast Phone Repair',
                    contactPoint: {
                        '@type': 'Matthew Bankston',
                        telephone: '+1-251-458-7864',
                        contactType: 'Customer Service',
                    },
                }}
            </JsonLd>
        </Helmet>
    );
}

SEO.defaultProps = {
    lang: `en`,
    keywords: [
        'mobile',
        'phone',
        'tablet',
        'laptop',
        'cell',
        'cellular',
        'broke',
        'broken',
        'cracked',
        'damaged',
        'glass',
        'screen',
        'battery',
        'repair',
        'replace',
        'samsung',
        'microsoft',
        'lg',
        'huwei',
        'oneplus',
        'google',
        'pixel',
        's10',
        's20',
        'surface',
        'ipad',
        'iwatch',
    ],
    meta: [],
};

SEO.propTypes = {
    description: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    lang: PropTypes.string,
    meta: PropTypes.array,
    title: PropTypes.string.isRequired,
};

export default SEO;
