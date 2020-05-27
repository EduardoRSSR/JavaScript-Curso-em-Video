function verificar(){
    var data = new Date;
    var anoatual = data.getFullYear();
    var entradaano = window.document.getElementById('txtano');
    var ano = Number(entradaano.value);
    var mostra = window.document.getElementById('d2');
    var imagem = window.document.getElementById('imagem');
    var idade = anoatual-ano;
    var gen = document.getElementsByName('radsex');
    var genero ='';
    // var img = document.createElement('img'); //criar img dinamicamente por JS.
    // img.setAttribute('id', 'imagem'); //->para setar dinamicamente por JS.

if(entradaano.value.length == 0 || Number(entradaano.value) > anoatual || Number(entradaano.value) <=0 ){
    window.alert('[ERRO] Verifique a data e tente novamente.')
}

else{
       
    if(gen[0].checked){

        if(idade==0){
                mostra.innerHTML=(`Detectamos um bebe de ${idade} anos`);
                imagem.src=('foto-bebe-m.png');
               // img.setAttribute('src', 'foto-bebe-m.png'); //setar dinamicamente por JS.
                mostra.style.textAlign = 'center';             
        }
        else if(idade==1){
        mostra.innerHTML=(`Detectamos um bebe de ${idade} ano`);
        imagem.src=('foto-bebe-m.png');
        mostra.style.textAlign = 'center';
        }
        else if(idade>1 && idade <5){
        mostra.innerHTML=(`Detectamos um bebe de ${idade} anos`);
        imagem.src=('foto-bebe-m.png');
        mostra.style.textAlign = 'center';        
        }
        else if (idade<13){
            mostra.innerHTML=(`Detectamos uma criança de ${idade} anos.`);
            imagem.src=('foto-bebe-m.png');
            mostra.style.textAlign = 'center';        
        }
        
        else if (idade<22){
                mostra.innerHTML=(`Detectamos um jovem de ${idade} anos.`);
                imagem.src=('foto-jovem-m.png');
                mostra.style.textAlign = 'center';        
          
            }
        else if (idade<60){
            imagem.src=('foto-adulto-m.png');
            mostra.style.textAlign = 'center';             
            mostra.innerHTML=(`Detectamos um adulto de ${idade} anos.`);
            }
            else{
            imagem.src=('foto-idoso-m.png');
            mostra.style.textAlign = 'center';        
                mostra.innerHTML=(`Detectamos um idoso de ${idade} anos.`);
            }
        }   

    else{

 if(idade==0){
        mostra.innerHTML=(`Detectamos uma bebe de ${idade} anos`);
        imagem.src=('foto-bebe-f.png');
        mostra.style.textAlign = 'center';
    }

        else if(idade==1){
        mostra.innerHTML=(`Detectamos uma bebe de ${idade} ano`);
        imagem.src=('foto-bebe-f.png');
        mostra.style.textAlign = 'center';
        }
        else if(idade>1 && idade <5){
        mostra.innerHTML=(`Detectamos uma bebe de ${idade} anos`);
        imagem.src=('foto-bebe-f.png');
        mostra.style.textAlign = 'center';        
        }
        else if (idade<13){
            mostra.innerHTML=(`Detectamos uma criança de ${idade} anos.`);
            imagem.src=('foto-bebe-f.png');
            mostra.style.textAlign = 'center';        
        }
        
        else if (idade<22){
                mostra.innerHTML=(`Detectamos uma jovem de ${idade} anos.`);
                imagem.src=('foto-jovem-f.png');
                mostra.style.textAlign = 'center';        
          
            }
        else if (idade<60){
            imagem.src=('foto-adulto-f.png');
            mostra.style.textAlign = 'center';             
            mostra.innerHTML=(`Detectamos uma adulta de ${idade} anos.`);
            }
            else{
            imagem.src=('foto-idoso-f.png');
            mostra.style.textAlign = 'center';        
                mostra.innerHTML=(`Detectamos uma idosa de ${idade} anos.`);
            }
        }
       // mostra.appendChild(img); Para mostrar a imagem dinamicamente por JS
    }
        
    }