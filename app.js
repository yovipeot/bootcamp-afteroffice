// let count;

// console.log(count); // undefined

// let isSeler = false;
// console.log(isSeler); // false

// var count = 5;
// console.log(count); // 5

// const a = 10;
// const b = 20;

// console.log(b); // 30

// let a = 1;

// console.log(a); // 1

// let nesString = `Hello nama saya "Yovian" saya berumur ${20 + 1} tahun. Saya tinggal di 'Jakarta'`;
// console.log(nesString);

// let fl1=5.3;
// let fl2=2.1;

// let a = true;
// let b = false;
// let col = fl1==fl2;

// console.log(col);

let newObject = {
    name: "Yovi Riszan",
    age: 21,
    isMentor: true
}

let objectArray = {
    name: "Yovi Riszan",
    age: 21,
    isMentor: true,
    hobbies: ["Coding", "Gaming", "Traveling"],
    address: {
        street: "Jl. Merdeka No. 10",
        city: "Jakarta",
        country: "Indonesia"
    }
}

// console.log(newObject.name);

let arreay1 = [
    "Yovi Riszan",
    '34',
    true,
    5.3,
    {name: "Yovi"},
    [1,2,3,4,5]
]

// console.log(arreay1[0]);
// console.log(arreay1[3]);

// console.log(objectArray.address.city);

let angka1 = 2;
let angka2 = 5;

// console.log(angka1 + angka2);
// console.log(angka1 - angka2);
// console.log(angka1 * angka2);
// console.log(angka1 / angka2);
// console.log(angka1 % angka2);
// console.log(angka1 ** angka2);

// console.log(angka1+=angka2);
// console.log(angka1-=angka2);
// console.log(angka1*=angka2);
// console.log(angka1/=angka2);
// console.log(angka1%=angka2);
// console.log(angka1=angka2);

// console.log(angka1==angka2);
// console.log(angka1===angka2);
// console.log(angka1!=angka2);
// console.log(angka1!==angka2);
// console.log(angka1>angka2);
// console.log(angka1<angka2);
// console.log(angka1>=angka2);
// console.log(angka1<=angka2);

// console.log(angka1 && angka2);
// console.log(angka1 || angka2);
// console.log(!angka1);

let isWeekend = false;
let isHoliday = false;

let willGoToBeach = isWeekend || isHoliday && !false;

// console.log(willGoToBeach); ;

let numberA = 10;
let numberB = 20;

// if (numberA == 10) {
//     console.log("Number A lebih besar dari Number B");
// }else if (numberA==5) {
//     console.log("Number A lebih kecil dari Number B");
// }else {
//     console.log("Number A sama dengan Number B");
// }

// if (isWeekend == true) {
//     console.log("Hari ini hari libur");
// }else {
//     console.log("Hari ini bukan hari libur");
// }

// switch (numberA) {
//     case 1:
//         console.log("Number A adalah 5");
//         break;
//     case 2:
//         console.log("Number A adalah 1");
//         break;
//     case 15:
//         console.log("Number A adalah 15");
//         break;
//     default:
//         console.log("Number A bukan 5, 10, atau 15");
//         break;
// }


// for (let index = 5; index > 0; index--) {
//     // console.log("Perulangan ke-"+index);
//     console.log(`Perulangan ke-${index}`);
// }

// let index = 0;
// while (index < 5) {
//     console.log("Perulangan ke-"+index);
//     index++;
// }

let variabel1 = 3;
// while (variabel1 > 1) {
//     console.log("hi");
//     variabel1--;
// }

// do {
//     console.log("Hello");
//     variabel1--;
// } while (variabel1 > 1);

// let object1 = {
//     name: "Yovi Riszan",
//     age: 21,
//     isMentor: true,
//     hobbies: ["Coding", "Gaming", "Traveling"],
// }

// let array1 = [
//     "Yovi Riszan",
//     '34',
//     true,
//     5.3,
//     {name: "Yovi"},
//     [1,2,3,4,5]
// ];

// // for (const key in object1) {
// //     // console.log(key);
// //     console.log(object1[key]);
// // }

// for (const element of array1) {
//     console.log(element);
// }

// let angka=2;

// while (angka < 5) {
//         console.log('angka sekarang'+angka)
//         angka++;
//     }

// kodingan penjumlahan

let angka11 = 11;
let angka12 = 12;
let angka13 = 13;

// console.log(angka11 + angka12);
// console.log(angka11 + angka13);
// console.log(angka12 + angka13);

let hasil = penjumlahan(angka11, angka12);
console.log(hasil);

function penjumlahan(a, b) {
    // console.log(a + b);
    return (a + b)-(a + a);
}