import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parseContent = (fileNsme, content, ext) => {
  switch (true) {
    case ext === 'json':
      return JSON.parse(content);
    
    case ext === 'yml' || ext === 'yaml':
      return yaml.load(content);
    
    default:
      return new Error(`Parsing a ${fileNsme} with '.${ext}' extention is not possibly`);
  }
}

export default (file) => {
  const ext = path.extname(file).replace('.', '');
  const { base } = path.parse(file);
  const content = fs.readFileSync(file, 'utf-8');

  return parseContent(base, content, ext)
};
