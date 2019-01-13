function waitASec(seconds) {
    return new Promise( (resolve, reject) => {
        if(seconds > 2) {
            reject(seconds);
        } else {
            setTimeout( () => {
                seconds++;
                resolve(seconds);
            }, 1000)
        }
    });
}

// Second gets passed for each .then
waitASec(3)
    .then(waitASec)
    .then( (seconds) => {
        console.log('CHAINING PROMISES');
        console.log('seconds', seconds);
    })
    .catch( (error) => {
        console.log('CATCHING ERRORS');
        console.log(error)
    });




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
