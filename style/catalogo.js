/* Catálogo único do frontend — produtos, marcas e helpers de cartão */

// Número de WhatsApp da farmácia, usado para gerar os links de "Adquirir produto"
const WHATSAPP_NUMERO = "244947791628";

// Objeto com todas as marcas do catálogo.
// Cada chave (70, 71, 72...) é o ID da marca, usado no campo "marcaId" dos produtos.
const MARCAS = {
  70: {
    id: 70,
    nome: "A-Derma",
    logoTexto: "A·DERMA",
    descricao: "A natureza ao serviço das peles sensíveis e frágeis, com a suavidade da aveia.",
    corFundo: "#d9f2ee",
    imagem: "../style/img/marca2.jpg"
  },
  71: {
    id: 71,
    nome: "Avène",
    logoTexto: "AVÈNE",
    descricao: "Água termal de Avène: cuidados dermocosméticos para peles sensíveis e reativas.",
    corFundo: "#e3f0fb",
    imagem: "../style/img/marca1.jpg"
  },
  72: {
    id: 72,
    nome: "Fenty Beauty",
    logoTexto: "FENTY BEAUTY",
    descricao: "Beleza inclusiva criada por Rihanna, com fórmulas versáteis para todos os tons de pele.",
    corFundo: "#fbe3ec",
    imagem: "../style/img/marca3.jpg"
  },
  73: {
    id: 73,
    nome: "Myprotein",
    logoTexto: "MYPROTEIN",
    descricao: "Suplementos, proteínas e nutrição desportiva para todos os objetivos de treino.",
    corFundo: "#fff2d9",
    imagem: "../style/img/marca4.jpg"
  },
  74: {
    id: 74,
    nome: "Medicube",
    logoTexto: "MEDICUBE",
    descricao: "K-beauty de alta performance, com tecnologia dermatológica para a pele.",
    corFundo: "#e6f7e9",
    imagem: "../style/img/marca5.jpg"
  },
  75: {
    id: 75,
    nome: "Vichy",
    logoTexto: "VICHY",
    descricao: "Cuidados dermocosméticos com água vulcânica de Vichy, para peles sensíveis e exigentes.",
    corFundo: "#eaf3e3",
    imagem: "../style/img/marca6.jpg"
  },
  76: {
    id: 76,
    nome: "Uriage",
    logoTexto: "URIAGE",
    descricao: "Dermatologia francesa com água termal de Uriage para todos os tipos de pele.",
    corFundo: "#e8ecf7",
    imagem: "../style/img/marca9.jpg"
  },
  77: {
    id: 77,
    nome: "La Roche-Posay",
    logoTexto: "LA ROCHE-POSAY",
    descricao: "Dermatologia francesa recomendada por dermatologistas, para peles sensíveis.",
    corFundo: "#e3ecf5",
    imagem: "../style/img/marca7.jpg"
  },
  78: {
    id: 78,
    nome: "CeraVe",
    logoTexto: "CERAVE",
    descricao: "Desenvolvida com dermatologistas, com ceramidas essenciais para a barreira da pele.",
    corFundo: "#eef3f7",
    imagem: "../style/img/marca8.jpg"
  }
};

// Objeto com as categorias principais do catálogo.
// Cada chave (18, 11, 17...) é o ID da categoria, usado no campo "categoriaId" dos produtos
// e no parâmetro "categoryId" do URL da página de listagem.
const CATEGORIAS = {
  18: { nome: "Medicamentos", imagem: "../style/img/med.jpg" },
  11: { nome: "Nutrição", imagem: "../style/img/nut.jpg" },
  17: { nome: "Saúde Animal", imagem: "../style/img/ani.jpg" },
  6: { nome: "Bebé e Mamã", imagem: "../style/img/beb.jpg" },
  4: { nome: "Beleza e Cuidados Pessoais", imagem: "../style/img/bel.jpg" },
  5: { nome: "Protetor Solar", imagem: "../style/img/pro.jpg" },
  16: { nome: "Primeiros Socorros", imagem: "../style/img/pri.jpg" },
  8: { nome: "Dermatologia", imagem: "../style/img/dem.jpg" },
  10: { nome: "Contracepção e Sexualidade", imagem: "../style/img/conc.jpg" },
  13: { nome: "Desporto e Fitness", imagem: "../style/img/des.jpg" }
};

