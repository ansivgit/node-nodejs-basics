const parseEnv = () => {
  try {
    const envKeys = Object.keys(process.env);
    const rssVars = envKeys.filter(key => key.startsWith('RSS_'));

    console.info('The result are:');
    rssVars.forEach((key) => {
      console.log(`${key}=${process.env[key]}`);
    });
  } catch (err) {
    console.error('Error parsing .env file');
    throw new Error(err);
  }
};

parseEnv();



// function loadEnv(envPath = '.env') {
//     try {
//         const envContent = readFileSync(path.resolve(envPath), 'utf8');
//         const envVars = envContent.split('\n');

//         envVars.forEach(line => {
//             if (line.trim() && !line.startsWith('#')) {
//                 const [key, ...value] = line.split('=');
//                 if (key) {
//                     process.env[key.trim()] = value.join('=').trim();
//                 }
//             }
//         });
//     } catch (error) {
//         console.warn('Файл .env не найден');
//     }
// }

// loadEnv();
// console.log(process.env);
