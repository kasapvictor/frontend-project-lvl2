import _ from 'lodash';

const indent = (status = '', level = 1) => {
  const countSpace = 4;
  const countRepeat = level * countSpace;
  const statusExist = ['added', 'deleted', 'changed'].includes(status);

  return ' '.repeat(statusExist ? countRepeat - 2 : countRepeat);
};

const stringify = (obj, status, level) => {
  if (!_.isObject(obj)) {
    return obj;
  }

  const iter = (data) => {
    const result = _.keys(data).reduce((prev, key) => {
      const value = stringify(data[key], status, level + 1);
      const space = indent(status, level + 3 / 2);

      return [...prev, `${space}${key}: ${value}`];
    }, []);

    return result.join('\n');
  };

  return `{\n${iter(obj)}\n${indent(status, level + 1 / 2)}}`;
};

const stylish = (obj, depth = 0) => {
  const result = _.keys(obj).reduce((prev, curr) => {
    const {
      name, status, value, value1, value2, level,
    } = obj[curr];
    const space = indent(status, level);
    const line = (val, symbol = '') => `${space}${symbol}${name}: ${stringify(val, status, level)}`;

    switch (true) {
      case status === 'added':
        return [...prev, line(value, '+ ')];

      case status === 'deleted':
        return [...prev, line(value, '- ')];

      case status === 'parent':
        return [...prev, `${space}${name}: ${stylish(value, level)}`];

      case status === 'changed':
        return [...prev, `${line(value1, '- ')}\n${line(value2, '+ ')}`];

      case status === 'unchanged':
        return [...prev, line(value)];

      default:
        throw new Error(`Error of formatted - ${status}`);
    }
  }, []);

  return `{\n${result.join('\n')}\n${indent('', depth)}}`;
};

export default stylish;
