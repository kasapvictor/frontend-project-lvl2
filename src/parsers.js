import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parse = (ext, content) => {
  switch (true) {
    case ext === '.json':
      return JSON.parse(content);

    case ext === '.yml' || ext === '.yaml':
      return yaml.load(content);

    default:
      return JSON.parse(content);
  }
};

const getContent = (file) => {
  const ext = path.extname(file);
  const content = fs.readFileSync(file, 'utf-8');

  return parse(ext, content);
};

export default getContent;
