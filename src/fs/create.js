import { appendFile, access, constants } from 'fs';

const FILE_PATH = './src/fs/files/fresh.txt';
const FILE_CONTENT = 'I am fresh and young';
const ERR_MSG = 'FS operation failed';

const create = async () => {
  access(FILE_PATH, constants.F_OK, (err) => {
    if (!err) {
      console.info('File exists');
      throw new Error(ERR_MSG);
    }

    appendFile(FILE_PATH, FILE_CONTENT, 'utf8', (err) => {
      if (err) throw new Error(err);
      console.info('The file was appended to!');
    });
  });
};

await create();
