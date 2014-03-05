var x=0;  
var gogo=1;
var preguntas = [
  
  {
    "id": "id1",
    "preg": "2^3",
    "alt": [
      "8",
      "16",
      "6",
    ],
    "rpta":0    
  },
  {
    "id": "id2",
    "preg": "capital peru",
    "alt": [
      "trujillo",
      "lima",
      "callao",
    ],
    "rpta":1
  },
  {
    "id": "id3",
    "preg": "el mayor numero",
    "alt": [
      "1",
      "2",
      "3",
    ],
    "rpta":2    
  },
  
];

var mapa = {
 "px": [0,150,200,325,400,500,600,700,],
 "py": [0,200,100,300,400,500,600,700,],
    
}

var pY=0,pX=0;
  
function inicio(){
  var mybox;
  mybox=document.getElementsByName("esferas");  
  for(var x=0; x < mybox.length; x++)
  {
    mybox[x].style.position="absolute";
    mybox[x].style.left=mapa["px"][x]+"px";
    mybox[x].style.top=mapa["py"][x]+"px";
  }

}


  
window.onkeydown = mover;

function mover() {
  if(gogo){
   
  document.getElementById("cuestionario").style.display="none";  
  var keycode;    
  keycode = window.event.keyCode;  
  switch(keycode){
  case 37:
    //Left
    pX-=25;      
    break; 
  case 38:
    //Arriba    
    pY-=50;      
    break;
   case 39:
    //Derecha
    pX+=25;
    break;
   case 40: 
    //Abajo   
    pY+=50;    
    break;
    
  }
    document.getElementById("personaje").style.top=pY+"px";
    document.getElementById("personaje").style.left=pX+"px";
    verificar(); 
    
    
    
  }
  
}
    
function verificar(){
  for(cc=0;cc<8;cc++){
      if(mapa["px"][cc] == pX && mapa["py"][cc] == pY ){
       gogo=0;
       myf(); 
      }
  }
}
    
function myf(){        
  document.getElementById("cuestionario").style.display="block";  
  if(x>=3){
    x=0;
    return ; 
  }
  enun=document.getElementById("enunciado");
  myradio=document.getElementsByName("pregunta");      
  alt=document.getElementsByName("demo");  
  myrpta=preguntas[x]["rpta"];
  enun.innerHTML="Pregunta:<br>"+preguntas[x]["preg"];
  alt[0].innerHTML=preguntas[x]["alt"][0];
  alt[1].innerHTML=preguntas[x]["alt"][1];
  alt[2].innerHTML=preguntas[x]["alt"][2];    
    ++x;  
  
}
  
function validar(){  
  if(myradio[myrpta].checked){
    alert("Correcto") 
    document.getElementById("cuestionario").style.display="none";  
    gogo=1;
  }
  else
  {
    alert("lol")
    gogo=0;
  }
  
  
  }