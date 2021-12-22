import _ from 'lodash';

const formatValue = (data) => {
  switch (true) {
    case _.isObject(data):
      return '[complex value]';

    case typeof data === 'string':
      return `'${data}'`;

    default:
      return `${data}`;
  }
};

const plain = (data, path = []) => _.keys(data).reduce((prev, item) => {
  const {
    name, status, value, value1, value2, children,
  } = data[item];
  const pathName = [...path, name].join('.');
  const startString = (state) => `Property '${pathName}' was ${state}`;

  switch (status) {
    case 'parent':
      return [...prev, `${plain(children, [...path, name])}`];

    case 'added':
      return [...prev, `${startString(status)} with value: ${formatValue(value)}`];

    case 'deleted':
      return [...prev, `${startString('removed')}`];

    case 'changed':
      return [...prev, `${startString('updated')}. From ${formatValue(value1)} to ${formatValue(value2)}`];

    default:
      return [...prev];
  }
}, []).join('\n');

export default plain;
