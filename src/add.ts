import { subtract } from './subtract';

export function sub(a, b)  { 
    return subtract(a, b);
}

export function addNumbers(a, b) {
    return a + b;
}

export function untouched() {
    const b = Math.random();
    return b * 34;
}
