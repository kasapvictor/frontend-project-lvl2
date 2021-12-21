import parse from './utils/parse.js';
import tree from './process/tree.js';
import formatData from './formatter/index.js';

export default (path1, path2, format = 'stylish') => {
  const file1 = parse(path1);
  const file2 = parse(path2);
  const unforemattedData = tree(file1, file2);
  const formattedData = formatData(format, unforemattedData);

  return formattedData;
};
