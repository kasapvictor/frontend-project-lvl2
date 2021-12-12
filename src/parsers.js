import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default (file) => {
  const ext = path.extname(file);
  const { base } = path.parse(file);
  const content = fs.readFileSync(file, 'utf-8');

  switch (true) {
    case ext === '.json':
      return JSON.parse(content);

    case ext === '.yml' || ext === '.yaml':
      return yaml.load(content);

    default:
      return new Error(`Parsing a ${base} with '${ext}' extention is not possibly`);
  }
};
