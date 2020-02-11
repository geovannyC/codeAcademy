
let raceNumber = Math.floor(Math.random() * 1000);
let registro_temprano = true;
let edad_corredor = 23;

if (registro_temprano === true && edad_corredor > 18){
    raceNumber+=1000
}
if (edad_corredor>18 && registro_temprano === true) {
    console.log(`Tu numero de carrera es ${raceNumber} y correras a las 9:30`)
}
else if(edad_corredor>18 && registro_temprano == false){
console.log(`Tu numero de carrera es ${raceNumber} y correras a las 11:00`)
}
else if(edad_corredor < 18 ){
console.log(`Tu numero de carrera es ${raceNumber} y correras a las 12:30`)
}
else if (edad_corredor === 18)
{
console.log(`Tu numero de carrera es ${raceNumber} mira el registro`)
}