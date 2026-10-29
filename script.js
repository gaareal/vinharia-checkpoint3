let vinhos = [];
const estoqueMinimo = 5;

function validarNome(nome) {
  if (!nome || nome.trim() === "") {
    alert("O nome do vinho não pode ser vazio.");
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
  let estoque = parseInt(prompt("Digite a quantidade em estoque:"));

  adicionarVinho(nome, tipo, safra, estoque);

  let continuar = prompt("Deseja adicionar outro vinho? (s/n)");
  if ((continuar || "").toLowerCase() !== "s") {
    break;
  }
}

vinhos.forEach((vinho, index) => {
  console.log(`Vinho ${index + 1}:`);
  console.log(`Nome: ${vinho.nome}`);
  console.log(`Tipo: ${vinho.tipo}`);
  console.log(`Safra: ${vinho.safra}`);
  if (vinho.estoque < estoqueMinimo) {
    console.log("ATENÇÃO: Estoque baixo! Estoque atual: " + vinho.estoque);
  } else {
    console.log(`Estoque: ${vinho.estoque}`);
  }
  console.log("-------------------------");
});
