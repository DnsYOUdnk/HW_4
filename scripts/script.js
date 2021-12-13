// Задание 1

/* let arr = [1, 2, 3, 4, 5,],
    i;
for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
} */


// Задание 2

/* let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7],
    i;
for (i = 0; i < arr.length; i++) {
  if (-10 < arr[i] && arr[i] < -3 ) {
    console.log(arr[i]);
  }
}  */


// Задание 3
/* 
let arr = [],
    i = 23,
    result = 0;

while(i <= 57) {
  arr.push(i);
  i++
}
console.log(arr);

for(;i <=57; i++) {
  arr.push(i);
}
for (let j = 0; j < arr.length; j++ ) {
  result += arr[j];
}
console.log(arr);
console.log(result); */


// Задание 4

/* let arr = ['10','20','30','50','235','3000'],
    str = '';

for(let i = 0; i < arr.length; i++) {
    str = arr[i];
    if (str[0] == 1 || str[0] == 2 || str[0] == 5) {
      console.log(arr[i]);
    }
} */


// Задание 5

/* let arrWeekday = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];

for(let i = 0; i < arrWeekday.length; i++) {
  if (i < 5) {
    document.write(`${arrWeekday[i]} <br />`);
  } else {
    document.write(`<b>${arrWeekday[i]}</b> <br />`);
  }
}
 */


// Задание 6

/* let arr = [0,2323,'Hello',false,0101];
    
arr.push('My name');
console.log(arr);
console.log(arr[arr.length-1]); */


// Задание 7

/* let arr = [],
    number;
for (;;) {
  number = prompt('Enter number','');
  if (number == '' || number == null) {
    break;
    } else {
    arr.push(+number);
  } 
}
console.log(arr);
console.log(arr.sort()); */


// Задание 8

/* let arr = [12,false,'Текст',4,2,-5,0];
    
console.log(arr);
console.log(arr.reverse());

let arr2 = [12,false,'Текст',4,2,-5,0],
    z = arr.length-1,
    arrReverse = [];

while(z >= 0 ) {
  arrReverse.push(arr2[z]);
  z--;
}
console.log(arrReverse); */


// Задание 9

/* let arr = [5,9,21,,,9,78,,,,6],
    numberSpace = 0;
for(let i = 0; i < arr.length; i++) {
  if (arr[i] == undefined) {
    numberSpace++
  } 
}
console.log(numberSpace); */


// Задание 10

let arr = [48,9,0,4,21,2,1,0,8,84,76,8,4,0,13,2],
    arrSumNums = arr.slice(arr.indexOf(0)+1, arr.lastIndexOf(0)),
    sumNums = 0,
    numZero = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] == 0) {
      numZero++;
    } 
}

for(let i = 0; i < arrSumNums.length; i++) {
  sumNums += arrSumNums[i];
}

if (numZero < 2) {
    console.log(0);
  } else {
    console.log(arrSumNums);
    console.log(sumNums);
  }



// Задание 11

