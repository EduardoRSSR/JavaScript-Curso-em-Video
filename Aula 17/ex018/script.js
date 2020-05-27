let numVet=[]
//window.document.getElementById('lista').style.visibility=('hidden')
function adicionar(){
    let num = Number(window.document.getElementById('txtnum').value);
    let list = window.document.getElementById('lista');
    var d2 = window.document.getElementById('d2');
    let proc = procurar(num)

    if(proc !=-1){
        window.document.getElementById('txtnum').value=''
        window.document.getElementById('txtnum').focus()
        window.alert('[ERROR] Valor já adicionado, por favor adicione outro valor.')
        }
        
    
    else{
        
        if(num=="" || num>100 || num<1){
            window.document.getElementById('txtnum').value=''
            window.document.getElementById('txtnum').focus()
           window.alert('[ERROR] Valor fora do limite, por favor adicione outro valor.')
            
        }
            else{ 
            d2.innerHTML="";
            let item =window.document.createElement('option')
            item.text=`Valor ${num} adcionado`;
            //item.value= `list${num}`
            list.appendChild(item);
               
            addVet(num);
            }
}
}
function procurar(num){

    let x=numVet.indexOf(num);
    return x;
}

function addVet(n){
    numVet.push(n);
}

function finalizar(){
    if(numVet==""){
        window.alert('Por favor insira valores antes de finalizar!')
    }
    else{
    var d2 = window.document.getElementById('d2');
    let tamanho = numVet.length;
    let maior = 0
    d2.innerHTML=(`Ao todo, temos ${tamanho} números cadastrados.<br>`)

    numVet.sort();

        for(let c=0;c<tamanho;c++){
            if(numVet[c]>maior){
            maior=numVet[c];
            }
        }      
    d2.innerHTML+=(`<p> O maior valor informado foi o ${maior}.</p>`)
    d2.innerHTML+=(`<p> O menor valor informado foi o ${numVet[0]}.</p>`)

    let soma=Soma(numVet,tamanho);
    let media =soma/tamanho;
    
    d2.innerHTML+=(`<p> A soma dos valores é igual a ${soma}.</p>`)
    d2.innerHTML+=(`<p> A média dos valores é igual a ${media}.</p>`)

}}

function Soma(x,tam){
let soma=0
    for(var i=0; i<tam ; i++){
        soma=soma+x[i];
    }
return(soma);
}

/*function Zerar(){

    let list = window.document.getElementById('lista');
    var d2 = window.document.getElementById('d2');
    d2.innerHTML=""
}*/ //esta incompleto.


        