// Array com todos os produtos do catálogo.
// Cada produto tem: id, nome, detalhe, preco, desconto (true/false),
// imagem, descricao, categoriaId (liga a CATEGORIAS), subcategoria (texto livre),
// marcaId (liga a MARCAS, ou null) e promoIds (array de IDs de PROMOCOES).
const PRODUTOS = [
  {
    id: 1,
    nome: "Uriage Douceur Desodorizante Solução 50ml",
    detalhe: "Solução: (50 ml) x 1",
    preco: 19225.8,
    desconto: true,
    imagem: "../style/img/uriage.jpg",
    descricao: "Solução desodorizante suave para uso diário, formulada para peles sensíveis. Ajuda a neutralizar o odor sem irritar nem manchar a roupa.",
    categoriaId: 4,
    subcategoria: "Corpo",
    marcaId: 76,
    promoIds: [4]
  },
  {
    id: 2,
    nome: "Myprotein Layered Bar Cookie Crumble x12",
    detalhe: "Barra Proteica: (60g) x 12",
    preco: 47848.43,
    desconto: false,
    imagem: "../style/img/myprotein.jpg",
    descricao: "Caixa com 12 barras proteicas em camadas, sabor cookie crumble. Boa fonte de proteína para o pós-treino ou como lanche prático.",
    categoriaId: 13,
    subcategoria: "Equipamento e vestuário desportivo",
    marcaId: 73,
    promoIds: [2]
  },
  {
    id: 3,
    nome: "Fenty Fragrance Huit 75ml",
    detalhe: "Fragrance Huit: (75ml) x 1",
    preco: 173316,
    desconto: false,
    imagem: "../style/img/fenty.jpg",
    descricao: "Fragrância unissexo com fixação prolongada, ideal para uso diário. Frasco de 75ml, edição Huit.",
    categoriaId: 4,
    subcategoria: "Perfumes",
    marcaId: 72,
    promoIds: []
  },
  {
    id: 4,
    nome: "KIT K-BEAUTY MEDICUBE",
    detalhe: "KIT",
    preco: 122459,
    desconto: false,
    imagem: "../style/img/kit-medicube.jpg",
    descricao: "Kit de skincare coreano Medicube, pensado para uma rotina completa de cuidado facial.",
    categoriaId: 4,
    subcategoria: "K-Beauty",
    marcaId: 74,
    promoIds: [4]
  },
  {
    id: 5,
    nome: "A-Derma Epitheliale A.H Ultra Creme Reparador SPF50+",
    detalhe: "Creme: (40 ml) x 1",
    preco: 36200,
    desconto: false,
    imagem: "../style/img/aderme-creme.jpg",
    descricao: "Creme reparador com proteção solar elevada, indicado para peles frágeis e sensibilizadas.",
    categoriaId: 8,
    subcategoria: "Pele seca e sensível",
    marcaId: 70,
    promoIds: [4]
  },
  {
    id: 6,
    nome: "A-Derma Protect Spray SPF50+",
    detalhe: "Spray: (200ml) x 1",
    preco: 44523.84,
    desconto: false,
    imagem: "../style/img/aderma-spray.jpg",
    descricao: "Spray solar de muito alta proteção, textura leve e resistente à água.",
    categoriaId: 5,
    subcategoria: "Protetores solares",
    marcaId: 70,
    promoIds: []
  },
  {
    id: 7,
    nome: "Avène Água Termal Spray 300ml",
    detalhe: "Spray: (300ml) x 1",
    preco: 18900,
    desconto: false,
    imagem: "../style/img/avene-spray.jpg",
    descricao: "Água termal calmante e antirritante para peles sensíveis, reativas ou após procedimentos.",
    categoriaId: 8,
    subcategoria: "Pele seca e sensível",
    marcaId: 71,
    promoIds: [4]
  },
  {
    id: 8,
    nome: "Avène Cicalfate+ Creme Reparador",
    detalhe: "Creme: (40ml) x 1",
    preco: 25900,
    desconto: true,
    imagem: "../style/img/avene-creme.jpg",
    descricao: "Creme reparador que ajuda a restaurar a barreira cutânea e a acalmar irritações.",
    categoriaId: 16,
    subcategoria: "Tratamento de feridas e lesões",
    marcaId: 71,
    promoIds: [4]
  },
  {
    id: 9,
    nome: "Fenty Beauty Gloss Bomb",
    detalhe: "Gloss: (9ml) x 1",
    preco: 45900,
    desconto: false,
    imagem: "../style/img/fenty-gloss.jpg",
    descricao: "Gloss hidratante com brilho intenso, para lábios mais cheios e confortáveis.",
    categoriaId: 4,
    subcategoria: "Maquilhagem",
    marcaId: 72,
    promoIds: []
  },
  {
    id: 10,
    nome: "Myprotein Impact Whey Protein 1kg",
    detalhe: "Proteína: (1kg) x 1",
    preco: 89900,
    desconto: true,
    imagem: "../style/img/myprotein-impact.jpg",
    descricao: "Proteína de soro de leite para apoio à recuperação muscular e aos treinos diários.",
    categoriaId: 13,
    subcategoria: "Equipamento e vestuário desportivo",
    marcaId: 73,
    promoIds: [2]
  },
  {
    id: 11,
    nome: "Medicube Zero Pore Pad",
    detalhe: "Pads: (70un) x 1",
    preco: 38900,
    desconto: true,
    imagem: "../style/img/medicine-pore.jpg",
    descricao: "Discos esfoliantes para minimizar o aspeto dos poros e uniformizar a textura da pele.",
    categoriaId: 4,
    subcategoria: "K-Beauty",
    marcaId: 74,
    promoIds: [4]
  },
  {
    id: 12,
    nome: "Vichy Mineral 89 Sérum",
    detalhe: "Sérum: (50ml) x 1",
    preco: 34900,
    desconto: false,
    imagem: "../style/img/vichy-serum.jpg",
    descricao: "Sérum fortificante com ácido hialurónico e água vulcânica mineralizante.",
    categoriaId: 4,
    subcategoria: "Rosto",
    marcaId: 75,
    promoIds: [4]
  },
  {
    id: 13,
    nome: "Vichy Normaderm Gel de Limpeza",
    detalhe: "Gel: (200ml) x 1",
    preco: 21900,
    desconto: true,
    imagem: "../style/img/vichy-gel.jpg",
    descricao: "Gel de limpeza para peles oleosas e com tendência acneica, com efeito matificante.",
    categoriaId: 4,
    subcategoria: "Rosto",
    marcaId: 75,
    promoIds: []
  },
  {
    id: 14,
    nome: "Uriage Bariéderm Creme Cicatrizante",
    detalhe: "Creme: (75ml) x 1",
    preco: 27900,
    desconto: false,
    imagem: "../style/img/uriage-creme.jpg",
    descricao: "Creme isolante e reparador para zonas fragilizadas da pele.",
    categoriaId: 16,
    subcategoria: "Tratamento de feridas e lesões",
    marcaId: 76,
    promoIds: []
  },
  {
    id: 15,
    nome: "La Roche-Posay Anthelios SPF50+",
    detalhe: "Fluido: (50ml) x 1",
    preco: 42900,
    desconto: false,
    imagem: "../style/img/la-anthelios.jpg",
    descricao: "Proteção solar facial de muito alta eficácia, textura invisível e não oleosa.",
    categoriaId: 5,
    subcategoria: "Protetores solares",
    marcaId: 77,
    promoIds: [4]
  },
  {
    id: 16,
    nome: "La Roche-Posay Effaclar Duo+",
    detalhe: "Creme: (40ml) x 1",
    preco: 33900,
    desconto: true,
    imagem: "../style/img/la-effaclar.jpg",
    descricao: "Cuidado corretor para imperfeições, poros e marcas residuais.",
    categoriaId: 8,
    subcategoria: "Pele seca e sensível",
    marcaId: 77,
    promoIds: []
  },
  {
    id: 17,
    nome: "CeraVe Creme Hidratante",
    detalhe: "Creme: (340g) x 1",
    preco: 24900,
    desconto: false,
    imagem: "../style/img/cerave-creme.jpg",
    descricao: "Hidratação intensa com três ceramidas essenciais e ácido hialurónico.",
    categoriaId: 8,
    subcategoria: "Pele seca e sensível",
    marcaId: 78,
    promoIds: [4]
  },
  {
    id: 18,
    nome: "CeraVe Gel de Limpeza Espumante",
    detalhe: "Gel: (236ml) x 1",
    preco: 19900,
    desconto: true,
    imagem: "../style/img/cerave-gel.jpg",
    descricao: "Limpeza suave que remove impurezas sem comprometer a barreira da pele.",
    categoriaId: 4,
    subcategoria: "Rosto",
    marcaId: 78,
    promoIds: []
  },
  {
    id: 19,
    nome: "Paracetamol 500mg 20 comprimidos",
    detalhe: "Comprimidos: (20) x 1",
    preco: 1850,
    desconto: false,
    imagem: "../style/img/paracetamol.jpg",
    descricao: "Analgésico e antipirético para dores ligeiras a moderadas e febre. Siga as indicações do folheto.",
    categoriaId: 18,
    subcategoria: "Não sujeitos a receita médica",
    marcaId: null,
    promoIds: []
  },
  {
    id: 20,
    nome: "Amoxicilina 500mg 21 cápsulas",
    detalhe: "Cápsulas: (21) x 1",
    preco: 6200,
    desconto: false,
    imagem: "../style/img/amoxilina.jpg",
    descricao: "Antibiótico sujeito a receita médica. Apresente a receita no balcão ou envie-a pelo WhatsApp.",
    categoriaId: 18,
    subcategoria: "Sujeitos a receita médica",
    marcaId: null,
    promoIds: []
  },
  {
    id: 21,
    nome: "Vitamina C 1000mg 60 comprimidos",
    detalhe: "Comprimidos: (60) x 1",
    preco: 8900,
    desconto: true,
    imagem: "../style/img/vitamina-c.jpg",
    descricao: "Suplemento de vitamina C para apoio à imunidade e à energia do dia a dia.",
    categoriaId: 11,
    subcategoria: "Nutrição clínica e adaptada",
    marcaId: null,
    promoIds: [1]
  },
  {
    id: 22,
    nome: "Complexo B 30 cápsulas",
    detalhe: "Cápsulas: (30) x 1",
    preco: 7600,
    desconto: true,
    imagem: "../style/img/complexo-b.jpg",
    descricao: "Complexo de vitaminas do grupo B para metabolismo energético e vitalidade.",
    categoriaId: 11,
    subcategoria: "Nutrição clínica e adaptada",
    marcaId: null,
    promoIds: [1]
  },
  {
    id: 23,
    nome: "Ómega 3 60 cápsulas",
    detalhe: "Cápsulas: (60) x 1",
    preco: 12400,
    desconto: false,
    imagem: "../style/img/omega-3.jpg",
    descricao: "Ácidos gordos essenciais EPA e DHA para o bem-estar cardiovascular.",
    categoriaId: 11,
    subcategoria: "Alimentos biológicos e sem glúten",
    marcaId: null,
    promoIds: [1]
  },
  {
    id: 24,
    nome: "Magnésio + Vitamina B6 120 cápsulas",
    detalhe: "Cápsulas: (120) x 1",
    preco: 17800,
    desconto: true,
    imagem: "../style/img/magnesio-b6.jpg",
    descricao: "Três formas de magnésio com vitamina B6 para suporte ao sistema nervoso e à recuperação.",
    categoriaId: 11,
    subcategoria: "Nutrição clínica e adaptada",
    marcaId: null,
    promoIds: [1, 2]
  },
  {
    id: 25,
    nome: "Probiótico Digestivo 30 cápsulas",
    detalhe: "Cápsulas: (30) x 1",
    preco: 15500,
    desconto: false,
    imagem: "../style/img/digestivo-30.jpg",
    descricao: "Culturas probióticas para equilíbrio da flora intestinal.",
    categoriaId: 11,
    subcategoria: "Alimentação por sonda e suporte nutricional",
    marcaId: null,
    promoIds: [1]
  },
  {
    id: 26,
    nome: "Ração húmida cão adulto 400g",
    detalhe: "Lata: (400g) x 1",
    preco: 3200,
    desconto: false,
    imagem: "../style/img/racao-humida.jpg",
    descricao: "Alimento completo húmido para cães adultos, com proteínas de qualidade.",
    categoriaId: 17,
    subcategoria: "Produtos de uso veterinário",
    marcaId: null,
    promoIds: []
  },
  {
    id: 27,
    nome: "Antiparasitário tópico cão",
    detalhe: "Pipeta: (1 unid.) x 1",
    preco: 8900,
    desconto: false,
    imagem: "../style/img/ani.jpg",
    descricao: "Proteção contra pulgas e carraças. Consulte o farmacêutico sobre o peso do animal.",
    categoriaId: 17,
    subcategoria: "Medicamentos e cuidados veterinários",
    marcaId: null,
    promoIds: []
  },
  {
    id: 28,
    nome: "Toalhitas bebé 72 unidades",
    detalhe: "Pacote: (72) x 1",
    preco: 2100,
    desconto: false,
    imagem: "../style/img/atiparasitario.jpg",
    descricao: "Toalhitas suaves sem álcool, adequadas à pele delicada do bebé.",
    categoriaId: 6,
    subcategoria: "Higiene e cuidados do bebé",
    marcaId: null,
    promoIds: []
  },
  {
    id: 29,
    nome: "Leite de transição 800g",
    detalhe: "Lata: (800g) x 1",
    preco: 14500,
    desconto: false,
    imagem: "../style/img/leite-transicao.jpg",
    descricao: "Fórmula de transição para o crescimento. Siga as instruções de preparação.",
    categoriaId: 6,
    subcategoria: "Alimentação infantil",
    marcaId: null,
    promoIds: []
  },
  {
    id: 30,
    nome: "Creme mamã antiestrias 200ml",
    detalhe: "Creme: (200ml) x 1",
    preco: 9800,
    desconto: true,
    imagem: "../style/img/creme-mama.jpg",
    descricao: "Hidratação intensa para a pele durante a gravidez e o pós-parto.",
    categoriaId: 6,
    subcategoria: "Mamã e pré-mamã",
    marcaId: null,
    promoIds: []
  },
  {
    id: 31,
    nome: "Protetor solar corporal FPS 50 200ml",
    detalhe: "Loção: (200ml) x 1",
    preco: 11200,
    desconto: true,
    imagem: "../style/img/protetor-solar-corporal.jpg",
    descricao: "Proteção solar de amplo espectro para o corpo, resistente à água.",
    categoriaId: 5,
    subcategoria: "Protetores solares",
    marcaId: null,
    promoIds: [3]
  },
  {
    id: 32,
    nome: "Loção pós-solar 150ml",
    detalhe: "Loção: (150ml) x 1",
    preco: 6400,
    desconto: false,
    imagem: "../style/img/pos-solar.jpg",
    descricao: "Acalma e hidrata a pele após a exposição solar.",
    categoriaId: 5,
    subcategoria: "Pós-solar",
    marcaId: null,
    promoIds: [3]
  },
  {
    id: 33,
    nome: "Kit primeiros socorros familiar",
    detalhe: "Kit: 1 unidade",
    preco: 15900,
    desconto: false,
    imagem: "../style/img/primeiros-socorros.jpg",
    descricao: "Conjunto essencial de pensos, ligaduras, antisséptico e tesoura.",
    categoriaId: 16,
    subcategoria: "Kits e acessórios de primeiros socorros",
    marcaId: null,
    promoIds: [3]
  },
  {
    id: 34,
    nome: "Pensos adesivos sortidos x40",
    detalhe: "Caixa: (40) x 1",
    preco: 1800,
    desconto: false,
    imagem: "../style/img/pensos-adesivos.jpg",
    descricao: "Pensos de vários tamanhos para pequenos cortes e arranhões.",
    categoriaId: 16,
    subcategoria: "Pensos, ligaduras e adesivos",
    marcaId: null,
    promoIds: [3]
  },
  {
    id: 35,
    nome: "Preservativos extra finos x12",
    detalhe: "Caixa: (12) x 1",
    preco: 2900,
    desconto: false,
    imagem: "../style/img/preservativos-finos.jpg",
    descricao: "Proteção fiável com maior sensibilidade. Uso único.",
    categoriaId: 10,
    subcategoria: "Métodos contraceptivos",
    marcaId: null,
    promoIds: []
  },
  {
    id: 36,
    nome: "Teste de gravidez rápido",
    detalhe: "Teste: (1 unid.) x 1",
    preco: 3500,
    desconto: false,
    imagem: "../style/img/Teste de gravidez rápido.jpg",
    descricao: "Resultado em minutos, com elevada fiabilidade quando usado conforme as instruções.",
    categoriaId: 10,
    subcategoria: "Testes de fertilidade e gravidez",
    marcaId: null,
    promoIds: []
  },
  {
    id: 37,
    nome: "Gel de banho suave 250ml",
    detalhe: "Frasco: (250ml) x 1",
    preco: 4200,
    desconto: false,
    imagem: "../style/img/gel-banho.jpg",
    descricao: "Gel de higiene diária com pH fisiológico, adequado a peles sensíveis.",
    categoriaId: 4,
    subcategoria: "Corpo",
    marcaId: null,
    promoIds: [3]
  },
  {
    id: 38,
    nome: "Shampoo nutritivo 300ml",
    detalhe: "Frasco: (300ml) x 1",
    preco: 5800,
    desconto: false,
    imagem: "../style/img/shampoo.jpg",
    descricao: "Shampoo para cabelo seco, com fórmula suave e fácil de enxaguar.",
    categoriaId: 4,
    subcategoria: "Cabelo",
    marcaId: null,
    promoIds: [3]
  }
];

