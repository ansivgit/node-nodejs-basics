const parseArgs = () => {
  try {
    const args = process.argv.slice(2);

    for (let i = 0; i < args.length; i += 2) {
      const argName = args[i];
      const argValue = args[i + 1];

      console.log(`${argName} is ${argValue}`);
    }
  } catch (err) {
    throw new Error(err);
  }
};

parseArgs();
