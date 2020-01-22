const readline = require('readline');

let board = `
   a     b     c
      |     |     
1  -  |  -  |  -  
 _____|_____|_____
      |     |     
2  -  |  -  |  -  
 _____|_____|_____
      |     |     
3  -  |  -  |  -  
      |     |     
`;

console.log(board);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Ready to play (Y/n)? ', (answer) => {
  if (answer.toLowerCase === 'y') {
    console.log("Ok let's play some tic-tac-toe!");
  } else if (answer.toLowerCase === 'n') {
    console.log('Ok. BYE BYE!');
    rl.close('No');
  } else {
    throw new Error('Invalid input: Please input either Y or N');
  }
});

rl.on('close', (send) => {
  console.log('answer', send);
});
