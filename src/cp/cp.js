import { spawn } from 'child_process';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const childProcess = spawn('node', [`${__dirname}/files/script.js`, ...args]);

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);

  childProcess.on('error', (error) => {
    console.error('Child process error:', error);
  });

  childProcess.stderr.on('data', (data) => {
    console.error('Child stderr:', data.toString());
  });

  childProcess.on('exit', (code) => {
    console.log('Child exited with code:', code);
  });

  return childProcess;
};

spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
