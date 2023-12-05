const readline = require('readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

function ctof(celsius) {
  return (celsius * 9 / 5) + 32;
}

function ftoc(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

rl.question('¿Quieres convertir de celsius a fahrenheit o de fahrenheit a celsius? (c/f) ', (answer) => {
  // TODO: Log the answer in a database
  if (answer.toLowerCase() == "c") {
    rl.question('Ingresa la temperatura en celsius ', (celsius) => {
      const resultado = ctof(parseFloat(celsius));
      console.log(`Los ${celsius} grados celsius elegidos son ${resultado} fahrenheit`);
      rl.close
    })
  } else if (answer == "f") {
    rl.question('Ingresa la remperatura en fahrenheit ', (fahrenheit) => {
      const resultado2 = ftoc(parseFloat(fahrenheit));
      console.log(`Los ${fahrenheit} grados fahrenheit elegidos son ${resultado2} celsius`)
      rl.close
    })
  } else {
    console.log("No es posible hacer una conversión de la letra dada elija si o si entre c o f.")
    rl.close
  }
  rl.close
});