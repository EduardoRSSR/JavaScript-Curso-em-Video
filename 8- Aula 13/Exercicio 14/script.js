function carregar(){
var track = new Date();
var horario = track.getHours();   
var minutos = track.getMinutes();
var msg = window.document.getElementById('d1');
var msg2 = window.document.getElementById('d2');
var img = window.document.getElementById('imag');
img.style.width="250px"
img.style.height="250px"
if (horario >= 0 && horario < 12){
    msg.innerHTML = (`Agora são ${horario} horas.`);
    img.src = 'bomdia.jfif';
    msg2.innerHTML = ('Bom dia!');
    document.body.style.background = '#e2cd9f';
}
else if(horario >= 12 && horario < 18){
    msg.innerHTML = (`Agora são ${horario} horas.`);
    img.src='boatarde.jfif';
    msg2.innerHTML = ('Boa Tarde!');
    document.body.style.background = '#b9846f';
} 
else{
    
    msg.innerHTML = (`Agora são ${horario} horas.`)
    img.src = 'boanoite.jfif'
    msg2.innerHTML = ('Boa Noite!');
    document.body.style.background = '#515154'
}

}

