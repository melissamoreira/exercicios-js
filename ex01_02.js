        /*
        EXERCÍCIO 1: FACA UMA FUNCAO QUE RECEBA UM VETOR
        DE ANIMAIS VIA PARAMETRO.
        POR EXEMPLO: [{nome : "Bidu", tipo : "Cachorro"},
                      {nome : "Garfield", tipo : "Gato"},
                      {nome : "Felix", tipo : "Gato"},
                      {nome : "Branco", tipo : "Gato"}]
        
        Mostre o nome dentro de uma div e o tipo
        dentro de outra. Para cada animal, uma div
        deve ser criada de modo dinâmico.
        -------------------------------------------------
        EXERCICIO 2:
        Para cada Cachorro e cada Gato crie estilos
        diferentes (aproveite o exercício 1).
        
        */
        
        function teste(){
    
            
            var animais = [{nome : "Bidu", tipo : "Cachorro"},
                          {nome : "Garfield", tipo : "Gato"},
                          {nome : "Felix", tipo : "Gato"},
                          {nome : "Branco", tipo : "Gato"}];    
            
            ex01(animais); 
            
        }
        
        
        function ex01(animais){
        
            var total = animais.length;
            for (var i=0; i<total; i++){
                
                 var divBicho = document.createElement("div");
                 var divNome = document.createElement("div");
                 var divTipo = document.createElement("div");
                 
                 divNome.innerHTML = "Nome: "+ animais[i].nome;
                 divTipo.innerHTML = "Tipo: "+ animais[i].tipo;
                 divBicho.appendChild(divNome);
                 divBicho.appendChild(divTipo);
                 
                 if( animais[i].tipo == "Gato" ){
                     
                     divBicho.style.backgroundColor = "#ebb";
                     
                 } else {
                     
                     divBicho.style.backgroundColor = "#cec";
                 }
                 
                 document.body.appendChild(divBicho);
            }
        } 
        teste();
       
