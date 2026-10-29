let vinhos = [];
const estoqueMinimo = 5;

function validarNome(nome) {
  if (!nome || nome.trim() === "") {
    alert("O nome do vinho não pode ser vazio.");
    return false;
  }
  return true;
}

function validarAno(safra) {
  const anoAtual = new Date().getFullYear();
  if (isNaN(safra) || safra < 1800 || safra > anoAtual) {
    alert(`Ano inválido. Por favor, digite um ano entre 1800 e ${anoAtual}.`);
    return false; //Outra sugestão do autocomplete e deu certo; dava pra fazer com 2026 e 1800 mas deixei assim já que funciona
  }
  return true;
}

function validarEstoque(estoque) {
  if (isNaN(estoque) || estoque < 0) {
    alert(
      "Quantidade em estoque inválida. Por favor, digite um número não negativo.",
    );
    return false;
  }
  return true;
}
function adicionarVinho(nome, tipo, safra, estoque) {
  vinhos.push({ nome, tipo, safra, estoque });
}

while (true) {
  let nome = prompt("Digite o nome do vinho:");
  if (!validarNome(nome)) {
    continue;
  }
  let tipo = (
    prompt("Digite o tipo do vinho (tinto, branco, rosé):") || ""
  ).toLowerCase();
  if (!["tinto", "branco", "rosé"].includes(tipo)) {
    alert(
      "Tipo de vinho inválido. Por favor, digite 'tinto', 'branco' ou 'rosé'.",
    );
    // Sugestão do autocomplete e deu certo
    continue;
  }
  let safra = prompt("Digite a safra do vinho:");
  if (!validarAno(safra)) {
    continue;
  }
  let estoque = parseInt(prompt("Digite a quantidade em estoque:"));

  adicionarVinho(nome, tipo, safra, estoque);

  let continuar = prompt("Deseja adicionar outro vinho? (s/n)");
  if ((continuar || "").toLowerCase() !== "s") {
    break;
  }
}

vinhos.forEach((vinho, index) => {
  console.log(`Vinho ${index + 1}:`);
  console.log(`Nome: ${vinho.nome.toUpperCase()}`);
  console.log(`Tipo: ${vinho.tipo}`);
  console.log(`Safra: ${vinho.safra}`);
  console.log(`Estoque: ${vinho.estoque}`);
  console.log("-------------------------");
});
// Tentativa do estoque baixo com filter
const estoqueBaixo = vinhos.filter((vinho) => vinho.estoque < estoqueMinimo);

if (estoqueBaixo.length > 0) {
  console.log("ATENÇÃO! Vinhos com estoque baixo:");
  estoqueBaixo.forEach((vinho) => {
    console.log(
      `- ${vinho.nome.toUpperCase()} (Estoque restante: ${vinho.estoque})`,
    );
  });
}
