import { fileURLToPath } from 'url';
import path              from 'path';
import { readFileSync }  from 'fs';
import { transliterate } from '@digitallinguistics/transliterate';

const currentDir    = path.dirname(fileURLToPath(import.meta.url));
const schemaPath    = path.join(currentDir, `SRO2Syllabics.json`);
const json          = readFileSync(schemaPath);
const substitutions = JSON.parse(json);

const sroNormalizations = {
  ā:  `â`,
  aa: `â`,
  ð:  `th`,
  ē:  `ê`,
  ee: `ê`,
  ī:  `î`,
  ii: `î`,
  ō:  `ô`,
  oo: `ô`,
  ū:  `û`,
  uu: `û`,
  ý:  `y`,
};

function pipe(arg, ...functions) {
  return functions.reduce((val, fn) => fn(val), arg);
}

const nfcNormalize     = str => str.normalize();
const normalizeSRO     = str => transliterate(str, sroNormalizations);
const toLowerCase      = str => str.toLowerCase();
const transliterateSRO = str => transliterate(str, substitutions);

export default function sro2syllabics(input) {
  return pipe(
    input,
    nfcNormalize,
    toLowerCase,
    normalizeSRO,
    transliterateSRO,
  );
}
