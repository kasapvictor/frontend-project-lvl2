import _ from 'lodash';

const getSortedKeys = (object1, object2) => {
  const keys1 = _.keys(object1);
  const keys2 = _.keys(object2);

  return _.orderBy(_.union(keys1, keys2), [], ['asc']);
};

export default getSortedKeys;
