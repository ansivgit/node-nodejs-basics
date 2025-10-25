import { rm } from 'fs';

const FILE_PATH = './src/fs/files/fileToRemove.txt';
const ERR_MSG = 'FS operation failed';

const remove = async () => {
  rm(FILE_PATH, (err) => {
    if (err) {
      console.error('File does not exist');
      throw new Error(ERR_MSG);
    }

    console.info('The file was deleted!');
  });
};

await remove();
