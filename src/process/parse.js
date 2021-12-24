import yaml from 'js-yaml';

export default (data, format) => {
  switch (true) {
    case format === 'json':
      return JSON.parse(data);

    case format === 'yml' || format === 'yaml':
      return yaml.load(data);

    default:
      return new Error(`Parsing data ${data} ${format} is not possibly`);
  }
};
