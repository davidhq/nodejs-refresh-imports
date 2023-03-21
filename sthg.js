import { EventEmitter } from 'node:events'

export let counter = 0;

export const increment = () => {
    counter++
    console.log('counter: ' + counter);
}

class E extends EventEmitter {
}

export const events = new E();

