function a(x, y) { // a(5,5)
    return 5; //5
}
console.log(a(5, 5)) //5

//------------------------------------------------

function a(x, y) { // a(2,2) | a(6,8)
    z = [] // z[2,2,5] | [6,8,5]
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z); //[2,2,5] | [6,8,5]
    return z; //[2,2,5] | [6,8,5]
}
b = a(2, 2) //[2,2,5]
console.log(b); //[2,2,5]
console.log(a(6, 8)); //[6,8,5]
//[2,2,5] , [2,2,5] , [6,8,5] , [6,8,5]
//---------------------------------------------------

function a(x) { // a(2)
    z = []; // [2]->[]-> [2,2]
    z.push(x);
    z.pop();
    z.push(x);
    z.push(x);
    return z; //[2,2]
}
y = a(2); //[2,2]
y.push(5); //[2,2,5]
console.log(y); //[2,2,5]
//-----------------------------------------------------

function a(x) { // ([2,3,4,5])
    if (x[0] < x[1]) { //x [2] < x[3]
        return true; // true
    } else {
        return false;
    }
}
b = a([2, 3, 4, 5])
console.log(b); // true

//---------------------------------------------------------

function a(x) { // ([1,2,3,4])               | x.length = 4
    for (var i = 0; i < x.length; i++) { // i=0 < 4 -> i=1<4 -> i=2<4 -> i=3<4
        if (x[i] > 0) { // x[1]>0 -> 2>0 -> 3>0 ->4>0
            x[i] = "Coding"; // ["coding","coding","coding","coding"]
        }    
    }    
    return x; //["coding","coding","coding","coding"]
}
console.log(a([1, 2, 3, 4])) //["coding","coding","coding","coding"]

//-----------------------------------------------------------

function a(x) { // ([5,7,-1,4])          | //x.length=4
    for (var i = 0; i < x.length; i++) { // i=0<4 -> i=1<4 ->i=2<4 ->i=3<4
        if (x[i] > 5) { // 5>5 -> 7>5 -> -1>5 -> 4>5
            x[i] = "coding"; //[5,"coding",-1,4]
        } else if (x[i] < 0) { //5<0 ->-1<0 -> 4<0
            x[i] = "dojo"; //[5,"coding","dojo",4]
        }    
    }    
    return x; // [5,"coding","dojo",4]
}
console.log(a([5, 7, -1, 4])) //[5,"coding","dojo",4]

//------------------------------------------------------------

function a(x) { //([5,10])
    if (x[0] > x[1]) { //5>10
        return x[1]; //x[1] = 10
    }
    return 10; // 10
}
b = a([5, 10])
console.log(b); //10

//---------------------------------------------------------------

function sum(x) { // [0]                     | x.length=1
    sum = 0;
    for (var i = 0; i < x.length; i++) { // i=0<1 -> i=1< 1
        sum = sum + x[i]; // 0= 0+0 -> 0= 0+1
        console.log(sum);
    }
    return sum;
}

//---------------------------------------------------------------
//1) Analiza los valores de un array y obtén el promedio (average) de esos valores.
function printAverage(x) {
    sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i];
    }
    return (sum / x.length);
}
y = printAverage([1, 2, 3]);
console.log(y); // should log 2

y = printAverage([2, 5, 8]);
console.log(y); // should log 5

//-------------------------------------------------------------------
//2) Crea un array con todos los enteros impares (odd integers) entre 1 y 255 (inclusive)
var x = [];

function returnOddArray() {
    for (var i = 0; i <= 255; i++) {
        if (i % 2 == 1) {
            x.push(i);
        }
    }
    return x;
}

y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]
//---------------------------------------------------------------------
//3) Cuadra cada valor con un array dado, obteniendo el mismo array con valores cambiados..
function squareValue(x) {
    for (i = 0; i < x.length; i++) {
        x[i] = x[i] * x[i];
    }
    return x;
}
y = squareValue([1, 2, 3]);
console.log(y); // should log [1,4,9]

y = squareValue([2, 5, 8]);
console.log(y); // should log [4,25,64]