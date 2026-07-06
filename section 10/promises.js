const promiseOne = new Promise(function (resolve, reject) {
  // all async task
  // db calls, cryptography , networking
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  });
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});
