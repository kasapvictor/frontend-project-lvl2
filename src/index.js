import parse from './utils/parsers.js';
import tree from './process/tree.js';
import stylish from './formatter/stylish.js';

export default (path1, path2, format = 'stylish') => {
  const file1 = parse(path1);
  const file2 = parse(path2);
  const unforemattedData = tree(file1, file2);

  switch (format) {
    case 'stylish':
      return stylish(unforemattedData);
    default:
      return new Error(`:: --format "${format}" is not exist! Thank you for your attention!`);
  }
};
