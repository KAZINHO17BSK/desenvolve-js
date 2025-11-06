import readlineSync from "readline-sync"; //npm install readline-sync

const estoque = [];

const adicionarLivro = () => {
  const titulo = readlineSync.question("Título do livro: ");
  const autor = readlineSync.question("Autor: ");
  const quantidade = Number(readlineSync.question("Quantidade: "));

  if (estoque.some(l => l.titulo === titulo))
    return console.log(`📕 O livro "${titulo}" já existe no estoque.`);

  estoque.push({ titulo, autor, quantidade });
  console.log(`✅ Livro "${titulo}" adicionado com sucesso!\n`);
};

const removerLivro = () => {
  const titulo = readlineSync.question("Título do livro a remover: ");
  const i = estoque.findIndex(l => l.titulo === titulo);
  i !== -1 ? (estoque.splice(i, 1), console.log(`🗑️ Livro "${titulo}" removido.\n`))
           : console.log(`❌ Livro "${titulo}" não encontrado.\n`);
};

const atualizarQuantidade = () => {
  const titulo = readlineSync.question("Título do livro a atualizar: ");
  const novaQtd = Number(readlineSync.question("Nova quantidade: "));
  const livro = estoque.find(l => l.titulo === titulo);
  livro ? (livro.quantidade = novaQtd, console.log(`🔄 Quantidade atualizada!\n`))
        : console.log(`❌ Livro "${titulo}" não encontrado.\n`);
};

const listarLivros = () => {
  if (!estoque.length) return console.log("📭 O estoque está vazio.\n");
  console.log("\n📚 Livros disponíveis:");
  estoque.forEach((l, i) =>
    console.log(`${i + 1}. ${l.titulo} | ${l.autor} | ${l.quantidade} un.`)
  );
  console.log("");
};

while (true) {
  console.log(`
===== 📘 MENU DE ESTOQUE =====
[1] Adicionar livro
[2] Remover livro
[3] Atualizar quantidade
[4] Listar livros
[0] Sair
`);

  const opcao = readlineSync.question("Escolha uma opção: ");

  switch (opcao) {
    case "1": adicionarLivro(); break;
    case "2": removerLivro(); break;
    case "3": atualizarQuantidade(); break;
    case "4": listarLivros(); break;
    case "0":
      console.log("👋 Encerrando o sistema...");
      process.exit();
    default:
      console.log("❌ Opção inválida. Tente novamente.\n");
  }
}
