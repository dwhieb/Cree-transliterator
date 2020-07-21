import { transliterate } from '@digitallinguistics/transliterate';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const substitutions = require(`./SRO-Syllabary.json`);

const SRO = `kâ-mâci-pîkiskwâtikot ôhi oskâya ê-nêhiyawêyit. mâka namôya nisitohtawêw awa oskinikîs tânisi ê-itwêyit âta wîsta ê-nêhiyawêt.`;

const syllabics = `ᑳᒫᒋᐲᑭᐢᒁᑎᑯᐟ ᐆᐦᐃ ᐅᐢᑳᔭ ᐁᓀᐦᐃᔭᐍᔨᐟ᙮ ᒫᑲ ᓇᒨᔭ ᓂᓯᑐᐦᑕᐍᐤ ᐊᐘ ᐅᐢᑭᓂᑮᐢ ᑖᓂᓯ ᐁᐃᑘᔨᐟ ᐋᑕ ᐑᐢᑕ ᐁᓀᐦᐃᔭᐍᐟ᙮`;

const result = transliterate(SRO, substitutions);

console.log(`Input:\t${SRO}`);
console.log(`Result:\t${result}`);
console.log(`Target:\t${syllabics}`);

if (result === syllabics) {

  console.info(`Test passed!`);

} else {

  console.error(`Test failed!`);

  [...syllabics].forEach((letter, i) => {

    if (syllabics[i] !== result[i]) {

      throw new Error(`Misalignment starts at: ${result.slice(i)}`);

    }

  })

}
