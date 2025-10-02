// searching element form an array
let arr = [10, 15, 20, 25, 30];
let element = 40;
let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
        found = true;
        break;
    }
}
// console.log(found);

// getting element index from an array;

let data = [10, 15, 20, 25, 30, 40, 50];
let el = 25;
let index = "";
for (let i = 0; i < data.length; i++) {
    if (data[i] === el) {
        index = i;
    }
}
console.log([index]);


// getting element index from an array by using input & button

const searchIndex = () => {
    let data = [10, 15, 20, 25, 30, 40, 50];
    let el = Number(document.getElementById("input_el").value);
    let index = "";

    // preventing from taking negative value
    if(el<0){
        alert("Element is not present");
        return
    }

    for (let i = 0; i < data.length; i++) {
        if (data[i] === el) {
            index = i;
            break
        }
    }
    console.log([index]);
}