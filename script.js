var iq=0;  
var pY=0,pX=0;
var gogo=1;
var W = screen.availWidth-60;
var H = screen.availHeight-140;
var myscore=0;


var mapa = {
 "px": [150,200,325,400,700,600,300,260,500,80,840],
 "py": [200,100,300,220,400,180,400,160,600,160,400],
    
}


  
function inicio(){  

  
  var mybox;
  var n=mapa["px"].length;
  /*if(document.getElementsByName("esferas").length>=n)
    return */
  mybox=document.getElementById("esferasbox");
  for(var i=0; i < n; i++){
      var itemp = document.createElement("img");
      itemp.src="images/esfera.jpg"
      itemp.name="esferas"
      itemp.id="esferas"
      mybox.appendChild(itemp);
  }
  mybox=document.getElementsByName("esferas");
  for(var x=0; x < mybox.length; x++)
  {
    mybox[x].style.position="absolute";
    mybox[x].style.left=mapa["px"][x]+"px";
    mybox[x].style.top=mapa["py"][x]+"px";
  }

}


  
window.onkeydown = mover; // solo funciona en chrome o chromium

function mover() {
  if(gogo){
    var keycode;    
    keycode = window.event.keyCode;  
    document.getElementById("cuestionario").style.display="none";  
  
  switch(keycode){
  case 37:
    //Left
    if(pX>0)
    pX-=20;      
    break; 
  case 38:
    //Arriba
    if(pY>0)
    pY-=20;      
    break;
   case 39:
    //Derecha
    if(pX<W)
    pX+=20;
    break;
   case 40: 
    //Abajo 
    if(pY<H)
    pY+=20;    
    break;
    default:
      return;
  }


document.getElementById("personaje").style.top=pY+"px"; 
document.getElementById("personaje").style.left=pX+"px";
  

 verificar(); 
    
    
    
  }
  
}
    
function verificar(){
  for(cc=0;cc<mapa["px"].length;cc++){
      if(mapa["px"][cc] == pX && mapa["py"][cc] == pY ){
       gogo=0;
       showform(); 
      }
  }
}
    
function showform(){        
  document.getElementById("cuestionario").style.display="block";  
  enun=document.getElementById("enunciado");
  myradio=document.getElementsByName("pregunta");      
  alt=document.getElementsByName("demo");  
  myrpta=data[iq+2]["answer"];
  enun.innerHTML="Pregunta:<br>"+data[iq+2]["question"];
  for (var i=0;i<5;i++)
  alt[i].innerHTML=data[iq+2]["alt"][i];
      
    ++iq;  
  
}
  

function validar(){  
    
  if(myradio[myrpta].checked){
    var x;
    x=document.getElementById("score");
    myscore++;    
    if(myscore%2==0){
      newmap();
    }
    x.value=myscore;        
    document.getElementById("cuestionario").style.display="none";  
    gogo=1;
  }
  else
  {
    alert("sigue intentando")
    gogo=0;
  }
  
  
  }



var mapnumber=1;

function newmap(){
  var invar="url('images/backg";
  invar=invar+mapnumber+".jpg')"
  document.body.style.backgroundImage=invar;
  mapnumber++;
}
