function calculo() {
  const adicao = document.getElementById("adicao");
  const subtracao = document.getElementById("subtracao");
  const multiplicacao = document.getElementById("multiplicacao");
  const divisao = document.getElementById("divisao");

  const valorUm = Number(document.getElementById("valorUm").value);
  const valorDois = Number(document.getElementById("valorDois").value);

  adicao.textContent = valorUm + valorDois;
  subtracao.textContent = valorUm - valorDois;
  multiplicacao.textContent = valorUm * valorDois;
  divisao.textContent = valorUm / valorDois;
}

document.getElementById("valor").addEventListener("click", calculo);