// Objeto com as promoções em destaque.
// Cada chave (1, 2, 3, 4) é o ID da promoção, referenciado no array "promoIds" dos produtos.
const PROMOCOES = {
  1: {
    titulo: "Descontos em vitaminas e fórmulas de apoio",
    imagem: "../style/img/promo1.jpg",
    descricao: "Cuide da imunidade e da energia com uma seleção de suplementos a preços especiais.",
    preco: 8900,
    desconto: "20% OFF",
    detalhes: ["Entrega em até 48 horas", "Aconselhamento farmacêutico incluído", "Produtos selecionados da farmácia"]
  },
  2: {
    titulo: "Magnésio, proteína e recuperação",
    imagem: "../style/img/promo2.jpg",
    descricao: "Suporte para o sistema nervoso e para o treino, com suplementos de qualidade.",
    preco: 17800,
    desconto: "15% OFF",
    detalhes: ["Ideal para o dia a dia e o desporto", "Padrão de qualidade farmacêutica", "Fale connosco no WhatsApp"]
  },
  3: {
    titulo: "Essenciais para o dia a dia",
    imagem: "../style/img/promo3.jpg",
    descricao: "Higiene, proteção solar e primeiros socorros para a casa e a família.",
    preco: 4200,
    desconto: "",
    detalhes: ["Produtos de uso quotidiano", "Disponível para encomenda imediata"]
  },
  4: {
    titulo: "Kit de cuidados da pele",
    imagem: "../style/img/promo4.jpg",
    descricao: "Hidratação, proteção e reparação com marcas de confiança da farmácia.",
    preco: 19900,
    desconto: "10% OFF",
    detalhes: ["Ideal para uso diário", "Testado para peles sensíveis", "Encomende pelo WhatsApp"]
  }
};

