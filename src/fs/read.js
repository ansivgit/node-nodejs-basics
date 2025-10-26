import { readFile } from 'fs';

const FILE_PATH = './src/fs/files/fileToRead.txt';
const ERR_MSG = 'FS operation failed';

const read = async () => {
  readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('File does not exist');
      throw new Error(ERR_MSG);
    }

    console.info('Content:\n\n', data);
  });
};

await read();
