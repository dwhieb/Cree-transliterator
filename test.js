import sro2syllabics from './sro2syllabics.js';
import syllabics2sro from './syllabics2sro.js';

const sro       = `kâ-mâci-pîkiskwâtikot ôhi oskâya ê-nêhiyawêyit. mâka namôya nisitohtawêw awa oskinikîs tânisi ê-itwêyit âta wîsta ê-nêhiyawêt.`;
const syllabics = `ᑳ ᒫᒋ ᐲᑭᐢᒁᑎᑯᐟ ᐆᐦᐃ ᐅᐢᑳᔭ ᐁ ᓀᐦᐃᔭᐍᔨᐟ᙮ ᒫᑲ ᓇᒨᔭ ᓂᓯᑐᐦᑕᐍᐤ ᐊᐘ ᐅᐢᑭᓂᑮᐢ ᑖᓂᓯ ᐁ ᐃᑘᔨᐟ ᐋᑕ ᐑᐢᑕ ᐁ ᓀᐦᐃᔭᐍᐟ᙮`;

console.info(`\nTesting SRO > Syllabics`);

const sro2syllabicsResult = sro2syllabics(sro);

console.info(`\nInput:\t${sro}`);
console.info(`Result:\t${sro2syllabicsResult}`);
console.info(`Target:\t${syllabics}`);

if (sro2syllabicsResult === syllabics) {

  console.info(`\nSRO > Syllabics test passed!`);

} else {

  console.error(`\nTest failed!`);

  [...syllabics].forEach((letter, i) => {

    if (syllabics[i] !== sro2syllabicsResult[i]) {

      throw new Error(`\nMisalignment starts at: ${sro2syllabicsResult.slice(i)}`);

    }

  });

}

console.info(`\nTesting Syllabics > SRO`);

const syllabics2sroResult = syllabics2sro(syllabics);

console.info(`\nInput:\t${syllabics}`);
console.info(`Result:\t${syllabics2sroResult}`);
console.info(`Target:\t${sro}`);

if (syllabics2sroResult === sro) {

  console.info(`\nSyllabics > SRO test passed!`);

} else {

  console.error(`\nTest failed!`);

  [...sro].forEach((letter, i) => {

    if (sro[i] !== syllabics2sroResult[i]) {

      throw new Error(`\nMisalignment starts at: ${syllabics2sroResult.slice(i)}`);

    }

  });

}
