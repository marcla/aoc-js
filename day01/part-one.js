import { processAndPrintResult } from '../core/input-processor.js';
import { splittingNewLine, toInt } from '../core/utils.js';

const processing = input => {
  const lines = splittingNewLine(input)
    .map(line => line.replaceAll(/\D/gi, ''))
    .map(line => [...line])
    .map(line => `${line.at(0)}${line.at(-1)}`)
    .map(toInt);

  const result = lines.reduce((acc, curr) => acc + curr, 0);

  return result;
};

processAndPrintResult(processing);
