console.log('PROMISES');

let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promise Done!');
    }, 1500);
});

promise.then( (value) => {
    console.log('1,5 second: ', value)
});