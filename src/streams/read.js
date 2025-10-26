import { createReadStream } from 'fs';
import { once } from 'events';

const SRC_PATH = './src/streams/files/fileToRead.txt';

const read = async () => {
  try {
    const readStream = createReadStream(SRC_PATH, 'utf8');

    readStream.pipe(process.stdout);
    await once(readStream, 'end');

    console.log('\n\nCompleted reading file!');
  } catch (err) {
    console.error('Error reading file:', err);
  }
};

await read();
