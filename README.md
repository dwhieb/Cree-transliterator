# Plains Cree

Currently, this repository only contains the transliteration schema for converting Plains Cree text from the Standard Roman Orthography (SRO) to Cree Syllabics.

* The transliteration rules are located in the file `SRO-Syllabary.json`, and are designed to be used with the [digitallinguistics/transliterate][transliterate] library, which runs in JavaScript / Node.

* You can run the test for the transliteration schema by first installing the [digitallinguistics/transliterate][transliterate] library (`npm install @digitallinguistics/transliterate`) and then running the file `test.js` in Node (`node test.js`), both from the command line in this folder.

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
y         | ᔨ | ᔩ | ᔦ | ᔪ | ᔫ | ᔭ | ᔮ | ᐩ (ᐝ)
th        | ᖨ | ᖩ | ᖧ | ᖪ | ᖫ | ᖬ | ᖭ | ᙾ
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

[transliterate]: https://developer.digitallinguistics.io/transliterate/
