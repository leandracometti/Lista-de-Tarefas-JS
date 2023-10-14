(function(){
    'use strict';

    //atrelas os elementos HTML
    var $inputText = document.getElementById('js-input_text');
    var $lista = document.getElementById('js-lista');
    var $btn = document.getElementById('js-btn');
    var $itemLista = $lista.querySelectorAll('li');

    //criando um evento no botao que adiciona tarefa
    $btn.addEventListener('click', addTarefa);

    //criando um evento na tecla enter para adionar tarefa
    $inputText.addEventListener('keyup', function(event){
        if(event.keyCode === 13){
            addTarefa();
        }
    });
 
     //função para adionar tarefa
    function addTarefa(){
        var $novaTarefa = document.createElement('li'); //variável que armazena um novo elemento
        var $textoTarefa = document.createTextNode($inputText.value); //variável que armazena temporaraiamente o valor do input

        $novaTarefa.appendChild($textoTarefa); //adicionando o texto na nova LI

        $lista.appendChild($novaTarefa); //adicionando a LI na UL

        $inputText.value = '';
        $inputText.focus();
    }

    //função para marcar como feito
    function marcarFeito(li){
        li.classList.toggle('feito');
    }

    //função para remover tarefa
    function removerTarefa($itemLista){
        if( confirm('Deseja excluir "' + $itemLista.textContent +'" ?') ){
            $itemLista.parentNode.removeChild($itemLista);
        }
    }

    
    //criando um evento na UL para marcar a LI como feita ou exclui-la através das funções
    $lista.addEventListener('click', function(event){
        if(event.target.nodeName === 'LI'){
            marcarFeito(event.target);

            removerTarefa(event.target);
        }
    })
})()