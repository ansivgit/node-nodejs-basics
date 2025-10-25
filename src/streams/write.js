import { createWriteStream } from 'fs';

const DEST_PATH = 'src/streams/files/fileToWrite.txt';

const write = async () => {
  const writeStream = createWriteStream(DEST_PATH, 'utf8');

  console.info('Enter your text, than press Enter and Ctrl+D (Linux/macOS) or Ctrl+Z then Enter (Windows)\n');

  process.stdin.pipe(writeStream);

  writeStream.on('finish', () => {
    console.info('\nText saved to fileToWrite.txt!');
  });

  writeStream.on('error', (err) => {
    console.error('Error writing file:', err);
  });
};

await write();
