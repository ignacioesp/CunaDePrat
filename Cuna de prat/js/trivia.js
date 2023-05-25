var contenedorPregunta= 
[
    {
        pregunta: '¿Cual fue el nombre de la embarcacion en la que Arturo Prat lucho en la guerra del Pacífico?',
        opcion: [
            "Corbeta Esmeralda",
            "Fragata Blanco Encalada",
            "Monitor Huáscar",
            "Buque de guerra cochrane"],
        respuesta: "Corbeta Esmeralda"
    },
    {
        pregunta: "¿En que año nacio Arturo Prat?",
        opcion: [
            "1840",
            "1848",
            "1859",
            "1856"],
        respuesta: "1848"
    },  
    {
        pregunta:"¿Cuál fue la causa de la muerte de Arturo Prat?",
        opcion: [
            "Enfermedad",
            "Acciedente",
            "Muerto en combate",
            "Vejez"],
        respuesta: "Muerto en combate"
    },    
    {
        pregunta:"¿Cuál es el nombre del padre de Arturo Prat ",
        opcion: [
            "Agustín Prat Barril",
            "José Prat Suarés",
            "Pedrito Pascal Prat",
            "Augusto Pinochet Chacón"],
        respuesta: "Agustín Prat Barril"
    },  
        {
        pregunta:"¿En que año murio Arturo Prat?",
        opcion: [
            "1875",
            "1880",
            "1878",
            "1879"],
        respuesta: "1878"
    },  
    {
        pregunta:"¿En qué batalla murió Arturo Prat?",
        opcion:[
            "Batalla de Chacabuco",
            "Batalla de Maipú",
            "Combate naval de Iquique",
            "Batalla De Yungay"],
        respuesta:"Combate naval de Iquique"
    },  
    {
        pregunta:"¿Cuál fue el rango militar de Arturo Prat?",
        opcion:[
            "Teniente",
            "Capitán de corbeta",
            "Almirante",
            "General"],
        respuesta:"Capita de corbeta"
    },   
    {
        pregunta:"¿Cuál fue la profesión de Arturo Prat además de ser militar?",
        opcion:[
            "Médico",
            "Abogado",
            "Ingeniero",
            "Profesor"],
        respuesta:"Abogado"
    },   
    {
        pregunta:"¿Cuál fue el nombre de la esposa de Arturo Prat?",
        opcion:[
            "María del Rosario Chacón Barrios",
            "Clara del Carmen Prat Barril",
            "Agustina Barril Rojas ",
            "Carmela Carvajal Briones"],
        respuesta:"Carmela Carvajal Briones"
    },    
    {
        pregunta:"¿Cuál fue el nombre de la madre de Arturo Prat?",
        opcion:[
            "Carmela Carvajal Briones",
            "María del Rosario Chacón Barrios",
            "Clara del Carmen Prat Barril",
            "Agustina Barril Rojas"],
        respuesta:"María del Rosario Chacón Barrios"
    }, 
    {
        pregunta:"¿Cuál fue el nombre de la escuela en la que Arturo Prat estudió??",
        opcion:[
            "Escuela de La Campana",
            "Escuela Naval del Estado",
            "Escuela Militar del Libertador Bernardo O’Higgins",
            "Escuela de Aviación del Capitán Manuel Ávalos Prado"],
        respuesta:"Escuela Naval del Estado"
    },    
    {
        pregunta:"¿Cuál fue el nombre del buque enemigo en el que Arturo Prat murió?",
        opcion:[
            "Corbeta Esmeralda",
            "Fragata Blanco Encalada",
            "Monitor Huascar",
            "Buque de guerra cochrane"],
        respuesta:"Corbeta Esmeralda"
    }, 
    {
        pregunta:"¿En qué lugar de Chile nació el héroe naval Arturo Prat?",
        opcion:[
            "Santiago",
            "Chillan viejo",
            "Ninhue",
            "Valparaiso"],
        respuesta:"Ninhue"
    },  
]


var pregunta = document.getElementById('pregunta');
var preguntaContenedor = document.getElementById('pregunta-contenedor');
var puntajeContenedor = document.getElementById('puntajeContenedor');
var opcion0 = document.getElementById('opcion0');
var opcion1 = document.getElementById('opcion1');
var opcion2 = document.getElementById('opcion2');
var opcion3 = document.getElementById('opcion3');

var siguiente= document.querySelector('.siguiente')
var puntos = document.getElementById('puntaje')
var span = document.querySelectorAll('span')
var i = 0;
var puntaje = 0;

function mostrarPregunta(){
    for(var a = 0; a<span.length; a++){
        span[a].style.background='none';
    }
    pregunta.innerHTML= 'P.'+(i+1)+' '+ contenedorPregunta[i].pregunta;

    opcion0.innerHTML=contenedorPregunta[i].opcion[0];
    opcion1.innerHTML=contenedorPregunta[i].opcion[1];
    opcion2.innerHTML=contenedorPregunta[i].opcion[2];
    opcion3.innerHTML=contenedorPregunta[i].opcion[3];

    stat.innerHTML= "Pregunta"+ ' '+(i+1)+' '+'de'+ ' ' + contenedorPregunta.length;

}

function calcularPuntaje(e){
    if(e.innerHTML===contenedorPregunta[i].respuesta && puntaje<contenedorPregunta.length)
    {
        puntaje=puntaje+1;
        document.getElementById(e.id).style.background='limaverde';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato'
    }
    setTimeout(siguientePregunta, 300);
}

