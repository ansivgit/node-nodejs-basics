import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const SRC_PATH = './src/zip/files/fileToCompress.txt';
const DEST_PATH = './src/zip/files/archive.gz';

const compress = async () => {
  try {
    await pipeline(
      createReadStream(SRC_PATH),
      createGzip(),
      createWriteStream(DEST_PATH)
    );

    console.log('Compression completed');
  } catch (error) {
    console.error('Compression failed');
    throw error;
  }
};

await compress();
