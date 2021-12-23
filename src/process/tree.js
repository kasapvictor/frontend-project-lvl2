import _ from 'lodash';
import getSortedKeys from '../utils/sort.js';

const tree = (data1, data2 = {}, level = 1) => {
  const keys = getSortedKeys(data1, data2);

  const result = keys.reduce((prev, curr) => {
    const el1 = data1[curr];
    const el2 = data2[curr];

    switch (true) {
      case !_.has(data1, curr):
        return [...prev, {
          name: curr,
          status: 'added',
          value: el2,
          level,
        }];

      case !_.has(data2, curr):
        return [...prev, {
          name: curr,
          status: 'deleted',
          value: el1,
          level,
        }];

      case _.isPlainObject(el1) && _.isPlainObject(el2):
        return [...prev, {
          name: curr,
          status: 'parent',
          value: tree(el1, el2, level + 1),
          level,
        }];

      case !_.isEqual(el1, el2):
        return [...prev, {
          name: curr,
          status: 'changed',
          value1: el1,
          value2: el2,
          level,
        }];

      case _.isEqual(el1, el2):
        return [...prev, {
          name: curr,
          status: 'unchanged',
          value: el1,
          level,
        }];

      default:
        return new Error('Error building of tree');
    }
  }, []);

  return result;
};

export default tree;
