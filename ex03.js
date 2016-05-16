
            /* Faca uma funcao que receba um vetor de Strings
            via parametro e monte uma página contendo essas strings
            dentro de uma div para cada uma.    */
            
            function teste(){
                
                var stringVet = ["Olar!", 
                                 "Como vai?", 
                                 "Tá tranquilo!",
                                 "Tá favorável!",
                                 "É nois que voa!"];    
                ex03(stringVet);
            }
            
            function ex03(stringVet){
            
                var total = stringVet.length;
                var i = 0;
            
                while (i<total){
            
                    var div = document.createElement('div');
                    div.innerHTML = "<p>" + stringVet[i] + "</p>";
                    div.style.border = "1px solid #bdd";
                    document.body.appendChild(div);
                  i++;  
            
                }
            }
            teste();
       
