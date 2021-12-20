#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import genDiff from '../index.js';

const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<file1> <file2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((file1, file2) => {
    const { format } = program.opts();
    console.log(genDiff(file1, file2, format));
  })
  .parse(process.argv);
