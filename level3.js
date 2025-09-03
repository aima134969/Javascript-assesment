


// 2. recursive sum
let recursiveSum = (myArr, i, sum) => {
    if (i === myArr.length){
        return sum;
    }
    return myArr[i] + recursiveSum(myArr, i + 1, sum);
}

// 3. Missing number
let missingNumber = myArr => {
    for (let i = 1; i < myArr.length; i++){
        if (myArr[i] - myArr[i-1] > 1){
            for (let j = myArr[i-1]+1; j < myArr[i]; j++){
                console.log(j);
            }
        }
    }
}

// 4. Converting array of objects into an object
let myObjectOfObjects = myArr => {
    let myObj = {};
    for(let i = 0; i < myArr.length; i++){
        myObj[myArr[i].id] = myArr[i];
    }
    return myObj;
}

// 5. Custom map function which doubles each element
let myMap = (myArr, callbackFunction) => {
    for (let i = 0; i < myArr.length; i++) myArr[i] = callbackFunction(myArr[i]);
    return myArr;
}

// 6. Find all prime numbers up to n
let allPrimeNumbers = num => {
    let myArr = [], flag = true;
    for (let i = 2; i < num; i++){
        for (j = 2; j < i; j++){
            if (i%j === 0) {
                flag = false;
            }
        }
        if (flag) myArr.push(i);
        else flag = true;
    }
    return myArr;
}
