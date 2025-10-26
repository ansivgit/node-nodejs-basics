import { createReadStream } from 'fs';
import { createHash } from 'crypto';

const SRC_PATH = './src/hash/files/fileToCalculateHashFor.txt';

const calculateHash = async () => {
  const hash = createHash('sha256');
  const readableStream = createReadStream(SRC_PATH);

  readableStream.on('error', (err) => {
    console.error('File read error: ', err);
  });

  readableStream.pipe(hash);

  hash.on('finish', () => {
    const hashHex = hash.digest('hex');
    console.log('SHA256 hash in hex format:\n', hashHex);
  });
};

await calculateHash();
