// Difference between asynchronous and synchronous programmin

/* Synchronous programming example
1-First run the console
2- Run the for loop
3- Run the last console
It will take a lot of time and we have to wait the completion of for loop to executing the last console.
so we can do it by using asynchronous programming
*/
console.log("This is Shainkey Aditya Jain");

for(let index=0;index<=4000;index++){
    console.log('number-----', index);
}
console.log("-----------Loop End------------");

/* Asynchronous programming example
1-First run the console
2- Run the last console
3- Run the for loop
*/

console.log("This is Shainkey Aditya Jain");

setTimeout(() => {
    for(let index=0;index<=4000;index++){
        console.log('number-----', index);
    }
}, 100);
console.log("-----------Loop End------------");
