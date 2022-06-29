let dias=76;
let horas = 0;
let minutos = 00;
let segundos = 0;
cargarSegundo();

//Definimos y ejecutamos los segundos
function cargarSegundo(){
    let txtSegundos;

    if(segundos < 0){
        segundos = 59; 
    }

    //Mostrar Segundos en pantalla
    if(segundos < 10){
        txtSegundos = `0${segundos}`;
    }else{
        txtSegundos = segundos;
    }
    document.getElementById('segundos').innerHTML = txtSegundos;
    segundos--;

    cargarMinutos(segundos);
}

//Definimos y ejecutamos los minutos
function cargarMinutos(segundos){
    let txtMinutos;

    if(segundos == -1 && minutos !== 0){
        setTimeout(() =>{
            minutos--;
        },500)
    }else if(segundos == -1 && minutos == 0){
        setTimeout(() =>{
            minutos = 59;
        },500)
    }

    //Mostrar Minutos en pantalla
    if(minutos < 10){
        txtMinutos = `0${minutos}`;
    }else{
        txtMinutos = minutos;
    }
    document.getElementById('minutos').innerHTML = txtMinutos;
    cargarHoras(segundos,minutos);
}

//Definimos y ejecutamos las horas
function cargarHoras(segundos,minutos){
    let txtHoras;

    if(segundos == -1 && minutos == 0 && horas !== 0){
        setTimeout(() =>{
            horas--;
        },500)
    }else if(segundos == -1 && minutos == 0 && horas == 0){
        setTimeout(() =>{
            horas = 2;
        },500)
    }

    //Mostrar Horas en pantalla
    if(horas < 10){
        txtHoras = `0${horas}`;
    }else{
        txtHoras = horas;
    }
    document.getElementById('horas').innerHTML = txtHoras;
    cargardias(segundos,minutos,horas)
}


//Definimos y ejecutamos los dias
function cargardias(segundos,minutos,horas){
    let txtDias;

    if(segundos == -1 && minutos == 0 && horas == 0 && dias !== 0){
        setTimeout(() =>{
            dias--;
        },500)
    }else if(segundos == -1 && minutos == 0 && horas == 0 && dias == 0){
        setTimeout(() =>{
            dias = 2000;
        },500)
    }

    //Mostrar Horas en pantalla
    if(dias < 10){
        txtDias = `0${dias}`;
    }else{
        txtDias = dias;
    }
    document.getElementById('dias').innerHTML = txtDias;
}
//Ejecutamos cada segundo
setInterval(cargarSegundo,1000); 


