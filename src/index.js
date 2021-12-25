import path from 'path';
import fs from 'fs';
import parse from './process/parse.js';
import tree from './process/tree.js';
import formatData from './formatter/index.js';

const getData = (pathData) => {
  const format = path.extname(pathData).replace('.', '');
  const data = fs.readFileSync(pathData, 'utf-8');

  return parse(data, format);
};

export default (path1, path2, format = 'stylish') => {
  const data1 = getData(path1);
  const data2 = getData(path2);
  const unforemattedData = tree(data1, data2);
  const formattedData = formatData(format, unforemattedData);

  return formattedData;
};
