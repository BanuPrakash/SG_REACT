import {find} from 'underscore';

var even = find([1, 2, 3, 4, 5, 6], (num: number) => num % 2 === 0);