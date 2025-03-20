/**
 * Calcula a área de um retângulo.
 *
 * @param {number} largura A largura do retângulo.
 * @param {number} altura A altura do retângulo.
 * @returns {number} A área do retângulo.
 */
function calcularAreaRetangulo(largura, altura) {
    if (typeof largura !== 'number' || typeof altura !== 'number') {
      throw new Error('Largura e altura devem ser números.');
    }
  
    if (largura < 0 || altura < 0) {
      throw new Error('Largura e altura não podem ser negativas.');
    }
  
    return largura * altura;
  }
  
  // Exemplo de uso
  try {
    const area = calcularAreaRetangulo(5, 10);
    console.log('Área:', area);
  
    const areaInvalida = calcularAreaRetangulo(-2, 8); // Isso lançará um erro
    console.log('Área inválida:', areaInvalida);
  } catch (erro) {
    console.error('Erro:', erro.message);
  }
  
  /**
   * Busca dados de uma API usando fetch.
   *
   * @async
   * @param {string} url A URL da API.
   * @returns {Promise<object>} Os dados da API em formato JSON.
   */
  async function buscarDadosDaAPI(url) {
    try {
      const resposta = await fetch(url);
  
      if (!resposta.ok) {
        throw new Error(`Erro na requisição: ${resposta.status}`);
      }
  
      const dados = await resposta.json();
      return dados;
    } catch (erro) {
      console.error('Erro ao buscar dados da API:', erro);
      throw erro; // Re-lança o erro para ser tratado em outro lugar, se necessário
    }
  }
  
  // Exemplo de uso da função assíncrona
  async function exemploUsoAPI() {
    try {
      const dados = await buscarDadosDaAPI('https://api.exemplo.com/dados');
      console.log('Dados da API:', dados);
    } catch (erro) {
      // Trata o erro, se necessário
    }
  }
  
  exemploUsoAPI();
  
  // Evitando variáveis globais e usando const e let
  function exemploEscopo() {
    const constante = 10; // Valor não pode ser alterado
    let variavel = 20; // Valor pode ser alterado
  
    if (true) {
      let outraVariavel = 30; // Escopo limitado ao bloco if
      console.log(constante + variavel + outraVariavel);
    }
  
    // console.log(outraVariavel); // Isso causaria um erro, pois outraVariavel não está definida aqui
  }
  
  exemploEscopo();
  
  // Usando template literals para strings complexas
  const nome = 'João';
  const idade = 30;
  
  const mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
  console.log(mensagem);
  
  // Funções de array modernas (map, filter, reduce)
  const numeros = [1, 2, 3, 4, 5];
  
  const numerosDobrados = numeros.map(numero => numero * 2);
  console.log(numerosDobrados);
  
  const numerosPares = numeros.filter(numero => numero % 2 === 0);
  console.log(numerosPares);
  
  const somaNumeros = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  console.log(somaNumeros);