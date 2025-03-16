module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    'react-day-picker/style.css': 'identity-obj-proxy',

    '\\.(gif|ttf|eot|svg)$': 'jest-transform-stub',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    "/node_modules/(?!date-fns|react-day-picker)"
  ],
};
