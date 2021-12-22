### Hexlet tests and linter status:
[![Actions Status](https://github.com/kasapvictor/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/kasapvictor/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/b31b5b025848e6e319f2/maintainability)](https://codeclimate.com/github/kasapvictor/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b31b5b025848e6e319f2/test_coverage)](https://codeclimate.com/github/kasapvictor/frontend-project-lvl2/test_coverage)
[![tests-check](https://github.com/kasapvictor/frontend-project-lvl2/actions/workflows/tests-check.yml/badge.svg)](https://github.com/kasapvictor/frontend-project-lvl2/actions/workflows/tests-check.yml)

> genDiff - this is a training project of Hexlet.
> 
> genDiff - takes two required parameters - path to two files (json or yaml)
> end then it return different rows between files in default style or plain style or json style. 
> It will dependence of what you need and what you indicate
> For indicate out style you nedd add `--format json` or `--formst plain` or `--format stylish`
> By default  `stylish`

### Install
```bash
make install
```

```bash 
# simple flat compare two json files deffault style // stylish
gendiff ./__fixtures__/file1.json ./__fixtures__/file2.json
```

### Compare 2 JSON files default style - "stylish":
[![asciicast](https://asciinema.org/a/S3VztScAm5iOmEiFrqLYMxaA2.svg)](https://asciinema.org/a/S3VztScAm5iOmEiFrqLYMxaA2)

### Compare 2 YML files default style - "stylish":
[![asciicast](https://asciinema.org/a/GSp8RzAivYKPcL7SqUblGFdDh.svg)](https://asciinema.org/a/GSp8RzAivYKPcL7SqUblGFdDh)

```bash 
# simple flat compare two json files to plain style
gendiff --format plain ./__fixtures__/file1.json ./__fixtures__/file2.json
```

### Compare 2 JSON files default style - "plain":
[![asciicast](https://asciinema.org/a/1TUvB2ekQUz6itKyK97Jc2jbc.svg)](https://asciinema.org/a/1TUvB2ekQUz6itKyK97Jc2jbc)

### Compare 2 YAML files default style - "plain":
[![asciicast](https://asciinema.org/a/J3GR4QqXCUXoqJuSCyVqAxEIm.svg)](https://asciinema.org/a/J3GR4QqXCUXoqJuSCyVqAxEIm)

```bash 
# simple flat compare two json files to plain style
gendiff --format json ./__fixtures__/file1.json ./__fixtures__/file2.json
```

### Compare 2 JSON files default style - "json":
[![asciicast](https://asciinema.org/a/5F0mwTJs2s5F9mICtaiMdrOyF.svg)](https://asciinema.org/a/5F0mwTJs2s5F9mICtaiMdrOyF)

### Compare 2 YAML files default style - "json":
[![asciicast](https://asciinema.org/a/CY3UztDUZQditZVg4AOZtHuLw.svg)](https://asciinema.org/a/CY3UztDUZQditZVg4AOZtHuLw)


### Notes

```bash
# permission to execute file
chmod +x bin/gendiff.js 
 ```
