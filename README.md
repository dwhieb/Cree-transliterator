# Cree Transliterator

A JavaScript library for transliterating between Cree language writing systems.

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/dwhieb/Cree-transliterator)][releases]
[![tests status](https://github.com/dwhieb/Cree-transliterator/actions/workflows/test.yml/badge.svg?branch=main)][status]
[![GitHub issues](https://img.shields.io/github/issues/dwhieb/Cree-transliterator)][issues]
[![license](https://img.shields.io/github/license/dwhieb/Cree-transliterator)][license]

## Usage

Install with npm or yarn:

```cmd
npm install cree-transliterator
yarn add cree-transliterator
```

The library exports two functions:

* `sro2syllabics`: convert Standard Roman Orthography (SRO) text to Western Cree Syllabics
* `syllabics2sro`: convert Western Cree Syllabics to Standard Roman Orthography (SRO)

Import the function into your code and run it on the string you'd like to convert:

```js
import { sro2syllabics } from '@dwhieb/cree-transliterator';

const sro = `kâ-mâci-pîkiskwâtikot ôhi oskâya ê-nêhiyawêyit. mâka namôya nisitohtawêw awa oskinikîs tânisi ê-itwêyit âta wîsta ê-nêhiyawêt.`;

const result = sro2syllabics(sro);

console.log(result);
// Output:
// ᑳ ᒫᒋ ᐲᑭᐢᒁᑎᑯᐟ ᐆᐦᐃ ᐅᐢᑳᔭ ᐁ ᓀᐦᐃᔭᐍᔨᐟ᙮ ᒫᑲ ᓇᒨᔭ ᓂᓯᑐᐦᑕᐍᐤ ᐊᐘ ᐅᐢᑭᓂᑮᐢ ᑖᓂᓯ ᐁ ᐃᑘᔨᐟ ᐋᑕ ᐑᐢᑕ ᐁ ᓀᐦᐃᔭᐍᐟ᙮
```

[Found an issue or want to request a feature? Open an issue!][issues]

## Syllabary

Consonant | i | î | ê | o | ô | a | â | Final
:--------:|:-:|:-:|:-:|:-:|:-:|:-:|:-:| :----:
N/A       | ᐃ | ᐄ | ᐁ | ᐅ | ᐆ | ᐊ | ᐋ | N/A
w         | ᐏ | ᐑ | ᐍ | ᐓ | ᐕ | ᐘ | ᐚ | ᐤ
p         | ᐱ | ᐲ | ᐯ | ᐳ | ᐴ | ᐸ | ᐹ | ᑊ
t         | ᑎ | ᑏ | ᑌ | ᑐ | ᑑ | ᑕ | ᑖ | ᐟ
k         | ᑭ | ᑮ | ᑫ | ᑯ | ᑰ | ᑲ | ᑳ | ᐠ
c         | ᒋ | ᒌ | ᒉ | ᒍ | ᒎ | ᒐ | ᒑ | ᐨ
m         | ᒥ | ᒦ | ᒣ | ᒧ | ᒨ | ᒪ | ᒫ | ᒼ
n         | ᓂ | ᓃ | ᓀ | ᓄ | ᓅ | ᓇ | ᓈ | ᐣ
s         | ᓯ | ᓰ | ᓭ | ᓱ | ᓲ | ᓴ | ᓵ | ᐢ
y         | ᔨ | ᔩ | ᔦ | ᔪ | ᔫ | ᔭ | ᔮ | ᐩ<sup><a href=#fn-1>1</a></sup> (ᐝ)
th / ð    | ᖨ | ᖩ | ᖧ | ᖪ | ᖫ | ᖬ | ᖭ | ᙾ
h         |   |   |   |   |   |   |   | ᐦ
hk        |   |   |   |   |   |   |   | ᕽ

## Other Symbols

SRO | Syllabary
:--:|:--------:
 l  |     ᓬ
 r  |     ᕒ
 .  |     ᙮
 w  |     ᐧ
 \- |  U+202F

## Keyboards

* http://www.languagegeek.com/algon/syllabics_keyboards/cr_oj_oc_na.html

## Developer Notes

* Run tests with `npm test`.
* This library uses the [Digital Linguistics transliteration library][dlx-transliterate].

## Footnotes

1. <p id=fn-1>Cree writers overwhelmingly prefer using this character, U+1429 CANADIAN SYLLABICS FINAL PLUS ⟨ᐩ⟩, to U+1540 CANADIAN SYLLABICS WEST-CREE Y ⟨ᕀ⟩.</p>

<!-- LINKS -->
[dlx-transliterate]: https://developer.digitallinguistics.io/transliterate/
[issues]:            https://github.com/dwhieb/Plains-Cree/issues
[license]:           https://github.com/dwhieb/Cree-transliterator/blob/main/LICENSE
[releases]:          https://github.com/dwhieb/Cree-transliterator/releases
[status]:            https://github.com/dwhieb/Cree-transliterator/actions
