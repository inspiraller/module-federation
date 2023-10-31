module.exports = (api) => {
  const BABEL_ENV = api.env();
  const config = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: ['react-hot-loader/babel'],
    "env": {
      "production": {
        "presets": ["minify"]
      }
    }

  };

  if (BABEL_ENV === 'development') {
  }

  return config;
};
