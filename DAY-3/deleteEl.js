let arr = [10,15,20,25,30];
let position = 2;
for(let i = position; i<arr.length; i++){
    arr[i] = arr[i+1];

}
arr.length = arr.length-1
// console.log(arr);


// Deleting array element by using input & button

function deleteEl() {
    let data = [20,30,40,50,60,100,120,800];
    let position = Number(document.querySelector(".input-position").value);

    if(position<0 || position>=data.length){
        alert("Invalid Position");
        return
    }
    for(let i = position; i<data.length; i++){
        data[i]=data[i+1];
    }
    data.length = data.length-1;
    console.log(data)
}