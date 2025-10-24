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
