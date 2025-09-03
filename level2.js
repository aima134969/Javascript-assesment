// 1. Count the occurence of each character
let countOccurrence = myStr => {
    let myObj = {}, keys = [], flag = false;
    for (let i = 0; i < myStr.length; i++){
        keys = Object.keys(myObj);
        for (let j=0; j < keys.length; j++){
            //checking if key is available in object
            if (keys[j] === myStr[i]){
                myObj[keys[j]]++;
                flag = true;
            }
        }
        if (flag === false){
            //creating new key
            myObj[myStr[i]] = 1;
        }else{
            flag = false;
        }
    }
    return myObj;
}

// 2. check anagrams
let checkAnagrams = (myStr1, myStr2) => {
    // sorting both strings
    let sorrtedmyStr1 = Array.from(myStr1).sort().join(""), sorrtedmyStr2 = Array.from(myStr2).sort().join("");
    if (sorrtedmyStr1 === sorrtedmyStr2){
        console.log("Its an anagram!");
    }
    else console.log("Its not an anagram!");
}

// 3. remove falsy values
let removeFalsy = myArr => {
    let resultArr = [];
    for (let i = 0; i < myArr.length; i++){
        if (myArr[i]){
            resultArr.push(myArr[i]);
        }
    }
    return resultArr;
}

// 4. find second largest 
let secondLargest = myArr => {
    let largest = 0, seclargest = 0;
    for (let i = 0; i < myArr.length; i++){
        if (myArr[i] > largest){
            seclargest = largest;
            largest = myArr[i];
        }
    }
    return seclargest;
}

// 5. Intersection of 2 arrays
let Intersection = (myArr1, myArr2) => {
    let resultArr = [];
    for (let i = 0; i < myArr1.length; i++){
       for (let j = 0; j < myArr2.length; j++){
            if (myArr1[i] === myArr2[j] && resultArr.findIndex(ind => ind === myArr1[i]) < 0){
                resultArr.push(myArr1[i]);
                break;
            } 
       }
    }
    return resultArr;
}

// 6. Flatten array
let flattenArray = (myArr, resultArr) => {
    for (let i = 0; i < myArr.length; i++){
        if (Array.isArray(myArr[i])){
            // recursive function
            flattenArray(myArr[i], resultArr);
        }
        else resultArr.push(myArr[i]);
    }
}

// 7. check all elements are unique
let uniqueElements = myArr => {
   myArr = myArr.sort();
   for (let i = 1; i < myArr.length; i++){
        if (myArr[i] === myArr[i-1]) return false;
   }
   return true;   
}

// 8. count number of words in a sequence
let countWords = myStr => {
    let count = 0;
    for (let i = 0; i < myStr.length; i++){
        if (myStr[i] === " ") count++;
    }
    return count+1;
//    let myArr = myStr.split(" ");
//    return myArr.length;
}

// 9. Generate random password
let randPassword = () => {
    let password = "", myStr = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < 8; i++){
        // generating a random character from mystr array and concatnating in my password
        password += myStr[Math.floor((Math.random()*myStr.length))];
    }
    return password;
}

// 10. Roman numerals to number 
let romanToNumber = myStr => {
    let myNumber = 0;
    //creating an object for roman numerals generic conversion
    let romanNumeral = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };
    for (let i = myStr.length-1; i >= 0; i--){
        // comparing if current index is greater than previous one then subtract
        if (romanNumeral[myStr[i]] > romanNumeral[myStr[i-1]]){
            myNumber += (romanNumeral[myStr[i]] - romanNumeral[myStr[i-1]])
            i--;
        } else {
            myNumber += romanNumeral[myStr[i]];
        }
    }
    return myNumber;
}
