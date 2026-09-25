document.addEventListener('DOMContentLoaded', function () {

    /* =========================================
       BASE DE DADOS DAS CATEGORIAS
    ========================================= */
    const categorias = {
        18: {
            nome: "Medicamentos",
            subcategorias: [
                { nome: "Sujeitos a receita médica", imagem: "../style/img/medicamentos.jpg" },
                { nome: "Não sujeitos a receita médica", imagem: "../style/img/medicametos.jpg" }
            ]
        },
        11: {
            nome: "Nutrição",
            subcategorias: [
                { nome: "Alimentação por sonda e suporte nutricional", imagem: "../style/img/sonda.jpg" },
                { nome: "Alimentos biológicos e sem glúten", imagem: "../style/img/non-gluten.jpg" },
                { nome: "Nutrição clínica e adaptada", imagem: "../style/img/clinical-nuctrition.jpg" }
            ]
        },
        17: {
            nome: "Saúde Animal",
            subcategorias: [
                { nome: "Medicamentos e cuidados veterinários", imagem: "../style/img/veterinario.jpg" },
                { nome: "Produtos de uso veterinário", imagem: "../style/img/produto-veterinario.jpg" }
            ]
        },
        6: {
            nome: "Bebé e Mamã",
            subcategorias: [
                { nome: "Higiene e cuidados do bebé", imagem: "../style/img/higiene.jpg" },
                { nome: "Alimentação infantil", imagem: "../style/img/kids-food.jpg" },
                { nome: "Acessórios e equipamentos do bebé", imagem: "../style/img/bebes-acess.jpg" },
                { nome: "Mamã e pré-mamã", imagem: "../style/img/mama.jpg" }
            ]
        },
        4: {
            nome: "Beleza e Cuidados Pessoais",
            subcategorias: [
                { nome: "Rosto", imagem: "../style/img/rosto.jpg" },
                { nome: "Corpo", imagem: "../style/img/corpo.jpg" },
                { nome: "Perfumes", imagem: "../style/img/perfumes.jpg" },
                { nome: "Cabelo", imagem: "../style/img/cabelo.jpg" },
                { nome: "Maquilhagem", imagem: "../style/img/maquilhagem.jpg" },
                { nome: "Acessórios de cosmética", imagem: "../style/img/acessorios.jpg" },
                { nome: "Cuidados para pés e mãos", imagem: "../style/img/pesmaos.jpg" },
                { nome: "Higiene e cuidado oral", imagem: "../style/img/bocal.jpg" },
                { nome: "Cuidados olhos e ouvidos", imagem: "../style/img/olhos.jpg" },
                { nome: "K-Beauty", imagem: "../style/img/k-beauty.jpg" }
            ]
        },
        5: {
            nome: "Protecção Solar",
            subcategorias: [
                { nome: "Protetores solares", imagem: "../style/img/protetor-solar.jpg" },
                { nome: "Pós-solar", imagem: "../style/img/pos-solares.jpg" },
                { nome: "Bronzeadores", imagem: "../style/img/bronzeadores.jpg" }
            ]
        },
        16: {
            nome: "Primeiros Socorros",
            subcategorias: [
                { nome: "Tratamento de feridas e lesões", imagem: "../style/img/feridas.jpg" },
                { nome: "Pensos, ligaduras e adesivos", imagem: "../style/img/ligaduras.jpg" },
                { nome: "Kits e acessórios de primeiros socorros", imagem: "../style/img/kit-socorros.jpg" }
            ]
        },
        8: {
            nome: "Dermatologia",
            subcategorias: [
                { nome: "Infecções e parasitas da pele", imagem: "../style/img/parasita-pele.jpg" },
                { nome: "Pele seca e sensível", imagem: "../style/img/pele-seca.jpg" },
                { nome: "Fungos e infecções cutâneas", imagem: "../style/img/infeccoes-cutaneas.jpg" },
                { nome: "Repelentes e alívio da pele", imagem: "../style/img/repelentes.jpg" }
            ]
        },
        10: {
            nome: "Contracepção e Sexualidade",
            subcategorias: [
                { nome: "Métodos contraceptivos", imagem: "../style/img/contraceptivos.jpg" },
                { nome: "Saúde e bem-estar sexual", imagem: "../style/img/saude-sexual.jpg" },
                { nome: "Testes de fertilidade e gravidez", imagem: "../style/img/teste.jpg" }
            ]
        },
        13: {
            nome: "Desporto e Fitness",
            subcategorias: [
                { nome: "Equipamento e vestuário desportivo", imagem: "../style/img/fitness.jpg" },
                { nome: "Suplementos", imagem: "../style/img/suplementos.jpg" }
            ]
        }
    };

    /* =========================================
       ORDEM FIXA DA SIDEBAR (igual em todas as páginas)
    ========================================= */
    const ordemSidebar = [18, 11, 17, 6, 4, 5, 16, 8, 10, 13];

    /* =========================================
       LÊ O categoryId DA URL
    ========================================= */
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get('categoryId');
    const categoriaAtual = categorias[categoryId];

    /* =========================================
       ELEMENTOS DO DOM
    ========================================= */
    const pageTitle = document.getElementById('pageTitle');
    const categoriaNomeEl = document.getElementById('categoriaNome');
    const categoriaNomeRepetidoEl = document.getElementById('categoriaNomeRepetido');
    const sidebarLista = document.getElementById('listaCategoriasSidebar');
    const gridContainer = document.getElementById('gridSubcategorias');
    const categoriaErroEl = document.getElementById('categoriaErro');
    const categoriaBannerEl = document.querySelector('.categoria-banner');
    const categoriaConteudoEl = document.querySelector('.categoria-conteudo');

    /* =========================================
       GERA A SIDEBAR NA ORDEM FIXA
    ========================================= */
    ordemSidebar.forEach(id => {
        const dadosCategoria = categorias[id];
        if (!dadosCategoria) return;

        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = `categoria-detalhe.html?categoryId=${id}`;
        link.textContent = dadosCategoria.nome;

        if (String(id) === categoryId) {
            link.classList.add('ativo');
        }

        li.appendChild(link);
        sidebarLista.appendChild(li);
    });

    /* =========================================
       CASO A CATEGORIA NÃO EXISTA
    ========================================= */
    if (!categoryId || !categoriaAtual) {
        categoriaBannerEl.style.display = 'none';
        categoriaConteudoEl.style.display = 'none';
        categoriaErroEl.style.display = 'block';
        pageTitle.textContent = 'Categoria não encontrada | Farmácia';
        return;
    }

    /* =========================================
       PREENCHE O TÍTULO E O BANNER
    ========================================= */
    pageTitle.textContent = `${categoriaAtual.nome} | Farmácia`;
    categoriaNomeEl.textContent = categoriaAtual.nome;
    categoriaNomeRepetidoEl.textContent = categoriaAtual.nome;

    const verTodos = document.querySelector(".ver-todos-link");
    if (verTodos) {
        verTodos.href = `produtos.html?categoryId=${categoryId}`;
    }

    /* =========================================
       GERA OS CARDS DE SUBCATEGORIA
    ========================================= */
    categoriaAtual.subcategorias.forEach((sub, index) => {
        const card = document.createElement('a');
        card.href = `produtos.html?categoryId=${categoryId}&subcategory=${encodeURIComponent(sub.nome)}`;
        card.classList.add('card-subcategoria');
        card.id = `subcategoria-${index}`;

        card.innerHTML = `
            <div class="card-subcategoria-imagem">
                <img src="${sub.imagem}" alt="${sub.nome}">
            </div>
            <span class="card-subcategoria-nome">${sub.nome}</span>
            <span class="card-cta">Comprar agora <span>&gt;</span></span>
            <span class="card-barra"></span>
        `;

        gridContainer.appendChild(card);
    });

});