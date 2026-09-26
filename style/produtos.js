// Espera que todo o HTML da página esteja carregado antes de executar o script
document.addEventListener("DOMContentLoaded", function () {
    
    // Lê os parâmetros presentes no URL (ex: produtos.html?q=aspirina&categoryId=1)
    const params = new URLSearchParams(window.location.search);
    
    // Obtém o termo de pesquisa "q" do URL; se não existir, usa string vazia
    const q = params.get("q") || "";
    
    // Obtém o ID da categoria, se presente no URL
    const categoryId = params.get("categoryId");
    
    // Obtém a subcategoria, se presente no URL
    const subcategory = params.get("subcategory");
    
    // Chama a função que filtra os produtos com base nos critérios recolhidos
    const lista = filtrarProdutos({ q, categoryId, subcategory });

    // Guarda referências aos elementos do DOM que vão ser atualizados
    const titulo = document.getElementById("produtosTitulo");       // título da página de produtos
    const descricao = document.getElementById("produtosDescricao"); // texto com contagem de resultados
    const grelha = document.getElementById("produtosGrelha");       // contentor onde os cards de produtos são inseridos
    const pesquisa = document.getElementById("headerSearch");       // campo de pesquisa no cabeçalho

    // Se existir um campo de pesquisa no cabeçalho e houver um termo "q",
    // preenche esse campo com o valor pesquisado (mantém o estado visível ao utilizador)
    if (pesquisa && q) pesquisa.value = q;

    // Define o título/heading da página, com prioridade:
    // 1) subcategoria, 2) nome da categoria, 3) termo de pesquisa, 4) título genérico
    let heading = "Catálogo de produtos";
    if (subcategory) heading = subcategory;
    else if (categoryId && CATEGORIAS[categoryId]) heading = CATEGORIAS[categoryId].nome;
    else if (q) heading = `Resultados para “${q}”`;

    // Atualiza o texto do título na página
    titulo.textContent = heading;
    
    // Atualiza a descrição com o número de produtos encontrados,
    // ajustando o singular/plural consoante a quantidade
    descricao.textContent = `${lista.length} produto${lista.length === 1 ? "" : "s"} encontrado${lista.length === 1 ? "" : "s"}`;
    
    // Atualiza o título da aba do navegador (tab do browser)
    document.title = `${heading} | Farmácia`;

    // Se não houver produtos que correspondam aos critérios...
    if (!lista.length) {
        // ...mostra uma mensagem de "sem resultados" com links alternativos
        grelha.innerHTML = `
            <div class="produtos-vazio">
                <p>Não encontrámos produtos com estes critérios.</p>
                <p><a href="produtos.html">Ver todo o catálogo</a> · <a href="categorias.html">Explorar categorias</a></p>
            </div>`;
        return; // termina a execução aqui, não continua para gerar os cards
    }

    // Caso existam produtos, gera o HTML de um "card" para cada produto
    // e insere tudo dentro da grelha de produtos
    grelha.innerHTML = lista.map((p) => cardProdutoHTML(p)).join("");
});