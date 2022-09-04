//Solution shared in one of the standup sessions at Core Code

export function warnTheSheep(queue: string[]): string {
    //1. Donde esta el lobo en el array
    //2. Correr condicionales
    //  2.1 Si el lobo esta al inicio
    //    2.1.1 "Pls go away and stop eating my sheep"
    //  2.2 Si el lobo no esta al inicio
    //    2.2.1 "Oi! Sheep number N! You are about to be eaten by a wolf!"
    //           **N es la posicion de la oveja que esta enfrente del lobo
    //======================================================================
    // 1. 
    let wolf:number = queue.indexOf('wolf');
    // 2.1
    if(++wolf === queue.length) {
      return 'Pls go away and stop eating my sheep';
    }
    // 2.2
    return `Oi! Sheep number ${queue.length - wolf}! You are about to be eaten by a wolf!`;
    
    //return ++wolf === queue.length ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${queue.length - wolf}! You are about to be eaten by a wolf!`;
  }