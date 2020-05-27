let num=[5,8,2,9,3];
num.sort();

num.push(1);
console.log(num)

//num.push(10);
//console.log(num);
//num.sort();
//console.log(num)
//console.log(`Vetor num é ${num}, com tamanho de ${num.length}`);
//console.log(`O primeiro valor do vetor é ${num[0]}.`);

//for(let pos=0 ; pos<num.length; pos++){
//    console.log(`Valor ${num[pos]}`)
//}

for(let pos in num){ //simplifca o for
    console.log(`Posição ${pos} - valor ${num[pos]}`)
}

var x = 3;
let posx = num.indexOf(x);
if (posx == -1){
console.log('O Valor não foi encontrado!')
}
else{
console.log(`O valor ${x} foi encontrado na posição ${posx}`) // mostra a posição do valor na string
}