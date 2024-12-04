console.log("------walcome-------");
let arr = [1,2,3,4,5,6,7,"hallo", true];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.push("gaurav");
console.log(".....................");
arr.pop();

// arr.splice(start,count,addon)
arr.splice(2, 1);

const newArr = [5, 5, 6, 8, 3, 5, 4, 56, 4, 3];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i]%2 === 0) sum + arr;
}
console.log(arr);
