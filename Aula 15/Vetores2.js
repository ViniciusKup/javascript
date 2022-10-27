let valores = [8,5,7,2,9,3,1,4]
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])


//cria repetição para mostrar todas as posições
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/


//Otimizado para vetores e objetos
//para cada posição(pos) dentro de valores mostrar o seu elemento

valores.sort()
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

