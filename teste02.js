// Variáveis globais excessivas
var globalVar = "Eu sou global";
outraGlobal = "Eu também sou global (e implícita!)";

// Código duplicado
function fazerAlgo() {
  console.log("Fazendo algo...");
}

function fazerAlgoNovamente() {
  console.log("Fazendo algo..."); // Mesma lógica repetida
}

// Nomes de variáveis pouco claros
function processar(a, b) {
  var x = a + b;
  return x;
}

// Sem tratamento de erros
function funcaoPotencialmenteProblemática() {
  // Código que pode quebrar
  console.log(algumaVariavelInexistente.propriedade); // Acesso a propriedade de algo indefinido
}

// Uso excessivo de == em vez de ===
function comparar(valor) {
  if (valor == "1") {
    console.log("É igual a 1 (em valor)");
  }
}

// Comentários inúteis ou ausentes
// Código abaixo faz algo
function algo() {
  console.log("Algo feito");
}

// Mistura de estilos de programação
function exemploMistura() {
  // Alguns usam camelCase
  var minhaVariavel;

  // Outros usam snake_case
  var outra_variavel;

  // Espaçamento inconsistente
  if(true){
    console.log("Inconsistente");
  }
}

// Código "mágico" sem explicação
function codigoMagico(valor) {
  var resultado = valor * 42; // Por que 42?
  return resultado;
}

// Funções aninhadas excessivamente
function funcaoExterna() {
  function funcaoInterna1() {
    function funcaoInterna2() {
      console.log("Muito aninhado");
    }
    funcaoInterna2();
  }
  funcaoInterna1();
}

// Manipulação direta do DOM sem cuidado
function manipularDOMRuim() {
  document.getElementById("algumElemento").innerHTML = "<p>Novo conteúdo</p>"; // Sem sanitização, vulnerável a XSS
}