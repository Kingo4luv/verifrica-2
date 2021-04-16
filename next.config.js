const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withMDX = require("@zeit/next-mdx")()


module.exports = withPlugins(
    [withMDX({
        pageExtensions: ["js", "jsx", "mdx"],
    }), withImages],
);

