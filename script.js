console.log('ALL/RACE PROMISE METHOD');

let promise3 = new Promise(  (res, rej)=>{
    setTimeout( () => {
        res('Resolved!');
    }, 500)
});

let promise4 = new Promise(  (res, rej)=>{
    setTimeout( () => {
        rej('Rejected!');
        // res('Resolved!');
    }, 1000)
});

// All promises gets "combined"
// As long as ONE val gets rejected, no resolves gets passed -  Only the reject.

// Promise.all([ promise3, promise4 ])

// .race completes the FIRST call to get finished.
Promise.race([ promise3, promise4 ])
    .then( (success) => {
        console.log( 'success', success)
    })
    .catch( (error) => {
        console.log('error', error)
    });





function waitASec(seconds) {
    return new Promise( (resolve, reject) => {
        if(seconds > 2) {
            reject(seconds);
        } else {
            setTimeout( () => {
                seconds++;
                resolve(seconds);
            }, 3000)
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
    }, 3500);
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
    }, 3500);
});

promise.then( (value) => {
    console.log('1,5 second: ', value);
}, (error) => {
    console.log('error', error)
});
