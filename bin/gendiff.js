#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import genDiff from '../index.js';

const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<file1> <file2>')
  .option('-f, --format <type>', 'output format')
  .action((file1, file2) => {
    console.log(genDiff(file1, file2));
  })
  .parse(process.argv);
