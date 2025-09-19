let arr = [10,12,15,0,8,7,70,20,30,40,50,60]

// Traversing of array
for (let i = 0; i<arr.length; i++){
    document.write(`Array of ${i}th element is ${arr[i]} <br><br>`)
}

// Accessing of array

document.write(arr[5])

// 

let data = [10,12,15,0,8,7,70,20,30,40,50,60]
        function getElement() {
            let inputBox = document.getElementById("input");
            let element = inputBox.value;

            if ( element >= 0 && element<data.length){
                alert(data[element]);
            }
            else{
                alert("Please enter valid input");
            }
            inputBox.value = ""
        }