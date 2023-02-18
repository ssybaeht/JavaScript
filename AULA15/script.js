/*let num = [5, 2, 8, 9, 3]
num[5] = 2
num.push(54)
num.sort()
console.log(`Nosso vetor eh ${num} e possui ${num.length} elementos`)*/

let num = [1, 2, 3, 6, 5, 4, 7, 2]

/*for (let pos = 0; pos < num.length; pos++){
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`)
}*/
for(let pos in num){
    console.log(` A posicao ${pos} tem o valor ${num[pos]}`)
}
