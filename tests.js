const { log } = console;

let promise = new Promise(function(resolve, reject) {
  // эта функция выполнится автоматически, при вызове new Promise

  // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
  setTimeout(() => resolve("done"), 1000);
});

console.log(promise);

// promise.then(res => console.log(res));

// var promise1 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve("foo");
//   }, 300);
// });

// promise1.then(function(value) {
//   console.log(value);
//   // expected output: "foo"
// });
