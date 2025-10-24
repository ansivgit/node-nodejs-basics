import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';

const SRC_PATH = './src/zip/files/archive.gz';
const DEST_PATH = './src/zip/files/fileToCompress.txt';

const decompress = async () => {
  try {
    await pipeline(
      createReadStream(SRC_PATH),
      createUnzip(),
      createWriteStream(DEST_PATH),

    );

    console.log('Decompression completed');
  } catch (error) {
    console.error('Decompression failed');
    throw error;
  }
};

await decompress();
