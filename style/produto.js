/* Página de produto — usa o catálogo em catalogo.js */

// Lê o parâmetro "id" do URL (ex: produto.html?id=5) e converte para número inteiro
function obterIdDaUrl() {
  const id = parseInt(new URLSearchParams(window.location.search).get("id"), 10);
  // Se não for um número válido, devolve null
  return Number.isNaN(id) ? null : id;
}

// Devolve o código SVG do ícone do WhatsApp, usado no botão "Adquirir produto"
function iconeWhatsApp() {
  return `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="..."/>
  </svg>`;
}

// Recebe um objeto "produto" e constrói/injeta o HTML da página de detalhe
function renderizarProduto(produto) {
  // Atualiza o título da aba do navegador
  document.title = produto.nome + " — Farmácia";
  
  // Elemento raiz onde todo o conteúdo da página será inserido
  const raiz = document.getElementById("produto-raiz");
  
  // Procura a categoria do produto no objeto CATEGORIAS (definido noutro ficheiro)
  const cat = CATEGORIAS[produto.categoriaId];
  
  // Filtra o array PRODUTOS para obter até 8 produtos diferentes do atual,
  // para mostrar na secção "Também pode gostar"
  const outros = PRODUTOS.filter((p) => p.id !== produto.id).slice(0, 8);

  // Gera o HTML completo da página: breadcrumb, imagem, título, preço,
  // botão de compra via WhatsApp, descrição e produtos relacionados
  raiz.innerHTML = `
    <div class="breadcrumb">
      <a href="index.html">Início</a> /
      <a href="produtos.html${produto.categoriaId ? "?categoryId=" + produto.categoriaId : ""}">${cat ? cat.nome : produto.subcategoria || "Catálogo"}</a> /
      <span class="atual">${produto.nome}</span>
    </div>

    <div class="produto-principal">
      <div class="produto-imagem-wrap">
        ${produto.desconto ? `<span class="produto-badge-desconto">%</span>` : ""}
        <img src="${produto.imagem}" alt="${produto.nome}">
      </div>

      <div class="produto-info">
        <span class="produto-categoria">${cat ? cat.nome : ""}</span>
        <h1 class="produto-titulo">${produto.nome}</h1>
        <p class="produto-detalhe">${produto.detalhe}</p>

        <hr class="produto-divisor">

        <div class="produto-preco-bloco">
          <span class="produto-preco-rotulo">A PARTIR DE</span>
          <span class="produto-preco-valor">${formatarPreco(produto.preco)}</span>
        </div>

        <!-- Link para o WhatsApp, gerado dinamicamente pela função gerarLinkWhatsApp() -->
        <a class="btn-whatsapp" href="${gerarLinkWhatsApp(produto)}" target="_blank" rel="noopener">
          ${iconeWhatsApp()}
          Adquirir produto
        </a>
      </div>
    </div>

    <div class="produto-descricao">
      <h2>Descrição</h2>
      <p>${produto.descricao}</p>
    </div>

    <!-- Secção de produtos relacionados: percorre "outros" e cria um card para cada um -->
    <section class="relacionados">
      <h2>Também pode gostar</h2>
      <div class="relacionados-grid">
        ${outros.map((p) => `
          <a class="relacionado-card" href="produto.html?id=${p.id}">
            <div class="relacionado-imagem-wrap">
              <img src="${p.imagem}" alt="${p.nome}">
            </div>
            <span class="relacionado-nome">${p.nome}</span>
            <span class="relacionado-preco">${formatarPreco(p.preco)}</span>
            <span class="btn-ver-produto" style="margin-top:8px">Ver produto</span>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

// Mostra uma mensagem de erro quando o produto pedido não existe
function renderizarNaoEncontrado() {
  document.getElementById("produto-raiz").innerHTML = `
    <div class="produto-nao-encontrado">
      <h1>Produto não encontrado</h1>
      <p>O produto que procura não existe ou foi removido.</p>
      <a href="produtos.html">&larr; Voltar ao catálogo</a>
    </div>
  `;
}

// Quando a página carrega:
document.addEventListener("DOMContentLoaded", function () {
  // Obtém o ID do produto a partir do URL
  // e usa obterProduto() (definida noutro ficheiro) para ir buscar os dados desse produto
  const produto = obterProduto(obterIdDaUrl());
  
  // Se encontrar o produto, renderiza a página de detalhe; caso contrário, mostra erro
  if (produto) renderizarProduto(produto);
  else renderizarNaoEncontrado();
});