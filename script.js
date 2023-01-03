// Exercises XP Ninja

// Exercice 1 : Nombre Aléatoire
// 1. Obtenez un nombre aléatoire entre 1 et 100.
let Aleatoire = Math.floor(Math.random() * 100)
console.log(`Nombre Aleatoire: ${Aleatoire}`)
// 2. Console.log tous les nombres pairs de 0 au nombre aléatoire.
for (let i = 0; i <= Aleatoire; i++)
    (i % 2 === 0) && console.log(i)

// Exercice 2 : Lettres Majuscules

// 1. Créez une fonction qui prend une chaîne comme argument.
// 2. Que la fonction retourne :
        // La chaîne, mais toutes les lettres des index pairs doivent être en majuscules.
        // La chaîne mais toutes les lettres des index impairs doivent être en majuscules.
function capitalize(str) {
    let Pair = ""
    let impairs = ""
    for (const i in str) {
        if (i % 2 === 0) {
            Pair += str[i].toUpperCase()
            impairs += str[i].toLowerCase()
        } else {
            impairs += str[i].toUpperCase()
            Pair += str[i].toLowerCase()
        }
    }

    return [Pair, impairs]
}
console.log(capitalize('abcdef'))

// Exercice 3 : Est-Ce Palindrome ?
// 1. Écrivez une fonction JavaScript qui vérifie si une chaîne est un palindrome ou non..
function isPalindrome(str) {
    str = str.toLowerCase()
    return str == str.split('').reverse().join('')
}
console.log(`isPalindrome(madam): ${isPalindrome('madam')}`)
console.log(`isPalindrome(Javascript): ${isPalindrome('javascript')}`)
console.log(`isPalindrome(anna): ${isPalindrome('anna')}`)

// Exercice 4 : Plus Grand Nombre
// 1. Créez une fonction appelée biggestNumberInArray(arrayNumber)qui prend un tableau comme paramètre et renvoie le plus grand nombre.
function biggestNumberInArray(arrayNumber) {
    let biggestNumber = arrayNumber[0] !== undefined && !isNaN(arrayNumber[0]) ? arrayNumber[0] : 0
    for (const number of arrayNumber) {
        if(Number(number) > biggestNumber)
            biggestNumber = Number(number)
    }
    return biggestNumber
}

console.log(`biggestNumberInArray([-1,0,3,100, 99, 2, 99]) = ${biggestNumberInArray([-1,0,3,100, 99, 2, 99])}`)
console.log(`biggestNumberInArray(['a', 3, 4, 2]) = ${biggestNumberInArray(['a', 3, 4, 2])}`)
console.log(`biggestNumberInArray([]) = ${biggestNumberInArray([])}`)



// Exercise 5: Unique Elements

// Write a JS function that takes an array and returns a new array with only unique elements.

function unique(list) {
    let result = [];
    for (const item of list) {
        if(result.indexOf(item) === -1)
            result.push(item)
    }

    return result
}

console.log(`unique([1,2,3,3,3,3,4,5]) = ${unique([1,2,3,3,3,3,4,5])}`)
