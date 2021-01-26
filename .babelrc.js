module.exports = {
  presets: ['next/babel', '@babel/preset-env'],
  plugins: [['styled-components', { ssr: true }]],
};
