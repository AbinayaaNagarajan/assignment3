//console.log('hello');


//Take an array of numbers and return the sum.
//Take an array of numbers and return the average.
function arrSum(){
    let x = [0, 2, 4, 6];
    let sum = x[0]+x[1]+x[2]+x[3];
    let avg = sum / x.length;
    console.log(sum);
    console.log(avg);
    return avg;
}

arrSum();

//Take an array of strings and return the longest string.

function arrStrings(){

    let i = ['Hello', 'Hello functions', 'bye functions'];
    let lgstr = '' ;

    for (let str of i){
        if (str.length > lgstr.length){
            lgstr = str;
        }
    }
  
    console.log ('Longest string is ' + lgstr);
    return lgstr;
}
arrStrings();

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 

function arrStrings1() {
    let inputArray = ['cat', 'dog', 'mat', 'function', 'javascript'];
    let minLength = 3;

    let lgstr1 = [];

    for (let str of inputArray) {
        if (str.length > minLength) {
            lgstr1.push(str);
        }
    }

    console.log("Strings longer than", minLength, "are:", lgstr1);
    return lgstr1;
}

arrStrings1();


 
//Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function printNumbers(n) {
    if (n < 1) {
        return;   
    }

    printNumbers(n - 1);
        console.log(n);
}
printNumbers(5);

/*Sort the array by age.
Filter the array to remove entries with an age greater than 50.
Map the array to change the “occupation” key to “job” and increment every age by 1.
Use the reduce method to calculate the sum of the ages.
Then use the result to calculate the average age.*/

// Sample data
let data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Step 1: Sort the array by age
let sortedByAge = data.sort(function (a, b) {
    return a.age - b.age;
});

console.log("Sorted by age:", sortedByAge);

// Step 2: Filter entries with age less than or equal to 50
let filteredByAge = sortedByAge.filter(function (entry) {
    return entry.age <= 50;
});

console.log("Filtered by age (<= 50):", filteredByAge);

// Step 3: Map to change key and increment age
let mappedData = filteredByAge.map(function (entry) {
    return {
        id: entry.id,
        name: entry.name,
        job: entry.occupation,
        age: Number(entry.age) + 1
    };
});

console.log("Mapped data:", mappedData);

// Step 4: Calculate the sum of ages using reduce
let sumOfAges = mappedData.reduce(function (total, entry) {
    return total + entry.age;
}, 0);

console.log("Sum of ages:", sumOfAges);

// Step 5: Calculate the average age
let averageAge = sumOfAges / mappedData.length;

console.log("Average age:", averageAge);


//Part 3 


function incrementAge(obj) {
    // obj has an age field, set to 0 if not present
    obj.age = obj.age || 0;

    // Increment age
    obj.age++;

    // Add or update updated_at field with the current time
    obj.updated_at = new Date();

    return obj;
}

// Function 2: Make a copy of the object, increment age in the copy, and return the copy
function incrementAgeWithCopy(obj) {
    // Create a shallow copy of the object
    let copy = Object.assign({}, obj);

    //  copy has an age field, set to 0 if not present
    copy.age = copy.age || 0;

    // Increment age in the copy
    copy.age++;

    // Add or update updated_at field with the current time
    copy.updated_at = new Date();

    return copy;
}

let person = { name: "John" };

//  Function 1
console.log("Original Object (Function 1):", incrementAge(person));

// Function 2
console.log("Original Object:", person); // Original object remains unchanged
console.log("Copied Object (Function 2):", incrementAgeWithCopy(person));

