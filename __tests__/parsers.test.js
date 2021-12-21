import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import parse from '../src/utils/parse.js';

// /Users/victorkasap/Projects/frontend-project-lvl2/__tests__/gendiff.test.js
const fileName = fileURLToPath(import.meta.url);

//  /Users/victorkasap/Projects/frontend-project-lvl2/__tests__
const dirName = dirname(fileName);

// /Users/victorkasap/Projects/frontend-project-lvl2/__fixtures__/file1.json
const getFixturePath = (filename) => path.join(dirName, '..', '__fixtures__', filename);

test('Parse JSON', () => {
  const fileJson = getFixturePath('file1.json');
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

  expect(parse(fileJson)).toEqual(expectedData);
});

test('Parse YAML', () => {
  const fileYaml = getFixturePath('file1.yaml');
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

  expect(parse(fileYaml)).toEqual(expectedData);
});

test('Parse TEXT -> Error', () => {
  const fileText = getFixturePath('parser_text_test.txt');
  const ext = path.extname(fileText);
  const { base } = path.parse(fileText);

  expect(parse(fileText)).toEqual(new Error(`Parsing a ${base} with '${ext}' extention is not possibly`));
});
