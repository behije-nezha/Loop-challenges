//Print odds 1-20

for( i=1; i<=20; i++){
    console.log(i);
}


//Decreasing Multiples of 3

for( i=100; i>0; i--){
    if( i%3==0){
        console.log(i);
    }
}


//Print the sequence
//Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

//first solution
//for( i=4; i<=4; i--){
//    console.log(i-1.5);
//}

//second solution
var i = 4;
while(i<5) {
    console.log(i-1.5);
    i--;
}

//Sigma
//Write code that will add all of the values from 1-100 onto some variable sum and 
//at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
var sum=0;
for (i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//Factorial
//Write code that will multiply all of the values from 1-12 onto some variable product and at the end
//console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

var factorial = 1;
for(var i=1; i<13; i++) {
    factorial *= i;
}
console.log(factorial);