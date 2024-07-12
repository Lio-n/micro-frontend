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
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'monkey_dashboard',
          filename: 'remoteEntry.js',
          exposes: {
            './App': './src/App.tsx',
          },
          shared: ['react', 'react-dom'],
        })
      );

      webpackConfig.output.publicPath = 'auto';

      return webpackConfig;
    },
  },
};
