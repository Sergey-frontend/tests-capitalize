
import { capitalize } from '../src/capitalaze.js';

import { strict as assert } from 'node:assert';

// // if (capitalize('hello') !== 'Hello') {
// //   throw new Error('Функция работает неверно!');
// // }
// if (capitalize('how are you') !== 'How are you') {
//     throw new Error('Функция работает неверно!');
//   }
// if (capitalize('pivo') !== 'pivo') {
//     throw new Error('Проверка ошибки в тесте!');
//   }
// if (capitalize('') !== '') {
//   throw new Error('Функция работает неверно!');
// }
// console.log('Все тесты успешно пройдены!');

assert.deepEqual(capitalize(''), '');
assert.deepEqual(capitalize('hello'),'Hello');
assert.deepEqual(capitalize('how are you'),'How are you');
assert.deepEqual(capitalize('pivo'), 'Pivo');
