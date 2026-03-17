// Atividade 1 - mudar cor do título
var titulo = document.querySelector('#titulo');
var azul = document.querySelector('#azul');
var vermelho = document.querySelector('#vermelho');

azul.addEventListener('click', function() {
    titulo.style.color = 'blue';
});

vermelho.addEventListener('click', function() {
    titulo.style.color = 'red';
});

// Atividade 2 - mostrar / esconder mensagem
var botaoToggle = document.querySelector('#botaoToggle');
var mensagem = document.querySelector('#mensagem');

botaoToggle.addEventListener('click', function() {
    if (mensagem.style.display === 'none') {
        mensagem.style.display = '';
    } else {
        mensagem.style.display = 'none';
    }
});

// Atividade 3 - contador de caracteres
var texto = document.querySelector('#texto');
var contador = document.querySelector('#contador');

texto.addEventListener('input', function() {
    contador.textContent = 'Caracteres digitados: ' + texto.value.length;
});

// Atividade 4 - contador de cliques
var btnClique = document.querySelector('#btnClique');
var contCliques = document.querySelector('#contCliques');
var cliqueCount = 0;

btnClique.addEventListener('click', function() {
    cliqueCount = cliqueCount + 1;
    contCliques.textContent = 'Cliques: ' + cliqueCount;
});

// Atividade 5/6 - lista dinâmica e remoção
var itemInput = document.querySelector('#itemInput');
var btnAdd = document.querySelector('#btnAdd');
var lista = document.querySelector('#lista');

btnAdd.addEventListener('click', function() {
    var val = itemInput.value.trim();
    if (val === '') return;
    var li = document.createElement('li');
    li.textContent = val;
    lista.appendChild(li);
    itemInput.value = '';
});

lista.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        if (confirm('Remover este item?')) {
            e.target.remove();
        }
    }
});

// Desafio Hard - validação de campo
var nomeInput = document.querySelector('#nomeInput');
var btnEnviarNome = document.querySelector('#btnEnviarNome');
var msgNome = document.querySelector('#msgNome');

btnEnviarNome.addEventListener('click', function() {
    if (nomeInput.value.trim() === '') {
        msgNome.textContent = 'O campo nome é obrigatório';
        msgNome.style.color = 'red';
    } else {
        msgNome.textContent = 'Nome enviado com sucesso!';
        msgNome.style.color = 'green';
    }
});