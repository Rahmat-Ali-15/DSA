let arr = [10,15,20,25,30];
let element = 40;
let found = false;

for (let i = 0; i<arr.length; i++){
    if(arr[i] === element){
        found = true;
        break;
    }
}
console.log(found);