import { cp } from 'fs';

const SRC_PATH = './src/fs/files';
const DEST_PATH = './src/fs/files_copy';
const ERR_MSG = 'FS operation failed';

const copy = async () => {
  cp(SRC_PATH, DEST_PATH, { errorOnExist: true, force: false, recursive: true }, (err) => {
    if (err) {
      console.error('Coping failed');
      throw new Error(ERR_MSG);
    }

    console.info('The file was copied!');
  });
};

await copy();
