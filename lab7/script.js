let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random()
        resolve(randomNumber)
    }, 3000)
})


myPromise.then((number) => {
    console.log(number)
})


function createPromise(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random()
            resolve(randomNumber)
            console.log("promise end")
        }, delay)
    })
}

let delays = [1000, 2000, 1500];
let promises = delays.map(delay => createPromise(delay));
Promise.all(promises).then((numbers) => {
    console.log(numbers);
});


let pr = new Promise((res, rej) => {
    rej('ku')
})

pr
    .then(() => console.log(1))
    .catch(() => console.log(2))
    .catch(() => console.log(3))
    .then(() => console.log(4))
    .then(() => console.log(5))


let promise = new Promise((resolve, reject) => resolve(21));
promise.then(result => {
    console.log(result);
    return result * 2;
}).then(result => {
    console.log(result);
});

async function processNumber() {

    let promise =  Promise.resolve(21);
    let result = await promise;
    console.log(result);
    result *= 2;
    console.log(result);
}

setTimeout(() => {
    processNumber();
}, 2000)
