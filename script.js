

let promise2 = new Promise((resolve, reject) => {
    setTimeout( () => {
        reject('Promise Failed!');
    }, 1500);
});

promise2.then( (value) => {
    console.log('1,5 second: ', value);
}, (error) => {
    console.log('PROMISE FAILED');
    console.log('error', error)
});





let promise = new Promise((resolve, reject) => {
    setTimeout( () => {
        console.log('PROMISE SUCCEED');
        resolve('Promise Succeed!');
    }, 1500);
});

promise.then( (value) => {
    console.log('1,5 second: ', value);
}, (error) => {
    console.log('error', error)
});