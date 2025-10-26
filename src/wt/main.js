import { cpus } from 'os';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
  const BASE_NUMBER = 10;
  const cpuCount = cpus().length;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const result = [];
  let finished = 0;

  for (let i = 0; i < cpuCount; i += 1) {
    const worker = new Worker(`${__dirname}/worker.js`, {
      workerData: BASE_NUMBER + i,
    });

    worker.on('message', (data) => {
      console.log('Main got:', data);
      result[i] = { status: 'resolved', data };
    });

    worker.on('error', (err) => {
      console.error(`Worker${i} error: `, err);
      result[i] = { status: 'error', data: null };
    });

    worker.on('exit', (code) => {
      finished += 1;

      if (finished === cpuCount) {
        console.info('\nResult is:\n', result);
      }
    });
  }
};

await performCalculations();