// Formata um valor numérico como moeda: milhares com "." e decimais com ",",
// seguido do sufixo "AOA" (Kwanza angolano). Ex: 19225.8 → "19.225,80 AOA"
function formatarPreco(valor) {
  return (
    Number(valor).toLocaleString("pt-PT", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) + " AOA"
  );
}

// Procura no array PRODUTOS o produto com o "id" indicado.
// Number(id) garante que funciona mesmo que "id" venha como string (ex: do URL).
function obterProduto(id) {
  return PRODUTOS.find((p) => p.id === Number(id));
}

// Gera o link do WhatsApp com uma mensagem pré-preenchida para comprar o produto.
function gerarLinkWhatsApp(produto) {
  const urlImagem = new URL(produto.imagem, window.location.href).href;
  const urlProduto = new URL(`produto.html?id=${produto.id}`, window.location.href).href;
  const texto =
    `Olá! Quero adquirir este produto:\n\n` +
    `*${produto.nome}*\n` +
    `Preço: ${formatarPreco(produto.preco)}\n\n` +
    `Foto: ${urlImagem}\n` +
    `Link: ${urlProduto}`;
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
}

// Filtra o array PRODUTOS de acordo com critérios opcionais:
// texto de pesquisa (q), categoria, subcategoria, marca e promoção.
function filtrarProdutos({ q, categoryId, subcategory, marcaId, promoId } = {}) {
  const termo = (q || "").trim().toLowerCase();
  return PRODUTOS.filter((p) => {
    const marcaNome = p.marcaId && MARCAS[p.marcaId] ? MARCAS[p.marcaId].nome : "";
    const catNome = CATEGORIAS[p.categoriaId] ? CATEGORIAS[p.categoriaId].nome : "";
    const hay = `${p.nome} ${p.detalhe} ${p.descricao} ${marcaNome} ${catNome} ${p.subcategoria || ""}`.toLowerCase();
    if (termo && !hay.includes(termo)) return false;
    if (categoryId && String(p.categoriaId) !== String(categoryId)) return false;
    if (subcategory && p.subcategoria !== subcategory) return false;
    if (marcaId && String(p.marcaId) !== String(marcaId)) return false;
    if (promoId && !(p.promoIds || []).includes(Number(promoId))) return false;
    return true;
  });
}

// Gera o HTML de um cartão de produto (usado na grelha de listagem e nos "relacionados").
function cardProdutoHTML(p, extras = "") {
  return `
    <div class="produto-card">
      <div class="produto-topo">
        ${extras}
        ${p.desconto ? '<span class="badge-desconto">%</span>' : ""}
      </div>
      <img class="produto-imagem" src="${p.imagem}" alt="${p.nome}">
      <div class="produto-info">
        <h3 class="produto-nome">${p.nome}</h3>
        <p class="produto-detalhe">${p.detalhe}</p>
        <div class="produto-preco">
          <span class="a-partir-de">A PARTIR DE</span>
          <span class="preco-valor">${formatarPreco(p.preco)}</span>
        </div>
        <a class="btn-ver-produto" href="produto.html?id=${p.id}">Ver produto</a>
      </div>
    </div>`;
}