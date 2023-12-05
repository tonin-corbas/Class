const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('¿Como te llamas? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Bienvenido al maravilloso mundo de Js: ${answer}`);

  rl.close();
});
