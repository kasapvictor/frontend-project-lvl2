import {readFileSync} from 'fs';
import {parse} from 'path';

export default (path1, path2) => {
	const file1 = JSON.parse(readFileSync(path1));
	const file2 = JSON.parse(readFileSync(path2));
	const PREFIX = '  ';
	const PREFIX_NO = '- ';
	const PREFIX_IN = '+ ';
	const SEPARATOR = ': ';
	const keys1 = Object.keys(file1);
	const keys2 = Object.keys(file2);
	const keys = [...new Set([...keys1, ...keys2])].sort();

	const result = keys.reduce((prev, curr) => {
		const el1 = file1[curr];
		const el2 = file2[curr];

		// ключ есть в обоих файлах и его значения совпадают
		if (el1 === el2) {
			prev.push(`${PREFIX}${curr}${SEPARATOR}${el1}`);
		}

		// есть в обоих файлах, но имеет разные значения
		if (el1 && el2 && el1 !== el2) {
			prev.push(`${PREFIX_NO}${curr}${SEPARATOR}${el1}`);
			prev.push(`${PREFIX_IN}${curr}${SEPARATOR}${el2}`);
		}

		// ключ есть только в одном файле находится только в file1
		if (el1 !== undefined && el2 === undefined) {
			prev.push(`${PREFIX_NO}${curr}${SEPARATOR}${el1}`);
		}

		// ключ есть только в file2
		if (el1 === undefined && el2 !== undefined) {
			prev.push(`${PREFIX_IN}${curr}${SEPARATOR}${el2}`);
		}

		return prev;
	}, []);

	return result.join('\n');
};
