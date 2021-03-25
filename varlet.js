let x = 10; // x assigned to 10
var y = 20; // x assigned to 20

{
    let x = 30; // x value in this block is 30
    console.log("inBlock x = " + x); // inBlock x = 30
    var y = 40; // y value has changed from 20 to 40
    console.log( "inBlock y = " + y); // inBlock y = 40
}

console.log("x = "+ x);  // x = 10
console.log("y = " + y) // y = 40

//let x = 50;