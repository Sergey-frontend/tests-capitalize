// нажмите кнопку run чтобы запустить тесты
// попробуйте изменять код функции / тестов, запуская проверки заново

import { capitalize } from '../src/capitalaze.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает неверно!');
}
if (capitalize('how are you') !== 'How are you') {
    throw new Error('Функция работает неверно!');
  }
if (capitalize('pivo') !== 'pivo') {
    throw new Error('Проверка ошибки в тесте!');
  }

if (capitalize('') !== '') {
  throw new Error('Функция работает неверно!');
}

console.log('Все тесты успешно пройдены!');