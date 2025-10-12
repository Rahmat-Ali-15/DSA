let data = [20,5,10,45,2,0,8,30];

for (let i = 0; i<data.length; i++){
    for(let j = 0; j<data.length; j++){
        // console.log(data)
        if(data[j]>data[j+1]){
            let temp = data[j];
            data[j]=data[j+1];
            data[j+1] = temp;
        }
    }
}
console.log(data);