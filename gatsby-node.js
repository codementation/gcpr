const path = require('path');
const  fs = require('fs');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    return graphql(`
        {
            allMarkdownRemark(limit: 1000) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            templateKey
                        }
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            result.errors.forEach((e) => console.error(e.toString()));
            return new Promise.reject(result.errors);
        }
        result.data.allMarkdownRemark.edges.forEach((edge) => {
            createPage({
                path: edge.node.fields.slug,
                component: path.resolve(
                    `src/templates/${String(
                        edge.node.frontmatter.templateKey,
                    )}.js`,
                ),
                // additional data can be passed via context
                context: {
                  id: edge.node.id,
                },
            });
        });
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};

module.exports.onPreInit = () => {
  const carouselSrcFile =
    'node_modules/@brainhubeu/react-carousel/lib/react-carousel.js';

  if (!fs.existsSync(carouselSrcFile)) return;

  fs.writeFileSync(
    carouselSrcFile,
    fs
      .readFileSync(carouselSrcFile, 'utf8')
      .replace('(window,', `(typeof window==='undefined'?{}:window,`)
  );
};
