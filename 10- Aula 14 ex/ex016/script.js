function Contar(){
var d1 = window.document.getElementById('d1');
var d2 = window.document.getElementById('d2');
var ini = Number(window.document.getElementById('txtini').value);

var fim = Number(window.document.getElementById('txtfim').value);
var passo = Number(window.document.getElementById('txtpasso').value);

if(ini == "" || ini == null || fim=="" || fim=="" || fim < ini){
    d2.innerHTML=('Impossível contar!');
}
else{
    //let conta=[];   pra fazer por vetor
    d2.innerHTML=('Contando:<br>');

    if(passo==0 || passo=="" || passo==null){
        window.alert('Passo igual a zero. Vamos considerar 1 para contar.');
        for(var cont=ini ; cont<=fim ; cont++){
        //    conta.push(cont); pra fazer por vetor
        d2.innerHTML+=(`${cont} \u{1F449}`);
    }

        
    }
    else{
        
        for(var cont=ini ; cont<=fim ; cont=cont+passo){
      //  conta.push(cont); pra fazer por vetor
    
      d2.innerHTML+=(`${cont} \u{1F449}`);
    }
        }
        
        d2.innerHTML+=('\u{1F3C1}');

    }
}

function Reset(){
    var r1 = window.document.getElementById('d2')
    window.document.getElementById('txtini').value=""
    window.document.getElementById('txtfim').value=""
    window.document.getElementById('txtpasso').value=""
    r1.innerHTML=('Preparando a contagem....')
}