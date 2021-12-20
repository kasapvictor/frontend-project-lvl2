import parse from './utils/parsers.js';
import tree from './process/tree.js';
import stylish from './formatter/stylish.js';

export default (path1, path2) => {
  const file1 = parse(path1);
  const file2 = parse(path2);
  const unforemattedData = tree(file1, file2);
  const formattedDiffData = stylish(unforemattedData);

  return formattedDiffData;
};
