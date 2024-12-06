/*
Artur-Mihk Peterson
21.11.2024
yl03
*/

//sõidu kiirus
let kaugus = 100;

let kiirus = 63;

let soidukiirus = kaugus / kiirus;

console.log('Sõidupikkus:  ',soidukiirus,' tundi');

//leheküljed

let postitused = 137;
let postlk = 10;

let leheküljed = Math.ceil(postitused / postlk);
console.log(leheküljed);

//elektrihind

let serverivoim = 400;
let elektrihind = 9.69;

let voimkw = serverivoim / 1000;

let tunnihind = (voimkw * elektrihind) / 100;

console.log(`serveri jooksmine tund aega maksab: ${tunnihind.toFixed(2)}€`);