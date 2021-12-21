import stylish from './stylish.js';

export default (format, data) => {
  switch (format) {
    case 'stylish':
      return stylish(data);
    default:
      return new Error(`:: --format "${format}" is not exist! Thank you for your attention!`);
  }
};
