import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';

// /Users/victorkasap/Projects/frontend-project-lvl2/__tests__/gendiff.test.js
const fileName = fileURLToPath(import.meta.url);

//  /Users/victorkasap/Projects/frontend-project-lvl2/__tests__
const dirName = dirname(fileName);

// /Users/victorkasap/Projects/frontend-project-lvl2/__fixtures__/file1.json
const getFixturePath = (filename) => path.join(dirName, '..', '__fixtures__', filename);

// content of file
const getContent = (file) => fs.readFileSync((file), 'utf-8').trim();

test('2 JSON files', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const diff = gendiff(file1, file2);
  const expectedFile = getFixturePath('expected.txt');
  const expectContent = getContent(expectedFile);

  // console.log('diff', diff);
  // console.log('expectContent', expectContent);
  expect(diff).toEqual(expectContent);
});

test('2 YAML files', () => {
  const file1 = getFixturePath('file1.yaml');
  const file2 = getFixturePath('file2.yml');
  const diff = gendiff(file1, file2);
  const expectedFile = getFixturePath('expected.txt');
  const expectContent = getContent(expectedFile);

  expect(diff).toEqual(expectContent);
});
