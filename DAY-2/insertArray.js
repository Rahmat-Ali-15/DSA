let arr = [10,15,20,25]
let position = 2;
let el = 50;

for (let i = arr.length-1; i >= 0; i--){
    if (i>= position){
        arr[i+1] = arr[i]
        if(i == position){
            arr[i] = el
        }
    }
}
console.log(arr);

// Default function or method / Built in method

let arr1 = [5,7,8,9,11,13];
arr1.splice(2,0,99);
console.log(arr1);

// arr.splice(element positin, deletable element position, new element)