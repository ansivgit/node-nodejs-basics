import { readdir } from 'fs';

const DIR_PATH = './src/fs/files';
const ERR_MSG = 'FS operation failed';

const list = async () => {
  readdir(DIR_PATH, (err, files) => {
    if (err) {
      throw new Error(ERR_MSG);
    }

    console.info('Files:\n\n', files);
  });
};

await list();
