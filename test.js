nome = "João";
idade = 25;
cont = 0;

// Função com código duplicado e sem tratamento de erro
function mostrarMensagem() {
    document.getElementById("msg").innerHTML = "Olá, " + nome + "! Você tem " + idade + " anos.";
}

// Função que manipula o DOM sem verificações
function adicionarItem() {
    var lista = document.getElementById("lista");
    var item = document.createElement("li");
    item.innerHTML = "Item " + cont;
    cont++;
    lista.appendChild(item);
}

// Código sendo executado antes do DOM estar carregado
document.getElementById("btn").addEventListener("click", function() {
    mostrarMensagem();
    adicionarItem();
});

// Função que faz requisição AJAX sem verificar erros
function carregarDados() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            document.getElementById("dados").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

// Chamando funções sem necessidade
carregarDados();
mostrarMensagem();
