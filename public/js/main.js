let question = prompt('Entrez un nombre')
switch (question%2) {
    case 0:
        console.log(`le nombre ${question} est paire`);
        break;
    default:
        console.log(`le nombre ${question} est impair`);
        break;
}

let question1 = prompt('Entrez un nombre entre 1 et 12')
switch (question1) {
    case 1:
        alert(` Vous êtes en ${question1}`)
        break;

    default:
        break;
}


//1

// let nb = parseInt(prompt('Entrez un nombre:'));

// console.log(nb % 2);
// console.log(nb % 2 == 0);

// switch (isNaN(nb)) {
//     case true:
//         console.log('Error -> NaN');
//         break;
//     case false:
//         switch (nb % 2 == 0) {
//             case true:
//                 console.log(`${nb} est un nombre paire`);
//                 break;
//             case false:
//                 console.log(`${nb} est un nombre impaire`);
//                 break;
//         }
//         break;
// }


//2 

// let mois = parseInt(prompt("Entrez le nombre qui correspond au mois que vous êtes?"))

// switch (isNaN(mois)) {
//     case true:
//         console.log("Error -> NaN");
//         break;
//     case false:
//         switch (mois) {
//             case 1:
//                 console.log('Janvier');
//                 break;
//             case 2:
//                 console.log('Fevrier');
//                 break;
//             case 3:
//                 console.log('Mars');
//                 break;
//             case 4:
//                 console.log('Avril');
//                 break;
//             case 5:
//                 console.log('Mai');
//                 break;
//         }
//         break;
// }

let mois = prompt("Entrez le nombre qui correspond au mois que vous êtes?")
switch (mois) {
    case "1":
        console.log('Janvier');
        break;
    case "2":
        console.log('fevrier');
        break
    default:
        console.log('inconnu');
        break;
}