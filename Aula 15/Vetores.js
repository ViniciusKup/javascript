let num = [5, 8, 2, 9, 3]

num[5] = 1

num.push(7)//adiciona o 7 na última posição

console.log(`O nosso vetor é o ${num}`)
//console.log(`O numero da terceira posição é ${num[3]}`)

num.sort()//ordena os elementos de forma crescente

console.log(`O nosso vetor ordenado é o ${num}`)
console.log(`O vetor tem ${num.length} posições.`)

let pos = num.indexOf(8)//pesquisa o elemento 8 dentro do vetor num e devolve sua posição
if( pos == -1){ //caso o vetor não for encontrado ele retorna o valor -1
    console.log('O valor não foi encontrado! ')
} else {
    console.log(`O valor está na posição ${pos}`)
}

