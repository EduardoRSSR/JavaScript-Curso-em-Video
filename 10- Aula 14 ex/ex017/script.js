d2.style.visibility="hidden";


function gerarTab(){
var num = Number(window.document.getElementById('txttab').value);
var tab = window.document.getElementById('seltab');
var d2 =window.document.getElementById('d2');

if(num=="" || num==0){
    window.alert('[ERRO] Por favor digite um número!')
    tab.innerHTML='';
    d2.style.visibility="hidden";

}
else{
    tab.innerHTML='';
    d2.style.visibility="visible";

for(var cont=0; cont<=10; cont++){
    let item=window.document.createElement('option')
    var res = cont*num;
        item.text=`${num} * ${cont} = ${res}`;
    item.value= `tab${cont}`
    tab.appendChild(item);
}
}}