import readline from 'readline';
import { Transform } from 'stream';

const invertStr = (input) => Array.from(input).reverse().join('');

const transform = async () => {
  try {
    console.info('Type text and press Enter');
    console.info('To quit press Enter and Ctrl+D (Linux/macOS) or Ctrl+C then Enter (Windows)\n');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: true,
    });

    const transformStream = new Transform({
      transform(chunk, _, cb) {
        const str = Buffer.isBuffer(chunk) ? chunk.toString() : chunk;
        cb(null, Buffer.from(invertStr(str)));
      },
    });

    rl.on('line', (line) => {
      transformStream.write(line + '\n');
    });

    rl.on('close', () => {
      transformStream.end();
      console.info('\nClosed');
    });

    transformStream.pipe(process.stdout);

    transformStream.on('error', (err) => {
      console.error('Error in transformStream:', err);
    });
  } catch (err) {
    console.error('Error transforming data:', err);
  }
};

await transform();
