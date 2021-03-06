const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withMDX = require("@zeit/next-mdx")()
const webpack = require("webpack");

module.exports = withPlugins(
    [withMDX({
        pageExtensions: ["js", "jsx", "mdx"],
    }), withImages], {
        webpack: (config) => {
            config.node = {
                fs: "empty",
            };
            config.module.rules.push({
                test: /\.(glb|gltf|bin)$/,
                use: {
                    loader: "file-loader",
                },
            });
            config.plugins.push(
                new webpack.ProvidePlugin({
                    $: "jquery",
                    jQuery: "jquery",
                    "window.jQuery": "jquery",
                }));
            return config;
        },
        images: {
            domains: ['res.cloudinary.com'],
        }
    }

);