function siguientePregunta(){
    if(i<contenedorPregunta.length-1){
        i=i+1;
        mostrarPregunta();
    }
    else{
        puntos.innerHTML=puntaje+ '/' + contenedorPregunta.length;
        preguntaContenedor.style.display='none';
        tablapuntaje.style.display='block';
    }
}

siguiente.addEventListener('click', siguientePregunta);

function salirTrivia(){
    location.reload();

}

function verRespuesta(){
    var respuestaContenedor = document.getElementById('respuestaContenedor');
    var respuestas = document.getElementById('respuestas');
    respuestaContenedor.style.display='block';
    tablapuntaje.style.display='none';

    for(var a=0; a<contenedorPregunta.length;a++)
    {
        var lista = document.createElement('li');
        lista.innerHTML= contenedorPregunta[a].respuesta;
        respuestas.appendChild(lista);
    }
}



mostrarPregunta();






































// const bd_juegos = [{

//     id:0,
//     pregunta:"¿Cual fue el nombre de la embarcacion en la que Arturo Prat lucho en la guerra del pacifico?",
//     op0:"Corbeta Esmeralda",
//     op1:"Fragata Blanco Encalada",
//     op2:"Monitor Huascar",
//     op3:"Buque de guerra cochrane",
//     correcta:"0"
// },
// {

//     id:1,
//     pregunta:"¿Cual fue el nombre de la embarcacion en la que Arturo Prat lucho en la guerra del pacifico?",
//     op0:"Corbeta Esmeralda",
//     op1:"Fragata Blanco Encalada",
//     op2:"Monitor Huascar",
//     op3:"Buque de guerra cochrane",
//     correcta:"0"
// },
// {

//     id:2,
//     pregunta:"¿Cual fue el nombre de la embarcacion en la que Arturo Prat lucho en la guerra del pacifico?",
//     op0:"Corbeta Esmeralda",
//     op1:"Fragata Blanco Encalada",
//     op2:"Monitor Huascar",
//     op3:"Buque de guerra cochrane",
//     correcta:"0"
// },
// {

//     id:3,
//     pregunta:"¿Cual fue el nombre de la embarcacion en la que Arturo Prat lucho en la guerra del pacifico?",
//     op0:"Corbeta Esmeralda",
//     op1:"Fragata Blanco Encalada",
//     op2:"Monitor Huascar",
//     op3:"Buque de guerra cochrane",
//     correcta:"0"
// },
// {

//     id:4,
//     pregunta:"¿Cual fue el nombre de la embarcacion en la que Arturo Prat lucho en la guerra del pacifico?",
//     op0:"Corbeta Esmeralda",
//     op1:"Fragata Blanco Encalada",
//     op2:"Monitor Huascar",
//     op3:"Buque de guerra cochrane",
//     correcta:"0"
// }
// ]

// let respuestas = [];

// let cantiCorrectas = 0;

// let numPregunta = 0;

// function cargarPreguntas(){
//     const pregunta = bd_juegos[numPregunta];

//     const contenedor = document.createElement("div");
//     contenedor.className = "contenedor-pregunta";
//     contenedor.id = pregunta.id;
//     const h2 = document.createElement("h2");
//     h2.textContent = pregunta.id + 1 +" - " + pregunta.pregunta;
//     contenedor.appendChild(h2);
//     const opciones = document.createElement("div");


//     const label1 = crearLabel("0",pregunta.op0)
//     const label2 = crearLabel("1",pregunta.op1)
//     const label3 = crearLabel("2",pregunta.op2)
//     const label4 = crearLabel("3",pregunta.op3)

//     opciones.appendChild(label1);
//     opciones.appendChild(label2);
//     opciones.appendChild(label3);
//     opciones.appendChild(label4);

//     contenedor.appendChild(opciones);
//     document.getElementById("juego").appendChild(contenedor);
// }


// //funcion que retornara los label con el contenido

// function crearLabel(num, txtOpcion){
//     const label = document.createElement("label");
//     label.id = "l" + numPregunta + num;
//     const input = document.createElement("input");
//     input.setAttribute("type", "radio")
//     input.name = "p" + numPregunta;
//     input.setAttribute("onClick", "selecionar(" + numPregunta + "," + num+")");
//     const span = document.createElement("span");
//     const correcion = document.createElement("span");
//     correcion.id = "p" + numPregunta + num;
//     span.textContent = txtOpcion;
//     label.appendChild(input);
//     label.appendChild(span);
//     label.appendChild(correcion);

//     return label;
// }
// //aqui cargamos las preguntas del json
//     for(i=0;i < bd_juegos.length; i++){
//         cargarPreguntas();
//         numPregunta++;

//     }

// function selecionar(pos, opElegida){
//     respuestas[pos] = opElegida;
// }

// let corregir = document.getElementById("corregir");
// corregir.onclick = function(){
//     for(i=0; i<bd_juegos.length;i++){
//         const pregunta = bd_juegos[i];
//         if(pregunta.correcta == respuestas[i]){
//             cantiCorrectas++;
//             let idCorreccion = "p" + i + pregunta.correcta;
//             document.getElementById(i).className = "contenedor-pregunta correcta";
//             document.getElementById(idCorreccion).innerHTML = "&check;";
//             document.getElementById(idCorreccion).className = "acierto";
//         }else{
//             let id = "p" + i + respuestas[i];
//             let idCorreccion = "p" + i + pregunta.correcta;
//             document.getElementById(i).className = "contenedor-pregunta incorrecta";
//             document.getElementById(id).innerHTML = "&#x2715;";
//             document.getElementById(id).className = "no-acierto";
//             document.getElementById(idCorreccion).innerHTML = "&check;";
//             document.getElementById(idCorreccion).className = "acierto";
//         }
//     }
// }


