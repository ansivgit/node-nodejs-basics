import { createWriteStream } from 'fs';
import readline from 'readline';

const DEST_PATH = 'src/streams/files/fileToWrite.txt';

const write = async () => {
  const writeStream = createWriteStream(DEST_PATH, 'utf8');

  console.info('Enter your text, than press Enter and Ctrl+D (Linux/macOS) or Ctrl+Z then Enter (Windows)\n');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (line) => {
    writeStream.write(line + '\n');
  });

  rl.on('close', () => {
    writeStream.end(() => {
      console.info('\nText saved to fileToWrite.txt!');
    });
  });

  writeStream.on('error', (err) => {
    console.error('Error writing file:', err);
  });
};

await write();
