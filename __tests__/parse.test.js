import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import parse from '../src/process/parse.js';

// /Users/victorkasap/Projects/frontend-project-lvl2/__tests__/gendiff.test.js
const fileName = fileURLToPath(import.meta.url);

//  /Users/victorkasap/Projects/frontend-project-lvl2/__tests__
const dirName = dirname(fileName);

// /Users/victorkasap/Projects/frontend-project-lvl2/__fixtures__/file1.json
const getFixturePath = (filename) => path.join(dirName, '..', '__fixtures__', filename);

test('Parse JSON', () => {
  const pathToFile = getFixturePath('file1.json');
  const data = fs.readFileSync(pathToFile, 'utf-8');
  const expectedData = {
    common: {
      setting1: 'Value 1',
      setting2: 200,
      setting3: true,
      setting6: {
        key: 'value',
        doge: {
          wow: '',
        },
      },
    },
    group1: {
      baz: 'bas',
      foo: 'bar',
      nest: {
        key: 'value',
      },
    },
    group2: {
      abc: 12345,
      deep: {
        id: 45,
      },
    },
  };
  expect(parse(data, 'json')).toEqual(expectedData);
});

test('Parse YAML', () => {
  const pathToFile = getFixturePath('file1.yaml');
  const data = fs.readFileSync(pathToFile, 'utf-8');
  const expectedData = {
    common: {
      setting1: 'Value 1',
      setting2: 200,
      setting3: true,
      setting6: { key: 'value', doge: { wow: '' } },
    },
    group1: { baz: 'bas', foo: 'bar', nest: { key: 'value' } },
    group2: { abc: 12345, deep: { id: 45 } },
  };

  expect(parse(data, 'yaml')).toEqual(expectedData);
});

test('Parse TEXT -> Error', () => {
  const pathToFile = getFixturePath('parser_text_test.txt');
  const data = fs.readFileSync(pathToFile, 'utf-8');
  expect(parse(data, 'txt')).toEqual(new Error(`Parsing data ${data} txt is not possibly`));
});
