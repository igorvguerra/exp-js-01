let numberOne = prompt(`Olá, Insira o primeiro número:`)
let numberTwo = prompt(`Agora insira o segundo número:`)

let sum = Number(numberOne) + Number(numberTwo)
let sub = Number(numberOne) - Number(numberTwo)
let mult = Number(numberOne) * Number(numberTwo)
let div = Number(numberOne) / Number(numberTwo)
let restDiv = Number(numberOne) % Number(numberTwo)

alert(`A soma dos dois números é : ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${mult}`)
alert(`A divisão dos dois números é: ${div.toFixed(4)}`)
alert(`O resto da divisão dos dois números é: ${restDiv}`)

if (sum % 2 == 0) {
    alert(`A soma dos dois números é par: ${sum}`)
}else {
    alert(`A soma dos dois números é impar: ${sum}`)
}

if(numberOne == numberTwo){
    alert(`Os números inseridos são iguais`)
}else{
    alert(`Os números inseridos são diferentes: ${numberOne} , ${numberTwo}`)
}