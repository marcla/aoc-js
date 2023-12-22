import { createInterface } from 'readline';
import { stdin, stdout } from 'node:process';

function readInputData(callback) {
  const rl = createInterface({
    input: stdin,
    output: stdout,
    terminal: false,
  });

  let inputData = '';

  rl.on('line', line => {
    inputData += line + '\n';
  });

  rl.on('close', () => {
    rl.close();
    callback(inputData);
  });
}

function printOutputData(outputData) {
  console.log("Risultato dell'elaborazione:");
  console.log(outputData);
}

// Funzione principale che gestisce il flusso di input/output
export function processAndPrintResult(processFn) {
  readInputData(inputData => {
    if (inputData.trim() === '') {
      console.error("Errore: Nessun dato inserito. Inserire almeno un dato per l'elaborazione.");
      process.exit(1);
    }

    const outputData = processFn(inputData);
    printOutputData(outputData);
  });
}
