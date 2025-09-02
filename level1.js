// 1. Even or Odd Checker
let evenOddChecker = num => {
    return num % 2 === 0 ? "even" : "odd";
}

// 2. Sum of All Numbers from 1 to N
let sumOfAllNumbers = num => {
    let sum = 0;
    for (let i = 0; i <= num; i++){
        sum = sum +i;
    }
    return sum;
}

// 3. Count Vowels in a String
let countVowels = myString => {
    let count = 0;
    for (let i=0; i <= myString.length; i++){
        if (myString[i] == "a" || myString[i] == "i" || myString[i] == "e" || myString[i] == "o" || myString[i] == "u"){
            count++;
        }
    }
    return count;
}


// 4. reverse string
let reverseString = myString => {
    let reversed = "";
    for (let i = myString.length - 1; i >= 0; i--){
        reversed += myString[i];
    }
    return reversed;
}

// 5. Largest Number in an Array
let largestNumber = num => {
    let largest = 0;
    for (let i = 0; i <= num.length; i++){
        if (largest < num[i])  largest = num[i];
    }
    return largest;
}

// 6. fizzbuzz
let fizzbuzz = num => {
    for (let i = 1; i <= num; i++){
        switch (true) {
            case i%3==0 && i%5==0:
                console.log("FizzBuzz")
                break;
            case i%3==0:
                console.log("Fizz")
                break;
            case i%5==0:
                console.log("Buzz")
                break;
            default:
                console.log(i)
                break;
        }
    }
}

// 7. check palindrome
let checkPalindrome = myString => {
    let reversed = "";
    for (let i = myString.length - 1; i >= 0; i--){
        reversed += myString[i];
    }
     return reversed === myString ? "Palindrome" : "Not a palindrome";
}

// 8. remove duplicates
let removeDuplicates = num => {
    num = num.sort();
    let uniqueArray =[];
    for (let i = num.length -1; i >= 0; i--){
        for (let j = i-1; j >= 0; j--){
            // this condition will check elements are duplicate then it will keep 
            // popping unless the element is not duplicate
            if (num[j] === num[i]) {
                num.pop();
                i--;
            } else {
                break;
            }
        }
        // it will then store the unique element into new array.
        uniqueArray.push(num[i]);
        num.pop();
    }
    return uniqueArray;

}

// 9. calculate fatorial 

let calculateFactorial = num => {
    if (num === 0) return 1;
    return num * calculateFactorial(num-1);
}

// 10. Capitalize first letter of each word
let capitalizeFirstLetter = myString => {
    let capitalized = "";
    for (let i = 0; i < myString.length; i++){
        if (myString[i-1] === " " || myString[i-1] === undefined){
            capitalized += myString[i].toUpperCase();
        }else {
            capitalized += myString[i];
        }
    }
    return capitalized;
}

// 11. Fibonacci sequence
let fibonacciSequence = num => {
    let counter1 = 0, counter2 = 1, counter3 = 0;
    let fibonacci = [0 ,1];
    for (let i = 2; i < num; i++){
        counter3 = counter1 + counter2;
        counter1 = counter2;
        counter2 = counter3;
        fibonacci[i] = counter2;
    }
    return fibonacci;
}


