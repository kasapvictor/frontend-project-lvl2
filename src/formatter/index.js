import stylish from './stylish.js';
import plain from './plain.js';

export default (format, data) => {
  switch (format) {
    case 'plain':
      return plain(data);

    case 'stylish':
      return stylish(data);

    default:
      return new Error(`:: --format "${format}" is not exist! Thank you for your attention!`);
  }
};
