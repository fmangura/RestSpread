
function filterOutOdds(...arr) {
    return arr.filter((num) => num % 2 === 0);
};

function findMin(...val) {
    const arrVal = val;
    return arrVal.reduce((min, nextNum) => {
        return nextNum < min ? nextNum : min;
    });
}

function mergeObjects(...obj) {
    const newObj = {...obj[0],...obj[1]};
    return newObj;
};

// Bonus solution
function doubleAllAndReturnArgs(arr, num) {
    const allNum = [...arr, num];
    return allNum.map((val) => val * 2);
};

function doubleAndReturnArgs(arr, ...num) {
    const dblVal = num.map((val) => val * 2);
    const allNum = [...arr, ...dblVal];
    return allNum;
};

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (...items) => {
    let i = Math.floor(Math.random() * items.length);
    let random = items[i];
    return items.filter((item) => item !== random);
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    const newArray = [...array1, ...array2];
    return newArray;
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    const newObj = {...obj, [key]: val};
    return newObj;
}

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
   delete obj[key];
   const newObj = {...obj};
   return newObj;
}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    const newObj = {...obj1, ...obj2};
    return newObj;
}

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    const newObj = {...obj, [key]: val};
    return newObj;
}