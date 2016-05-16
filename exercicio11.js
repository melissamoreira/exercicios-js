/*
Exercício #11:
==============
Um aluno da FATEC cursando uma disciplina de criptografia decidiu levantar a quantidade de letras ’A’ 
maiúsculas e minúsculas de palavras em um conjunto de palavras. Para ajudá-lo você deverá implementar 
as seguintes funções em javascript:

1. Uma função que recebe via parâmetro uma string e retorna e quantidade de letras ’A’ e ’a’;*/

function retornaAs(string){
    var stringSplitada = string.split('');
    var total = stringSplitada.length;
    var aMin = 0;
    var aMai = 0;
    for(var i=0; i<total; i++){
        if(stringSplitada[i] == 'a'){
            aMin ++;
        } else if (stringSplitada[i] == 'A'){
            aMai ++;
        } 
    }
    return aMai;
    //alert("A quantidade de 'a' na string '"+string+"' é igual a: "+aMin+
    //        "\nA quantidade de 'A' é igual a: "+aMai);
    
}

//retornaAs("MelissaaA");

/*
2. Uma função que escreve em html uma tabela de três colunas onde a primeira coluna deverá conter a 
palavra, a segunda a quantidade de letras ’A’ e a terceira uma porcentagem de letras ’A’ em relação ao 
total de letras da palavra a partir de um vetor p de strings recebido via parêmetro. Os headers deverão 
ser: palavra, qtde de letras e porcentagem.
OBS: Para se obter a porcentagem divida o número de letras ’A’ pelo total de letras das palavras, multiplique por 100 e concatene ’% ’. */

function tabelaPalavra(vet){
    
    var table = document.createElement('table');
    var tabela = "<thead><th>Palavra</th><th>Qtd. de A</th><th>Porcentagem de A</th></thead><tbody>";
    
    for (var i=0, total=vet.length; i<total; i++){
        
        var x = vet[i];
        var y = retornaAs(x);
        var pc = ((y/x.length)*100).toFixed(2); 
        
        tabela += "<tr><td>"+vet[i]+"</td><td>"+y+"</td><td>"+pc+"% </td></tr>"
    }
    
    tabela += "</tbody>";
    table.innerHTML = tabela;
    document.body.appendChild(table);
}



/*
3. Um script no corpo do html para testar a função acima. */

function inserirPalavra(){
    
    var vetor = [];
    var p = document.querySelector('#p1');
    var botao1 = document.querySelector('#b1');
    var botao2 = document.querySelector('#b2');
    var botao3 = document.querySelector('#b3');

    botao1.onclick =  function(){
        
        var formulario = document.forms['formulario'];
        var palavra = formulario['palavra'].value;
        vetor.push(palavra);
        alert('Palavra "'+palavra+'" inserida com sucesso!');
        formulario['palavra'].value = "";
    };    

    botao2.onclick =  function(){
        
        for (var i=0; i<vetor.length; i++){
            p.innerHTML += vetor[i]+"<br>";
        }
    };

    botao3.onclick =  function(){
        tabelaPalavra(vetor);
    };
    
}

inserirPalavra();
