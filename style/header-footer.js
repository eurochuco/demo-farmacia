/* =========================================
   HEADER E FOOTER PARTILHADOS
   Injeta o mesmo header/footer em todas as páginas
========================================= */

const headerHTML = `
<div class="header">

    <a class="logo-container" href="index.html">
        <div class="logo">
            <img src="../style/img/logo.jpg" alt="Farmácia">
        </div>
        <span class="logo-nome">Farmácia</span>
    </a>

    <div class="SearchBar">
        <form action="produtos.html" method="get">
            <input type="search" name="q" placeholder="A tua pesquisa...">
            <button type="submit" aria-label="Pesquisar">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </button>
        </form>
    </div>

    <ul class="menu">
        <li><a href="categorias.html">categorias</a></li>
        <li><a href="marcas.html">marcas</a></li>
        <li><a href="sobre.html">sobre</a></li>
    </ul>

</div>
`;

const footerHTML = `
<footer class="footer">
    <div class="footer-container">

        <div class="footer-coluna">
            <h4 class="footer-titulo"><span class="titulo-linha"></span>Página Principal</h4>
            <a href="index.html" class="footer-link">Início</a>
            <a href="produtos.html" class="footer-link">Catálogo de produtos</a>
            <a href="https://wa.me/244947791628" class="footer-link">Contacte-nos</a>
        </div>

        <div class="footer-coluna">
            <h4 class="footer-titulo"><span class="titulo-linha"></span>Outros Links</h4>
            <a href="privacidade.html" class="footer-link">Política de privacidade</a>
            <a href="termos.html" class="footer-link">Termos e condições</a>
            <a href="sobre.html" class="footer-link">Sobre a Farmácia</a>
        </div>

        <div class="footer-coluna">
            <h4 class="footer-titulo"><span class="titulo-linha"></span>Siga-nos</h4>
            <div class="footer-redes">
                <a href="#" class="rede-icone" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                        fill="currentColor">
                        <path
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                </a>
                <a href="#" class="rede-icone" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                </a>
                <a href="#" class="rede-icone" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                        fill="currentColor">
                        <path
                            d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" />
                    </svg>
                </a>
                <a href="#" class="rede-icone" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                        fill="currentColor">
                        <path
                            d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45C23.2 24 24 23.22 24 22.25V1.75C24 .78 23.2 0 22.22 0z" />
                    </svg>
                </a>
            </div>
            <p class="footer-conecte">Conecte-se connosco</p>
        </div>

        <div class="footer-coluna">
            <h4 class="footer-titulo"><span class="titulo-linha"></span>Fale connosco</h4>
            <a href="https://wa.me/244947791628" target="_blank" rel="noopener noreferrer" class="whatsapp-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
                    fill="currentColor">
                    <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path
                        d="M12.014 2C6.494 2 2 6.478 2 12c0 1.892.526 3.66 1.44 5.168L2 22l4.978-1.396A9.94 9.94 0 0 0 12.014 22C17.53 22 22 17.522 22 12S17.53 2 12.014 2zm0 18.192a8.15 8.15 0 0 1-4.153-1.14l-.297-.176-3.017.847.83-2.943-.194-.303A8.19 8.19 0 0 1 3.808 12c0-4.522 3.68-8.192 8.206-8.192 4.526 0 8.206 3.67 8.206 8.192 0 4.522-3.68 8.192-8.206 8.192z" />
                </svg>
                <span>Falar no WhatsApp</span>
            </a>
        </div>

    </div>

    <hr class="footer-divisor">

    <div class="footer-baixo">
        <div class="footer-logo-info">
            <div class="footer-logo-espaco">
                <img src="../style/img/logo.jpg" alt="Logo Farmácia" class="footer-logo-img">
            </div>
            <div>
                <p class="footer-logo-texto">Farmácia</p>
                <p class="footer-copyright">Farmácia 2026<br>Todos os Direitos Reservados</p>
            </div>
        </div>

        <div class="footer-contactos">
            <p>Farmacia, Lda, Maputo, Mocambique</p>
            <p>feedback@appy.co.ao &nbsp;·&nbsp; +244 947 791 628</p>
        </div>
    </div>
</footer>
`;

/* =========================================
   INJETA O HEADER E FOOTER NA PÁGINA
========================================= */
document.addEventListener('DOMContentLoaded', function () {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});