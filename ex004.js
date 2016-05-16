
            /*
            Exercício #04
            =============
            Suponha que em uma página há uma div de cor-de-fundo qualquer, height 30 e width 5. 
            A cada segundo a width aumenta em 10 pixels. Quando a width da div ultrapassar a 
            window.innerWidth (width de sua janela) o valor deve voltar a 5. Essa ação deve parar apenas 
            quando houver estímulo do usuário (f5). Implemente esta situação. */
            
            //Versão A: Método setInterval()
            function ex04a(){

                var div = document.querySelector('div');
                var width = 5;
                var janela = window.innerWidth;
                var f = function(){

                    div.style.width = width+"px";

                    if (width < janela){
                        width += 10; 
                    } else {
                        width = 5;
                    }
                };
                
                setInterval(f, 100);
            }
            
            //Versão B: Método setTimeout()
            function ex04b(){
              var div = document.querySelector('div');
              var largura = 5;
              var janela = window.innerWidth;
              var f = function(){
                
                div.style.width = largura+"px";
                if (largura < janela){
                   largura += 10; 
                } else {
                    largura = 5;
                }
                
                //Dentro da função 'f' chamamos o método setTimeout() para gerar recursão
                setTimeout(f,100); //1000
              }; //Fim função 'f'
              
              //O método setTimeout estipula um tempo para início da execução da função
              //Logo, para gerar o loop da recursão, devemos chamá-lo também dentro da função
              setTimeout(f, 100); //1000
            }
            
            ex04b();
         
