const CracoAlias = require('craco-alias');
const { ModuleFederationPlugin } = require('webpack').container;

console.log('Customizing Webpack');
module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.extend.json',
      },
    },
  ],
  devServer: {
    port: process.env.APP_PORT,
  },
  eslint: {
    enable: false,
  },
  webpack: {
    configure: (webpackConfig) => {
      // Add ModuleFederationPlugin configuration here
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'monkey_noodle',
          filename: 'remoteEntry.js',
          exposes: {
            './App': './src/App.tsx',
          },
          shared: {
            react: {
              singleton: true,
              eager: true,
              requiredVersion: false,
            },
            'react-dom': {
              singleton: true,
              eager: true,
              requiredVersion: false,
            },
          },
        })
      );

      // Ensure output.publicPath is set to 'auto'
      webpackConfig.output.publicPath = 'auto';

      return webpackConfig;
    },
  },
};
