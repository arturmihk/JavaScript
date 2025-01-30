let email = "mario.katus@yandeks.amerika";

// email kontroll
if (!email.includes("@")) {
    console.log("Vigane aadress, peab sisaldama '@' märki.");
} else {
    // tükeldame emaili
    let [kasutajanimi, servernimi] = email.split("@");
    let [server, ...domeen2] = servernimi.split(".");
    let domeen = domeen2.join(".");
    let eesnimi = kasutajanimi.split(".");
    
    // Tervitus asjandus
    console.log(`Tere ${eesnimi}, sinu email on server ${server} serveris ja domeeniks on sul ${domeen}`);
}
