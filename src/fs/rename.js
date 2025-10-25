import { access, constants, rename as rn } from 'fs';

const OLD_FILE = './src/fs/files/wrongFilename.txt';
const NEW_FILE = './src/fs/files/properFilename.md';
const ERR_MSG = 'FS operation failed';

const rename = async () => {
  access(NEW_FILE, constants.F_OK, (err) => {
    if (!err) {
      console.error('File with the new name exists');
      throw new Error(ERR_MSG);
    }

    rn(OLD_FILE, NEW_FILE, (err) => {
      if (err) {
        console.error('File does not exist');
        throw new Error(ERR_MSG);
      }

      console.log('Rename complete!');
    });
  });
};

await rename();
