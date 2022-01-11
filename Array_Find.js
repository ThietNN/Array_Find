let x = prompt("Enter a number");
let num = [-3,5,1,3,2,10];
for (let i=0;i<num.length;i++){
    if(x == num[i]){
        alert("Value " + num[i] + " was found at " + i )
    }
}