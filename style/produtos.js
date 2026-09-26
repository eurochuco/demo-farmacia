document.addEventListener('DOMContentLoaded', function () {

    const params = new URLSearchParams(window.location.search);
    const termo = (params.get('q') || '').trim();
    const categoryId = params.get('categoryId');
    const marcaId = params.get('marcaId');
    const promoId = params.get('promoId');
    const subcategory = params.get('subcategory');

    const pageTitle = document.getElementById('pageTitle');
    const produtosTitulo = document.getElementById('produtosTitulo');
    const produtosSubtitulo = document.getElementById('produtosSubtitulo');

    const secaoCategorias = document.getElementById('secaoCategorias');
    const categoriasResultado = document.getElementById('categoriasResultado');

    const secaoMarcas = document.getElementById('secaoMarcas');
    const marcasResultado = document.getElementById('marcasResultado');

    const secaoProdutos = document.getElementById('secaoProdutos');
    const produtosResultado = document.getElementById('produtosResultado');

    const semResultados = document.getElementById('semResultados');

    let categoriasEncontradas = [];
    let marcasEncontradas = [];
    let produtosEncontrados = [];

    /* =========================================
       CASO 1: pesquisa livre pela barra de busca (?q=...)
       Procura em categorias, marcas e produtos ao mesmo tempo
    ========================================= */
    if (termo) {
        const termoLower = termo.toLowerCase();

        // Categorias cujo nome contém o termo
        categoriasEncontradas = Object.entries(CATEGORIAS)
            .filter(([id, cat]) => cat.nome.toLowerCase().includes(termoLower))
            .map(([id, cat]) => ({ id, ...cat }));

        // Marcas cujo nome ou descrição contêm o termo
        marcasEncontradas = Object.values(MARCAS)
            .filter(m => m.nome.toLowerCase().includes(termoLower) || m.descricao.toLowerCase().includes(termoLower));

        // Produtos: usa a função já existente em catalogo.js, que procura em
        // nome, detalhe, descrição, nome da marca, nome da categoria e subcategoria
        produtosEncontrados = filtrarProdutos({ q: termo });

        pageTitle.textContent = `Resultados para "${termo}" | Farmácia`;
        produtosTitulo.textContent = `Resultados para "${termo}"`;
        produtosSubtitulo.textContent =
            `${categoriasEncontradas.length} categoria(s), ${marcasEncontradas.length} marca(s) e ${produtosEncontrados.length} produto(s) encontrados`;
    }

    /* =========================================
       CASO 2: navegação vinda de uma categoria/marca/promoção específica
       (ex: categoria-detalhe.html, marca.html, promo-detalhe.html)
    ========================================= */
    else if (categoryId || marcaId || promoId || subcategory) {
        produtosEncontrados = filtrarProdutos({ categoryId, marcaId, promoId, subcategory });

        let tituloBase = "Produtos";
        if (categoryId && CATEGORIAS[categoryId]) tituloBase = CATEGORIAS[categoryId].nome;
        if (marcaId && MARCAS[marcaId]) tituloBase = MARCAS[marcaId].nome;
        if (subcategory) tituloBase = subcategory;

        pageTitle.textContent = `${tituloBase} | Farmácia`;
        produtosTitulo.textContent = tituloBase;
        produtosSubtitulo.textContent = `${produtosEncontrados.length} produto(s) encontrados`;
    }

    /* =========================================
       CASO 3: sem nenhum parâmetro — mostra o catálogo completo
    ========================================= */
    else {
        produtosEncontrados = PRODUTOS;
        pageTitle.textContent = 'Todos os produtos | Farmácia';
        produtosTitulo.textContent = 'Catálogo de produtos';
        produtosSubtitulo.textContent = `${produtosEncontrados.length} produto(s) disponíveis`;
    }

    /* =========================================
       RENDERIZA CATEGORIAS ENCONTRADAS
    ========================================= */
    if (categoriasEncontradas.length > 0) {
        secaoCategorias.style.display = 'block';
        categoriasEncontradas.forEach(cat => {
            const card = document.createElement('a');
            card.href = `categoria-detalhe.html?categoryId=${cat.id}`;
            card.classList.add('categoria-resultado-card');
            card.innerHTML = `
                <div class="categoria-resultado-img">
                    <img src="${cat.imagem}" alt="${cat.nome}">
                </div>
                <span class="categoria-resultado-nome">${cat.nome}</span>
            `;
            categoriasResultado.appendChild(card);
        });
    }

    /* =========================================
       RENDERIZA MARCAS ENCONTRADAS
    ========================================= */
    if (marcasEncontradas.length > 0) {
        secaoMarcas.style.display = 'block';
        marcasEncontradas.forEach(marca => {
            const card = document.createElement('a');
            card.href = `produtos.html?marcaId=${marca.id}`;
            card.classList.add('marca-resultado-card');
            card.style.backgroundColor = marca.corFundo || '#f4f4f4';
            card.innerHTML = `
                <div>
                    <div class="marca-resultado-logo">${marca.logoTexto}</div>
                    <p class="marca-resultado-desc">${marca.descricao}</p>
                </div>
            `;
            marcasResultado.appendChild(card);
        });
    }

    /* =========================================
       RENDERIZA PRODUTOS ENCONTRADOS
    ========================================= */
    if (produtosEncontrados.length > 0) {
        produtosEncontrados.forEach(p => {
            produtosResultado.insertAdjacentHTML('beforeend', cardProdutoHTML(p));
        });
    } else {
        secaoProdutos.style.display = 'none';
    }

    /* =========================================
       CASO NADA SEJA ENCONTRADO (nem categorias, nem marcas, nem produtos)
    ========================================= */
    if (categoriasEncontradas.length === 0 && marcasEncontradas.length === 0 && produtosEncontrados.length === 0) {
        secaoCategorias.style.display = 'none';
        secaoMarcas.style.display = 'none';
        secaoProdutos.style.display = 'none';
        semResultados.style.display = 'block';
    }

});