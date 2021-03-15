import { readFileSync }  from 'fs';
import { transliterate } from '@digitallinguistics/transliterate';

const json          = readFileSync(`Syllabics2SRO.json`, `utf8`);
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
