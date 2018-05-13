// const instructions = {
//   's1_b': { write: 'x', move: 'r', next: 's2' },
//   's2_b': { write: 'b', move: 'l', next: 's3' },
//   's3_x': { write: 'x', move: 'r', next: 's1' }
// }

const instructions = {
  's1_b': { write: '(', move: 'r', next: 's2' },
  's2_b': { write: '1', move: 'r', next: 's3' },
  's3_b': { write: '1', move: 'r', next: 's4-1' },
  's4-1_b': { write: '1', move: 'r', next: 's4' },

  's4_b': { write: '+', move: 'r', next: 's5' },
  's5_b': { write: '1', move: 'r', next: 's6-1' },

  's6-1_b': { write: '1', move: 'r', next: 's6' },

  's6_b': { write: ')', move: 'r', next: 's7' },

  's7_b': { write: 'b', move: 'l', next: 's7' },
  's7_)': { write: ')', move: 'l', next: 's7' },
  's7_1': { write: '1', move: 'l', next: 's7' },

  's7_+': { write: '1', move: 'r', next: 's08' },
  's08_1': { write: '1', move: 'r', next: 's08' },
  's08_)': { write: 'b', move: 'l', next: 's09' },

  's09_1': { write: ')', move: 'r', next: 's10' },

  's10_b': { write: 'b', move: 'r', next: 's10' },
}

function exectute(instructions) {
  const tapeLimit = 20;
  const tape = [];
  const runLimit = 20;
  let head = 0;
  let state = 's1';

  for (let i = 0; i < tapeLimit; i++) {
    tape[i] = 'b';
  }

  for (let i = 0; i < runLimit; i++) {
    console.log(`${state}: ${tape.join('')}`);
    let buffer = '   ';
    for(let j = 0; j <= head; j++) {
      buffer = buffer.concat(' ');
    }
    console.log(buffer + '^');

    const { write, move, next } = instructions[`${state}_${tape[head]}`];
    tape[head] = write;
    state = next;
    move === 'r' ? head++ : head--;
  }
}

exectute(instructions);
