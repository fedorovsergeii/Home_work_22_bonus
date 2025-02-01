'use strict';
/*
  Создать функцию, которая создает объект опросов - голосовалок.
  Принимает массив опций для голосования. Возвращает объект.

  Метод vote() принимает опцию. Если опция существует, поднимает ее счетчик на 1. Возвращает текущее количество голосов.
  Если опции нет, возвращает текст Vote option Internet Explorer doesn't exist

  Метод showVotes() выводит текущие результаты в виде оции и звездочек. Такой себе псевдо-график.
  Звездочки должны начинаться с одной линии, чтобы можно было оценить, кто кого обогнал

  Метод iterate принимает коллбек и выполняет его для каждой опции.
  коллбек вызывается с двумя параметрами: название опции и количество голосов

 */

 function createPoll(array) {
  const survey = { };
  array.forEach(element => {
      survey[element.toLocaleLowerCase()] = 0;
  })

  return {
      vote (text) {
         if (text.toLocaleLowerCase() in survey) {
             return  ++survey[text.toLocaleLowerCase()];
         }
         return `Vote option ${text} doesn\'t exist`;
     },

      showVotes () {
          const space = array.reduce((max, item) => Math.max(max, item.length), 0);

          array.forEach((item) => {
              console.log(item.toLowerCase().padEnd(space, ' ') + ' ' + '*'.repeat(survey[item.toLowerCase()]));
          })
      },

      iterate (callback) {
          array.forEach((option) => {
              callback(option.toLocaleLowerCase(), survey[option.toLocaleLowerCase()] );
          })
      }
  }
 }

const poll = createPoll(['chrome', 'firefox', 'OPERA', 'safari', 'edge']);

console.log(poll.vote('chrome'));
console.log(poll.vote('chrome'));
console.log(poll.vote('chrome'));
console.log(poll.vote('CHROME'));
console.log(poll.vote('Chrome'));
console.log(poll.vote('firefox'));
console.log(poll.vote('firefox'));
console.log(poll.vote('FIREFOX'));
console.log(poll.vote('opera'));
console.log(poll.vote('edge'));
console.log(poll.vote('Internet Explorer'));


poll.showVotes();
/*
  chrome  *****
  firefox ***
  opera   *
  safari
  edge    *1
 */

poll.iterate((option, count) => {
  console.log(`${option} -> ${count}`);
});

/*
  chrome -> 5
  firefox -> 3
  opera -> 1
  safari -> 0
  edge -> 1
 */
console.log('==================== END Votes ==================== ');