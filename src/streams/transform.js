import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const invertStr = (input) => Array.from(input).reverse().join('');

const transform = async () => {
  try {
    const transformStream = new Transform({
      transform(chunk, _, cb) {
        const str = Buffer.isBuffer(chunk) ? chunk.toString() : chunk;
        cb(null, Buffer.from(invertStr(str)));
      },
    });

    console.info('Type text and press Enter');
    console.info('To quit press Enter and Ctrl+D (Linux/macOS) or Ctrl+Z then Enter (Windows)\n');

    await pipeline(process.stdin, transformStream, process.stdout);
  } catch (err) {
    console.error('Error transforming data:', err);
  }
};

await transform();
