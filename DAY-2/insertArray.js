let arr = [10, 15, 20, 25]
let position = 2;
let el = 50;

for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= position) {
        arr[i + 1] = arr[i]
        if (i == position) {
            arr[i] = el
        }
    }
}
console.log(arr);

// Default function or method / Built in method

let arr1 = [5, 7, 8, 9, 11, 13];
arr1.splice(2, 0, 99);
console.log(arr1);

// arr.splice(element positin, deletable element position, new element);


// Insert element with text input and button

function insertEl() {
    let data = [10, 15, 20, 25];
    let position = document.querySelector("#position");
    let positionInp = position.value;

    let newEl = document.querySelector("#newEl");
    let newElInp = newEl.value;
    newElInp = +newElInp;

    for (let i = data.length - 1; i >= 0; i--) {
        if (i >= positionInp) {
            data[i + 1] = data[i];
            if (i == positionInp) {
                data[i] = newElInp
            }
        }
    }
    console.log(data);
    position.value = "";
    newEl.value = "";
}