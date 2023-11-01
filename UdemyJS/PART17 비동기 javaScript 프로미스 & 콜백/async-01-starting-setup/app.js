const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new promise ( (resovle, reject) => {

    navigator.geolocation.getCurrentPosition(success => {
      resovle(success);
    }, error => {
  
    }, opts);

  });
  return promise;

  
};

const setTimer = (duration) => {
  const promise = new promise( (resovle, reject) => {
      setTimer(() => {
        resovle();
  }, duration);
return promise;
  });

};

function trackUserHandler() {
getPosition().then(posData => {
  console.log(posData);
});
  setTimer(1000).then(() => {
    console.log('Timer done!')
  });
  console.log('Getting position....');
}


button.addEventListener('click', trackUserHandler);

// let result = 0

// for (let i = 0 ; i < 1000000; i ++) {
// result += i ;
// }

// console.log(result);