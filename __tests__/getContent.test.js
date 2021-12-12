import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import parsers from '../src/parsers.js';

// /Users/victorkasap/Projects/frontend-project-lvl2/__tests__/gendiff.test.js
const fileName = fileURLToPath(import.meta.url);

//  /Users/victorkasap/Projects/frontend-project-lvl2/__tests__
const dirName = dirname(fileName);

// /Users/victorkasap/Projects/frontend-project-lvl2/__fixtures__/file1.json
const getFixturePath = (filename) => path.join(dirName, '..', '__fixtures__', filename);

test('Parse JSON', () => {
  const fileJson = getFixturePath('file1.JSON');
  const expectedData = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };

  expect(parsers(fileJson)).toEqual(expectedData);
});

test('Parse YAML', () => {
  const fileYaml = getFixturePath('file1.yaml');
  const expectedData = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };

  expect(parsers(fileYaml)).toEqual(expectedData);
});
