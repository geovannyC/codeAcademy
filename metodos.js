// let spaceship = {
//     passengers: {
//         nombre1: 'martha',
//         nombre2 : 'martha2'
//     },
//     telescope: {
//       yearBuilt: 2018,
//       model: "91031-XLT",
//       focalLength: 2032 
//     },
//     crew: {
//       captain: { 
//         name: 'Sandra', 
//         degree: 'Computer Engineering', 
//         encourageTeam() { console.log('We got this!') },
//        'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
//     },
//     engine: {
//       model: "Nimbus2000"
//     },
//     nanoelectronics: {
//       computer: {
//         terabytes: 100,
//         monitors: "HD"
//       },
//       'back-up': {
//         battery: "Lithium",
//         terabytes: 50
//       }
//     }
//   };
//   let capFave = spaceship.crew.captain['favorite foods'][0]

//   console.log(capFave)

  let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
};
for(let i in spaceship.crew){
    console.log(`${spaceship.crew[i].name}: ${spaceship.crew[i].degree}`)
}