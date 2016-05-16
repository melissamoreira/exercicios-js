/*
Exercício #12:
==============
Pede-se para fazer um script que digitado, em um formulário, um endereço hexa da 
forma #rrggbb onde 00 ≤ rr, gg, bb ≤ ff. Uma div criada em forma retânguar deverá 
ser mudada para a cor correspondente ao clicar no botão colorir. */


function colorir(){

  var formulario = document.forms["cor"];
  var hexa = formulario["hexadecimal"].value;
  var erro;
  if (hexa.length==6){
      
    for(var i=0; i<hexa.length; i++){
        
      if (parseInt(hexa[i], 16) >= 0 && parseInt(hexa[i],16) <= 255){
        erro = false;  
      } else {
        erro = true;
        alert("Valor inválido! \n Não corresponde a um valor hexadecimal.");
        break;

      }
    }//Fim For 
    
    document.querySelector('#divCor').style.backgroundColor= "#"+hexa;
    
  } else {
      
    alert("ERRO: É preciso ter 6 dígitos.");
  }
}

