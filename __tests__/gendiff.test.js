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

const file1Json = getFixturePath('file1.json');
const file2Json = getFixturePath('file2.json');
const file1Yaml = getFixturePath('file1.yaml');
const file2Yaml = getFixturePath('file2.yml');

test('2 JSON files to STYLISH style', () => {
  const diff = gendiff(file1Json, file2Json);
  const expectedFile = getFixturePath('expectedStylish.txt');
  const expectContent = getContent(expectedFile);
  expect(diff).toEqual(expectContent);
});

test('2 YAML files to STYLISH style', () => {
  const diff = gendiff(file1Yaml, file2Yaml);
  const expectedFile = getFixturePath('expectedStylish.txt');
  const expectContent = getContent(expectedFile);
  expect(diff).toEqual(expectContent);
});

test('2 JSON files to PLAIN style', () => {
  const diff = gendiff(file1Json, file2Json, 'plain');
  const expectedFile = getFixturePath('expectedPlain.txt');
  const expectContent = getContent(expectedFile);
  expect(diff).toEqual(expectContent);
});

test('2 YAML files to PLAIN style', () => {
  const diff = gendiff(file1Yaml, file2Yaml, 'plain');
  const expectedFile = getFixturePath('expectedPlain.txt');
  const expectContent = getContent(expectedFile);
  expect(diff).toEqual(expectContent);
});

test('2 JSON files to JSON style', () => {
  const diff = gendiff(file1Json, file2Json, 'json');
  const expectedFile = getFixturePath('expectedJson.txt');
  const expectContent = getContent(expectedFile);
  expect(diff).toEqual(expectContent);
});

test('2 YAML files to JSON style', () => {
  const diff = gendiff(file1Yaml, file2Yaml, 'json');
  const expectedFile = getFixturePath('expectedJson.txt');
  const expectContent = getContent(expectedFile);
  expect(diff).toEqual(expectContent);
});
