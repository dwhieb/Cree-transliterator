import { fileURLToPath } from 'url';
import path              from 'path';
import { readFileSync }  from 'fs';
import { transliterate } from '@digitallinguistics/transliterate';

const currentDir    = path.dirname(fileURLToPath(import.meta.url));
const schemaPath    = path.join(currentDir, `./Syllabics2SRO.json`);
const json          = readFileSync(schemaPath);
const substitutions = JSON.parse(json);

function pipe(arg, ...functions) {
  return functions.reduce((val, fn) => fn(val), arg);
}

const nfcNormalize           = str => str.normalize();
const toLowerCase            = str => str.toLowerCase();
const transliterateSyllabics = str => transliterate(str, substitutions);

export default function syllabics2sro(input) {
  return pipe(
    input,
    nfcNormalize,
    toLowerCase,
    transliterateSyllabics,
  );
}
