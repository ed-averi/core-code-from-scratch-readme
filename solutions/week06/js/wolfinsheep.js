function warnTheSheep(queue) {

let wolf = queue.indexOf('wolf');

if(++wolf === queue.length) {
return 'Pls go away and stop eating my sheep';
}

return `Oi! Sheep number ${queue.length - wolf}! You are about to be eaten by a wolf!`;
}