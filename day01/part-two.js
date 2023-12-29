import { processAndPrintResult } from '../core/input-processor.js';
import { splittingNewLine, toInt } from '../core/utils.js';

const letterDigitMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const replaceLetterWithDigit = (line, map) => {
  const letters = Object.keys(map);
  const replacementFn = (match) => `${match.at(0)}${map[match]}${match.at(-1)}`;

  let result = line;

  for (const letter of letters) {
    result = result.replaceAll(new RegExp(letter, 'gi'), replacementFn);
  }

  return result;
};

const processing = (input) => {
  const lines = splittingNewLine(input)
    .map((line) => replaceLetterWithDigit(line, letterDigitMap))
    .map((line) => line.replaceAll(/\D/gi, ''))
    .map((line) => [...line])
    .map((line) => `${line.at(0)}${line.at(-1)}`)
    .map(toInt);

  const result = lines.reduce((acc, curr) => acc + curr, 0);

  return result;
};

processAndPrintResult(processing);
