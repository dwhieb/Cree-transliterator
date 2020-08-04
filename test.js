import { transliterate } from '@digitallinguistics/transliterate';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const SRO       = `kâ-mâci-pîkiskwâtikot ôhi oskâya ê-nêhiyawêyit. mâka namôya nisitohtawêw awa oskinikîs tânisi ê-itwêyit âta wîsta ê-nêhiyawêt.`;
const syllabics = `ᑳ ᒫᒋ ᐲᑭᐢᒁᑎᑯᐟ ᐆᐦᐃ ᐅᐢᑳᔭ ᐁ ᓀᐦᐃᔭᐍᔨᐟ᙮ ᒫᑲ ᓇᒨᔭ ᓂᓯᑐᐦᑕᐍᐤ ᐊᐘ ᐅᐢᑭᓂᑮᐢ ᑖᓂᓯ ᐁ ᐃᑘᔨᐟ ᐋᑕ ᐑᐢᑕ ᐁ ᓀᐦᐃᔭᐍᐟ᙮`;

console.log(`\nTesting SRO > syllabics`);

const SRO2syllabics       = require(`./SRO2syllabics.json`);
const SRO2SyllabicsResult = transliterate(SRO, SRO2syllabics);

console.log(`\nInput:\t${SRO}`);
console.log(`Result:\t${SRO2SyllabicsResult}`);
console.log(`Target:\t${syllabics}`);

if (SRO2SyllabicsResult === syllabics) {

  console.info(`\nSRO > syllabics test passed!`);

} else {

  console.error(`\nTest failed!`);

  [...syllabics].forEach((letter, i) => {

    if (syllabics[i] !== SRO2SyllabicsResult[i]) {

      throw new Error(`\nMisalignment starts at: ${SRO2SyllabicsResult.slice(i)}`);

    }

  });

}

console.log(`\nTesting syllabics > SRO`);

const syllabics2SRO       = require(`./syllabics2SRO.json`);
const syllabics2SROResult = transliterate(syllabics, syllabics2SRO);

console.log(`\nInput:\t${syllabics}`);
console.log(`Result:\t${syllabics2SROResult}`);
console.log(`Target:\t${SRO}`);

if (syllabics2SROResult === SRO) {

  console.info(`\nsyllabics > SRO test passed!`);

} else {

  console.error(`\nTest failed!`);

  [...SRO].forEach((letter, i) => {

    if (SRO[i] !== syllabics2SROResult[i]) {

      throw new Error(`\nMisalignment starts at: ${syllabics2SROResult.slice(i)}`);

    }

  });

}
