/*
Artur-Mihk Peterson
31.10.2024
yl02
*/
//Kellaaeg
let tunnid = 2;
let minutid = 12;
let sekundid = 49;
let kell = tunnid + ":" + minutid + ":" + sekundid;
console.log(kell);
//Tsitaat
let tsitaat = "Alati on raskem võidelda usu, kui teadmiste vastu. -Adolf Hitler";
console.log(tsitaat);
//Mall
let enimi = "Tõnis";
let pnimi = "Kändmaa";
console.log(enimi,pnimi,"nimetähed on:",enimi.charAt(0),".",pnimi.charAt(0),".");

//Eposti muutmine
let epost = "karin.eegreid@network.com";
//Andmerida analüüs
let andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";

let parts = andmerida.split(",");
let email = parts[3];
let ip = parts[5];

let username = email.split("@")[0];
console.log (ip,username)
