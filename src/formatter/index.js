import json from './json.js';
import plain from './plain.js';
import stylish from './stylish.js';

export default (format, data) => {
  switch (format) {
    case 'json':
      return json(data);

    case 'plain':
      return plain(data);

    case 'stylish':
      return stylish(data);

    default:
      return new Error(`:: --format "${format}" is not exist! Thank you for your attention!`);
  }
};
