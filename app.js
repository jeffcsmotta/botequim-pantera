/**
 * Botequim Pantera - Caxias do Sul - RS
 * Cardápio Digital & Sistema de Pedidos Direto no WhatsApp
 * Bauru Caxiense Tradicional, Comida Caseira & Chopp Geladíssimo
 * Destaque Sabores do Sul 2024 (Melhor Comida Caseira)
 * Powered by Onira Labs
 */

// WhatsApp Oficial do Botequim Pantera (Rua Tronca, 1879 - Bairro Exposição)
const WHATSAPP_PHONE = '555434196942';
const CHAVE_PIX_OFICIAL = '5434196942';

// Taxas de Entrega por Bairro em Caxias do Sul
const DELIVERY_ZONES = [
    { neighborhood: 'Exposição (Bairro da Casa)', fee: 8.00, time: '25-40 min' },
    { neighborhood: 'Centro', fee: 9.00, time: '30-45 min' },
    { neighborhood: 'São Pelegrino', fee: 9.00, time: '30-45 min' },
    { neighborhood: 'Lourdes', fee: 10.00, time: '30-45 min' },
    { neighborhood: 'Panazzolo', fee: 10.00, time: '30-45 min' },
    { neighborhood: 'Rio Branco', fee: 11.00, time: '35-50 min' },
    { neighborhood: 'Cinquentenário', fee: 11.00, time: '35-50 min' },
    { neighborhood: 'Sagrada Família', fee: 12.00, time: '35-50 min' },
    { neighborhood: 'Bela Vista', fee: 12.00, time: '35-50 min' },
    { neighborhood: 'Cristo Redentor / Kayser', fee: 12.00, time: '40-55 min' },
    { neighborhood: 'Cruzeiro', fee: 13.00, time: '40-55 min' },
    { neighborhood: 'Villagio Caxias / Sanvitto', fee: 13.00, time: '40-55 min' },
    { neighborhood: 'Pio X / Santa Catarina', fee: 14.00, time: '40-55 min' },
    { neighborhood: 'Universitário / Interlagos', fee: 14.00, time: '45-60 min' },
    { neighborhood: 'Ana Rech', fee: 22.00, time: '50-70 min' },
    { neighborhood: 'Forqueta', fee: 22.00, time: '50-70 min' },
    { neighborhood: 'Outro Bairro (Caxias do Sul)', fee: 15.00, time: '40-60 min' }
];

// Catálogo Oficial do Botequim Pantera com Imagens Reais e Apetitosas
const DEFAULT_PRODUCTS = [
    // --- BAURUS CAXIENSES (DESTAQUES) ---
    {
        id: "pantera-001",
        name: "Bauru Caxiense Tradicional ao Prato",
        category: "baurus",
        group: "Mais Vendidos",
        desc: "O consagrado de Caxias: filé mignon macio grelhado na chapa, queijo colonial derretido, presunto, ovo estalado com gema mole, alface, tomate e batatas fritas sequinhas e crocantes.",
        badge: "Campeão Sabores do Sul ⭐",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
        price: 49.90,
        hasAdicionais: true,
        options: {
            doneness: ["Ao Ponto (Recomendado)", "Mal Passado", "Bem Passado"],
            sizes: [
                { name: "Individual Generoso", extra: 0 },
                { name: "Para 2 Pessoas (Casal • Filés & Fritas Duplas)", extra: 36.00 }
            ],
            addons: [
                { name: "Molho Vermelho Especial da Casa", price: 4.00 },
                { name: "Ovo Frito Extra", price: 3.50 },
                { name: "Queijo Colonial Extra Derretido", price: 6.00 },
                { name: "Bacon Crocante em Tiras", price: 5.50 }
            ]
        }
    },
    {
        id: "pantera-002",
        name: "Bauru Pantera Express (Prato Executivo)",
        category: "baurus",
        group: "Mais Vendidos",
        desc: "Prato executivo individual do clássico bauru caxiense: bife de filé na chapa com queijo derretido, arroz branco soltinho, feijão caseiro, ovo frito e fritas.",
        badge: "Mais Pedido no Almoço ⚡",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=700&q=80",
        price: 38.90,
        hasAdicionais: true,
        options: {
            doneness: ["Ao Ponto", "Bem Passado", "Mal Passado"],
            addons: [
                { name: "Molho Vermelho da Casa", price: 4.00 },
                { name: "Ovo Extra", price: 3.50 }
            ]
        }
    },
    {
        id: "pantera-003",
        name: "Bauru Rei Pantera Especial",
        category: "baurus",
        group: "Mais Vendidos",
        desc: "O bauru mais generoso do Pantera: corte nobre de filé mignon grelhado na chapa, queijo em dobro, presunto nobre, tiras de bacon crocante, 2 ovos e montanha de batatas fritas.",
        badge: "Rei da Casa 👑",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
        price: 59.90,
        hasAdicionais: true,
        options: {
            doneness: ["Ao Ponto (Recomendado)", "Mal Passado", "Bem Passado"],
            sizes: [
                { name: "Individual Grande", extra: 0 },
                { name: "Para 2 a 3 Pessoas (Banquete)", extra: 42.00 }
            ],
            addons: [
                { name: "Molho Vermelho Especial", price: 4.00 },
                { name: "Cheddar Cremoso", price: 5.00 }
            ]
        }
    },
    {
        id: "pantera-004",
        name: "Bauru Quatro Queijos do Pantera",
        category: "baurus",
        group: "Baurus Caxienses",
        desc: "Suculento filé mignon coberto por uma fusão cremosa de Queijo Colonial da Serra, Provolone defumado, Gorgonzola e Catupiry legítimo. Acompanha fritas douradas.",
        badge: "Ultra Cremoso 🧀",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80",
        price: 54.90,
        hasAdicionais: true,
        options: {
            doneness: ["Ao Ponto", "Bem Passado", "Mal Passado"],
            addons: [
                { name: "Bacon Crocante", price: 5.50 },
                { name: "Ovo Frito", price: 3.50 }
            ]
        }
    },
    {
        id: "pantera-005",
        name: "Bauru de Peito de Frango com Queijo & Catupiry",
        category: "baurus",
        group: "Baurus Caxienses",
        desc: "Filé de peito de frango marinado em ervas finas e grelhado na chapa, coberto com Catupiry original, queijo colonial, presunto, ovo e batata frita.",
        badge: "Leve & Suculento ✨",
        rating: "4.8",
        img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80",
        price: 42.90,
        hasAdicionais: true,
        options: {
            addons: [
                { name: "Bacon em Tiras", price: 5.50 },
                { name: "Ovo Frito Extra", price: 3.50 }
            ]
        }
    },

    // --- À LA MINUTAS & PRATOS CASEIROS ---
    {
        id: "pantera-006",
        name: "À La Minuta Tradicional de Filé Mignon",
        category: "pratos",
        group: "Mais Vendidos",
        desc: "Bife macio de filé mignon grelhado na chapa, arroz branco, feijão caseiro temperado no capricho, ovo estalado com gema mole, batata frita e salada mista.",
        badge: "Comida Caseira Premiada 🍳",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
        price: 44.90,
        hasAdicionais: true,
        options: {
            doneness: ["Ao Ponto", "Bem Passado", "Mal Passado"],
            addons: [
                { name: "Ovo Frito Extra", price: 3.50 },
                { name: "Farofa Caseira com Bacon", price: 4.00 }
            ]
        }
    },
    {
        id: "pantera-007",
        name: "À La Minuta de Filé à Milanesa",
        category: "pratos",
        group: "À La Minutas & Pratos",
        desc: "Filé mignon empanado em farinha especial e frito até dourar, servido com arroz soltinho, feijão caseiro, ovo frito, batata frita e salada fresca.",
        badge: "Super Crocante 🥩",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=700&q=80",
        price: 46.90,
        hasAdicionais: true,
        options: {
            addons: [
                { name: "Ovo Frito Extra", price: 3.50 },
                { name: "Queijo Parmesão Ralado", price: 4.50 }
            ]
        }
    },
    {
        id: "pantera-008",
        name: "Filé à Parmegiana da Casa com Fritas",
        category: "pratos",
        group: "À La Minutas & Pratos",
        desc: "Filé mignon empanado e gratinado ao forno com molho de tomate rústico artesanal e queijo mussarela derretido. Acompanha arroz branco e batata frita.",
        badge: "Destaque do Menu 🏆",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
        price: 52.90,
        hasAdicionais: true,
        options: {
            sizes: [
                { name: "Individual Completo", extra: 0 },
                { name: "Para 2 Pessoas (Casal)", extra: 38.00 }
            ]
        }
    },
    {
        id: "pantera-009",
        name: "À La Minuta de Peito de Frango Grelhado",
        category: "pratos",
        group: "À La Minutas & Pratos",
        desc: "Peito de frango grelhado na manteiga e ervas finas, servido com arroz branco, feijão, ovo estalado, batata frita e salada.",
        badge: "Prato Leve 🥗",
        rating: "4.8",
        img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80",
        price: 36.90,
        hasAdicionais: false
    },

    // --- PETISCOS & PORÇÕES DE BOTECO ---
    {
        id: "pantera-010",
        name: "Porção de Polenta Frita com Queijo Colonial Ralado",
        category: "petiscos",
        group: "Mais Vendidos",
        desc: "Polenta artesanal crocante por fora e macia por dentro, finalizada com generosa camada de queijo colonial da Serra Gaúcha ralado na hora.",
        badge: "Tradição Gaúcha 🌽",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80",
        price: 24.90,
        hasAdicionais: true,
        options: {
            addons: [
                { name: "Queijo Colonial Extra", price: 4.50 },
                { name: "Molho de Gorgonzola", price: 6.00 }
            ]
        }
    },
    {
        id: "pantera-011",
        name: "Bolinhos de Costela Desfiada 12h (8 un)",
        category: "petiscos",
        group: "Mais Vendidos",
        desc: "Costela assada lentamente por 12h, desfiada com temperos coloniais, empanada em farinha panko crocante. Acompanha geleia de pimenta defumada.",
        badge: "Destaque do Bar 🔥",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=700&q=80",
        price: 34.90,
        hasAdicionais: false
    },
    {
        id: "pantera-012",
        name: "Batata Frita Crocante com Queijo Colonial & Bacon",
        category: "petiscos",
        group: "Petiscos & Porções",
        desc: "Batata frita crocante e sequinha, coberta com queijo colonial derretido e cubos de bacon crocante.",
        badge: "Favorito do Chopp 🍟",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80",
        price: 32.90,
        hasAdicionais: true,
        options: {
            addons: [
                { name: "Bacon em Dobro", price: 5.50 },
                { name: "Cheddar Cremoso Extra", price: 5.00 }
            ]
        }
    },
    {
        id: "pantera-013",
        name: "Batata Frita Tradicional Sequinha (Porção)",
        category: "petiscos",
        group: "Petiscos & Porções",
        desc: "Porção generosa de batatas fritas palito, douradas e crocantes, salpicadas com sal e orégano.",
        badge: "Porção Família 🍟",
        rating: "4.8",
        img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80",
        price: 22.90,
        hasAdicionais: false
    },
    {
        id: "pantera-014",
        name: "Dadinhos de Tapioca com Queijo Coalho (10 un)",
        category: "petiscos",
        group: "Petiscos & Porções",
        desc: "Feitos com tapioca granulada e queijo de coalho dourado, fritos com casquinha crocante e interior cremoso. Servidos com geleia de pimenta.",
        badge: "Crocante & Macio 🌶️",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80",
        price: 29.90,
        hasAdicionais: false
    },
    {
        id: "pantera-015",
        name: "Frango a Passarinho Crocante com Alho Dourado",
        category: "petiscos",
        group: "Petiscos & Porções",
        desc: "Cortes de frango marinado no limão e especiarias, empanados e fritos até dourar, salpicados com bastante alho frito tostado.",
        badge: "Porção Generosa 🍗",
        rating: "4.8",
        img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=80",
        price: 39.90,
        hasAdicionais: false
    },
    {
        id: "pantera-016",
        name: "Tábua Pantera Completa (Serve 3 a 4 pessoas)",
        category: "petiscos",
        group: "Petiscos & Porções",
        desc: "O banquete definitivo de boteco: iscas de filé mignon na chapa com cebola caramelizada, polenta frita crocante, batata frita com queijo e bacon, queijo provolone e pão francês fatiado.",
        badge: "Para Compartilhar 👑",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80",
        price: 89.90,
        hasAdicionais: true,
        options: {
            doneness: ["Carne Ao Ponto", "Carne Bem Passada"]
        }
    },

    // --- SANDUÍCHES & XIS DE BOTECO ---
    {
        id: "pantera-017",
        name: "Bauru Tradicional no Pão Francês",
        category: "sanduiches",
        group: "Sanduíches & Xis",
        desc: "Tiras de filé mignon grelhado na chapa, queijo derretido, presunto, ovo, alface, tomate e maionese caseira no pão francês crocante prensado.",
        badge: "Lanche Raiz 🥖",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=700&q=80",
        price: 28.90,
        hasAdicionais: true,
        options: {
            addons: [
                { name: "Bacon Crocante", price: 4.50 },
                { name: "Queijo Dobrado", price: 4.00 }
            ]
        }
    },
    {
        id: "pantera-018",
        name: "X-Pantera Especial da Casa",
        category: "sanduiches",
        group: "Sanduíches & Xis",
        desc: "Pão de xis chapeado grande, hambúrguer artesanal de costela, queijo prato duplo, presunto, bacon crocante, ovo, milho, ervilha, alface, tomate e maionese verde.",
        badge: "Gigante da Casa 🍔",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
        price: 34.90,
        hasAdicionais: true,
        options: {
            addons: [
                { name: "Hambúrguer Extra", price: 8.00 },
                { name: "Fritas Individual", price: 7.00 }
            ]
        }
    },
    {
        id: "pantera-019",
        name: "Xis Salada Tradicional",
        category: "sanduiches",
        group: "Sanduíches & Xis",
        desc: "Hambúrguer artesanal na chapa, queijo derretido, presunto, ovo, milho, ervilha, alface, tomate e maionese caseira prensado no pão de xis.",
        badge: "Clássico 🍔",
        rating: "4.8",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
        price: 29.90,
        hasAdicionais: false
    },
    {
        id: "pantera-020",
        name: "Xis Filé Mignon Gaúcho",
        category: "sanduiches",
        group: "Sanduíches & Xis",
        desc: "Tiras generosas de filé mignon na chapa, queijo colonial derretido, presunto, ovo, milho, ervilha, alface, tomate e maionese no pão de xis.",
        badge: "Filé Puro 🥩",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
        price: 36.90,
        hasAdicionais: false
    },

    // --- CHOPPS & CERVEJAS ---
    {
        id: "pantera-021",
        name: "Chopp Pilsen Artesanal 500ml",
        category: "chopps",
        group: "Mais Vendidos",
        desc: "Chopp regional da Serra Gaúcha, leve, refrescante e servido estupidamente gelado com colarinho cremoso perfeito.",
        badge: "Geladíssimo 🍺",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1608270116801-b258359b3ee4?auto=format&fit=crop&w=700&q=80",
        price: 14.00,
        hasAdicionais: false
    },
    {
        id: "pantera-022",
        name: "Chopp IPA Artesanal da Serra 500ml",
        category: "chopps",
        group: "Chopps & Cervejas",
        desc: "India Pale Ale aromática com notas cítricas de lúpulos nobres, amargor marcante e final equilibrado.",
        badge: "Artesanal Serra 🌿",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=700&q=80",
        price: 17.00,
        hasAdicionais: false
    },
    {
        id: "pantera-023",
        name: "Cerveja Original 600ml (Garrafa)",
        category: "chopps",
        group: "Chopps & Cervejas",
        desc: "Garrafa 600ml servida com camisa térmica, estupidamente gelada.",
        badge: "Clássico de Boteco ❄️",
        rating: "4.8",
        img: "https://images.unsplash.com/photo-1608270116801-b258359b3ee4?auto=format&fit=crop&w=700&q=80",
        price: 15.00,
        hasAdicionais: false
    },
    {
        id: "pantera-024",
        name: "Heineken Long Neck 330ml",
        category: "chopps",
        group: "Chopps & Cervejas",
        desc: "Cerveja Premium Lager puro malte, servida trincando de gelada.",
        badge: "Puro Malte 🟢",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1618886614638-80e3c15cd819?auto=format&fit=crop&w=700&q=80",
        price: 12.00,
        hasAdicionais: false
    },

    // --- DRINKS & CAIPIRINHAS ---
    {
        id: "pantera-025",
        name: "Caipirinha de Cachaça Envelhecida com Limão",
        category: "drinks",
        group: "Drinks & Caipirinhas",
        desc: "Cachaça artesanal da Serra, limão taiti fresco macerado com açúcar e bastante gelo.",
        badge: "Autêntica Raiz 🍋",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80",
        price: 20.00,
        hasAdicionais: false
    },
    {
        id: "pantera-026",
        name: "Caipiroska de Frutas Vermelhas",
        category: "drinks",
        group: "Drinks & Caipirinhas",
        desc: "Vodka premium, mix de morango, amora e framboesa frescas com folhas de hortelã maceradas.",
        badge: "Mais Pedida 🍓",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80",
        price: 24.00,
        hasAdicionais: false
    },
    {
        id: "pantera-027",
        name: "Gin Tropical Pantera",
        category: "drinks",
        group: "Drinks & Caipirinhas",
        desc: "Gin London Dry, polpa de maracujá fresco, rodela de laranja e Red Bull Tropical.",
        badge: "Refrescante 🍹",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=700&q=80",
        price: 28.00,
        hasAdicionais: false
    },
    {
        id: "pantera-028",
        name: "Moscow Mule de Boteco com Espuma de Gengibre",
        category: "drinks",
        group: "Drinks & Caipirinhas",
        desc: "Vodka, suco de limão fresco e a famosa espuma artesanal de gengibre na caneca de cobre.",
        badge: "Na Caneca de Cobre 🧊",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=700&q=80",
        price: 26.00,
        hasAdicionais: false
    },

    // --- BEBIDAS NÃO ALCOÓLICAS ---
    {
        id: "pantera-029",
        name: "Coca-Cola Original 350ml (Lata)",
        category: "bebidas",
        group: "Bebidas",
        desc: "Lata 350ml gelada.",
        badge: "Gelada 🥤",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&q=80",
        price: 6.00,
        hasAdicionais: false
    },
    {
        id: "pantera-030",
        name: "Coca-Cola Zero 350ml (Lata)",
        category: "bebidas",
        group: "Bebidas",
        desc: "Lata 350ml sem açúcar gelada.",
        badge: "Zero Açúcar 🥤",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&q=80",
        price: 6.00,
        hasAdicionais: false
    },
    {
        id: "pantera-031",
        name: "Guaraná Antarctica 350ml (Lata)",
        category: "bebidas",
        group: "Bebidas",
        desc: "Lata 350ml gelada.",
        badge: "Gelado 🍃",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&q=80",
        price: 6.00,
        hasAdicionais: false
    },
    {
        id: "pantera-032",
        name: "Suco Natural da Fruta 500ml",
        category: "bebidas",
        group: "Bebidas",
        desc: "Suco natural feito na hora (Laranja, Limonada Suíça ou Uva Integral da Serra).",
        badge: "100% Fruta 🍊",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=700&q=80",
        price: 10.00,
        hasAdicionais: true,
        options: {
            doneness: ["Laranja Natural", "Limonada Suíça", "Uva Integral da Serra"]
        }
    },
    {
        id: "pantera-033",
        name: "Água Mineral com ou sem Gás 500ml",
        category: "bebidas",
        group: "Bebidas",
        desc: "Garrafa 500ml gelada.",
        badge: "Mineral 💧",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=700&q=80",
        price: 4.50,
        hasAdicionais: true,
        options: {
            doneness: ["Sem Gás", "Com Gás"]
        }
    },

    // --- SOBREMESAS DO BOTECO ---
    {
        id: "pantera-034",
        name: "Pudim de Leite Condensado Caseiro",
        category: "sobremesas",
        group: "Sobremesas",
        desc: "A clássica receita caseira: pudim de leite condensado aveludado, bem cremoso, com calda de caramelo dourada.",
        badge: "Receita de Família 🍮",
        rating: "5.0",
        img: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=700&q=80",
        price: 12.90,
        hasAdicionais: false
    },
    {
        id: "pantera-035",
        name: "Petit Gâteau com Sorvete de Creme",
        category: "sobremesas",
        group: "Sobremesas",
        desc: "Bolinho de chocolate com centro quente derretido, servido com bola de sorvete de baunilha e calda de chocolate.",
        badge: "Centro Quente 🍫",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80",
        price: 21.90,
        hasAdicionais: false
    }
];

// Carregar catálogo (LocalStorage ou Default)
function getProducts() {
    const saved = localStorage.getItem('pantera_catalog');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error('Erro ao ler catálogo do localStorage:', e);
        }
    }
    return DEFAULT_PRODUCTS;
}

let PRODUCTS = getProducts();

// Estado Global do Carrinho e App
let cart = [];
let currentCategory = 'todos';
let searchQuery = '';
let activeModalProduct = null;
let modalQuantity = 1;
let selectedDoneness = '';
let selectedSizeExtra = 0;
let selectedSizeName = '';
let selectedAddons = [];
let selectedDeliveryType = 'delivery'; // 'delivery' | 'retirada'
let selectedDeliveryZone = DELIVERY_ZONES[0];
let selectedPaymentMethod = 'pix'; // 'pix' | 'cartao' | 'dinheiro'

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();
    renderCatalog();
    renderDeliveryZones();
    checkBusinessStatus();
    setupScrollBehavior();
    lucide.createIcons();
});

// Obter Produtos Filtrados
function getFilteredProducts() {
    return PRODUCTS.filter(p => {
        if (p.isPaused) return false;
        
        // Categoria
        const matchCategory = (currentCategory === 'todos') ||
            (currentCategory === 'promocoes' && p.group === 'Mais Vendidos') ||
            (p.category === currentCategory);

        if (!matchCategory) return false;

        // Busca
        if (searchQuery.trim() !== '') {
            const q = searchQuery.toLowerCase();
            const nameMatch = p.name.toLowerCase().includes(q);
            const descMatch = (p.desc || '').toLowerCase().includes(q);
            const badgeMatch = (p.badge || '').toLowerCase().includes(q);
            return nameMatch || descMatch || badgeMatch;
        }

        return true;
    });
}

// Renderizar Catálogo de Produtos com CTAs Convidativos
function renderCatalog() {
    const grid = document.getElementById('catalog-grid');
    if (!grid) return;

    const items = getFilteredProducts();

    if (items.length === 0) {
        grid.innerHTML = `
            <div class="empty-catalog-state">
                <i data-lucide="search-x" style="width:48px;height:48px;color:#DC2626;margin-bottom:12px;"></i>
                <h3>Nenhum prato encontrado</h3>
                <p>Tente buscar por outro termo ou escolha outra categoria acima.</p>
                <button type="button" class="btn-reset-filters" onclick="window.resetFilters()">Ver todo o cardápio</button>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    grid.innerHTML = items.map(p => `
        <article class="product-card" data-id="${p.id}">
            <div class="card-img-wrapper" onclick="window.openProductModal('${p.id}')">
                <img src="${p.img}" alt="${p.name}" class="product-img" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80';">
                ${p.badge ? `<span class="badge-tag">${p.badge}</span>` : ''}
                <div class="rating-pill">
                    <i data-lucide="star" style="width:12px;height:12px;fill:#F59E0B;stroke:none;"></i>
                    <span>${p.rating || '5.0'}</span>
                </div>
            </div>

            <div class="card-info">
                <div class="card-header-row" onclick="window.openProductModal('${p.id}')">
                    <h3 class="product-title">${p.name}</h3>
                </div>
                <p class="product-desc" onclick="window.openProductModal('${p.id}')">${p.desc}</p>

                <div class="card-footer-row">
                    <div class="price-container">
                        <span class="price-prefix">Valor:</span>
                        <span class="price-num">R$ ${p.price.toFixed(2).replace('.', ',')}</span>
                    </div>

                    ${p.hasAdicionais ? `
                        <button type="button" class="btn-add-action btn-options" onclick="window.openProductModal('${p.id}')" aria-label="Escolher acompanhamentos para ${p.name}">
                            <i data-lucide="sliders" style="width:15px;height:15px;"></i>
                            <span>Escolher Acompanhamentos</span>
                        </button>
                    ` : `
                        <button type="button" class="btn-add-action" onclick="window.quickAddToCart('${p.id}')" aria-label="Adicionar ${p.name} ao pedido">
                            <i data-lucide="plus" style="width:15px;height:15px;"></i>
                            <span>+ Adicionar ao Pedido</span>
                        </button>
                    `}
                </div>
            </div>
        </article>
    `).join('');

    lucide.createIcons();
}

// Filtro de Categorias
window.filterCategory = function(cat) {
    currentCategory = cat;
    document.querySelectorAll('.cat-pill').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-category') === cat);
    });
    renderCatalog();
};

// Busca em Tempo Real
window.handleSearch = function(e) {
    searchQuery = e.target.value;
    const clearBtn = document.getElementById('btn-clear-search');
    if (clearBtn) {
        clearBtn.style.display = searchQuery.length > 0 ? 'flex' : 'none';
    }
    renderCatalog();
};

window.clearSearch = function() {
    searchQuery = '';
    const input = document.getElementById('search-input');
    if (input) input.value = '';
    const clearBtn = document.getElementById('btn-clear-search');
    if (clearBtn) clearBtn.style.display = 'none';
    renderCatalog();
};

window.resetFilters = function() {
    searchQuery = '';
    const input = document.getElementById('search-input');
    if (input) input.value = '';
    window.filterCategory('todos');
};

// Modal de Personalização do Produto
window.openProductModal = function(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    activeModalProduct = product;
    modalQuantity = 1;
    selectedDoneness = (product.options && product.options.doneness) ? product.options.doneness[0] : '';
    selectedSizeExtra = 0;
    selectedSizeName = (product.options && product.options.sizes) ? product.options.sizes[0].name : '';
    selectedAddons = [];

    // Preencher Elementos do Modal
    const modal = document.getElementById('product-modal');
    const modalImg = document.getElementById('modal-img');
    const modalBadge = document.getElementById('modal-badge');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalOptionsWrap = document.getElementById('modal-options-wrap');
    const modalObs = document.getElementById('modal-obs');
    const qtyNum = document.getElementById('modal-qty-num');

    if (modalImg) modalImg.src = product.img;
    if (modalBadge) {
        if (product.badge) {
            modalBadge.innerText = product.badge;
            modalBadge.style.display = 'inline-block';
        } else {
            modalBadge.style.display = 'none';
        }
    }
    if (modalTitle) modalTitle.innerText = product.name;
    if (modalDesc) modalDesc.innerText = product.desc;
    if (modalObs) modalObs.value = '';
    if (qtyNum) qtyNum.innerText = '1';

    // Montar Opções do Modal
    if (modalOptionsWrap) {
        let html = '';

        // 1. Tamanho / Porção
        if (product.options && product.options.sizes && product.options.sizes.length > 0) {
            html += `
                <div class="modal-opt-group">
                    <div class="opt-group-header">
                        <h4>Escolha a Porção</h4>
                        <span class="opt-required-tag">Obrigatório</span>
                    </div>
                    <div class="opt-list-radios">
                        ${product.options.sizes.map((s, idx) => `
                            <label class="opt-radio-row">
                                <div class="opt-radio-left">
                                    <input type="radio" name="modal-size" value="${s.extra}" data-name="${s.name}" ${idx === 0 ? 'checked' : ''} onchange="window.handleModalSizeChange(this)">
                                    <span class="opt-radio-label">${s.name}</span>
                                </div>
                                ${s.extra > 0 ? `<span class="opt-price-add">+ R$ ${s.extra.toFixed(2).replace('.', ',')}</span>` : '<span class="opt-price-included">Incluso</span>'}
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // 2. Ponto da Carne / Escolha Principal
        if (product.options && product.options.doneness && product.options.doneness.length > 0) {
            const groupTitle = product.category === 'bebidas' ? 'Escolha o Sabor' : 'Ponto da Carne';
            html += `
                <div class="modal-opt-group">
                    <div class="opt-group-header">
                        <h4>${groupTitle}</h4>
                        <span class="opt-required-tag">Obrigatório</span>
                    </div>
                    <div class="opt-list-radios">
                        ${product.options.doneness.map((d, idx) => `
                            <label class="opt-radio-row">
                                <div class="opt-radio-left">
                                    <input type="radio" name="modal-doneness" value="${d}" ${idx === 0 ? 'checked' : ''} onchange="window.handleModalDonenessChange('${d}')">
                                    <span class="opt-radio-label">${d}</span>
                                </div>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // 3. Adicionais Extras
        if (product.options && product.options.addons && product.options.addons.length > 0) {
            html += `
                <div class="modal-opt-group">
                    <div class="opt-group-header">
                        <h4>Adicionais &amp; Extras</h4>
                        <span class="opt-optional-tag">Opcional</span>
                    </div>
                    <div class="opt-list-checks">
                        ${product.options.addons.map((a, idx) => `
                            <label class="opt-check-row">
                                <div class="opt-check-left">
                                    <input type="checkbox" value="${a.name}" data-price="${a.price}" onchange="window.handleModalAddonToggle(this)">
                                    <span class="opt-check-label">${a.name}</span>
                                </div>
                                <span class="opt-price-add">+ R$ ${a.price.toFixed(2).replace('.', ',')}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        modalOptionsWrap.innerHTML = html;
    }

    updateModalSubtotal();

    if (modal) {
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    }
};

window.closeProductModal = function() {
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
    activeModalProduct = null;
};

window.handleModalSizeChange = function(input) {
    selectedSizeExtra = parseFloat(input.value) || 0;
    selectedSizeName = input.getAttribute('data-name') || '';
    updateModalSubtotal();
};

window.handleModalDonenessChange = function(doneness) {
    selectedDoneness = doneness;
};

window.handleModalAddonToggle = function(checkbox) {
    const name = checkbox.value;
    const price = parseFloat(checkbox.getAttribute('data-price')) || 0;

    if (checkbox.checked) {
        selectedAddons.push({ name, price });
    } else {
        selectedAddons = selectedAddons.filter(a => a.name !== name);
    }
    updateModalSubtotal();
};

window.modalQtyInc = function() {
    modalQuantity++;
    const qtyNum = document.getElementById('modal-qty-num');
    if (qtyNum) qtyNum.innerText = modalQuantity;
    updateModalSubtotal();
};

window.modalQtyDec = function() {
    if (modalQuantity > 1) {
        modalQuantity--;
        const qtyNum = document.getElementById('modal-qty-num');
        if (qtyNum) qtyNum.innerText = modalQuantity;
        updateModalSubtotal();
    }
};

function calculateModalItemUnitPrice() {
    if (!activeModalProduct) return 0;
    let base = activeModalProduct.price + selectedSizeExtra;
    const addonsTotal = selectedAddons.reduce((acc, curr) => acc + curr.price, 0);
    return base + addonsTotal;
}

function updateModalSubtotal() {
    const subtotalEl = document.getElementById('modal-subtotal-price');
    const unitPrice = calculateModalItemUnitPrice();
    const total = unitPrice * modalQuantity;
    if (subtotalEl) {
        subtotalEl.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
}

// Adicionar do Modal ao Carrinho
window.addToCartModal = function() {
    if (!activeModalProduct) return;

    const obsInput = document.getElementById('modal-obs');
    const obs = obsInput ? obsInput.value.trim() : '';
    const unitPrice = calculateModalItemUnitPrice();

    const cartItem = {
        id: activeModalProduct.id,
        name: activeModalProduct.name,
        img: activeModalProduct.img,
        basePrice: activeModalProduct.price,
        unitPrice: unitPrice,
        quantity: modalQuantity,
        size: selectedSizeName,
        doneness: selectedDoneness,
        addons: [...selectedAddons],
        obs: obs
    };

    cart.push(cartItem);
    saveCartToStorage();
    updateCartUI();
    window.closeProductModal();
    showToast(`✓ ${activeModalProduct.name} adicionado ao pedido!`);
};

// Adição Rápida de 1 Toque
window.quickAddToCart = function(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(item => item.id === id && (!item.addons || item.addons.length === 0) && !item.obs && !item.size);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            img: product.img,
            basePrice: product.price,
            unitPrice: product.price,
            quantity: 1,
            size: '',
            doneness: '',
            addons: [],
            obs: ''
        });
    }

    saveCartToStorage();
    updateCartUI();
    showToast(`✓ ${product.name} adicionado!`);
};

// Gerenciamento de Quantidade no Carrinho
window.cartQtyInc = function(index) {
    if (cart[index]) {
        cart[index].quantity += 1;
        saveCartToStorage();
        updateCartUI();
    }
};

window.cartQtyDec = function(index) {
    if (cart[index]) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        saveCartToStorage();
        updateCartUI();
    }
};

window.removeCartItem = function(index) {
    if (cart[index]) {
        const name = cart[index].name;
        cart.splice(index, 1);
        saveCartToStorage();
        updateCartUI();
        showToast(`Item removido do pedido.`);
    }
};

window.clearCart = function() {
    if (cart.length === 0) return;
    if (confirm('Deseja limpar todos os itens do seu pedido?')) {
        cart = [];
        saveCartToStorage();
        updateCartUI();
        showToast(`Pedido limpo.`);
    }
};

// Abrir e Fechar Gaveta do Carrinho
window.openCart = function() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
        drawer.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('cart-open');
    }
};

window.closeCart = function() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('cart-open');
    }
};

// Persistência no LocalStorage
function saveCartToStorage() {
    localStorage.setItem('pantera_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('pantera_cart');
    if (saved) {
        try {
            cart = JSON.parse(saved);
        } catch (e) {
            cart = [];
        }
    }
    updateCartUI();
}

// Atualizar Interface do Carrinho
function updateCartUI() {
    const countBadges = document.querySelectorAll('#cart-count, .cart-count-badge');
    const totalHeaderEl = document.getElementById('cart-total-nav');
    const floatingBar = document.getElementById('cart-floating-bar');
    const floatingCount = document.getElementById('floating-bar-count');
    const floatingTotal = document.getElementById('floating-bar-total');

    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);

    countBadges.forEach(el => {
        if (el) el.innerText = totalQty;
    });

    const formattedSubtotal = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    if (totalHeaderEl) totalHeaderEl.innerText = formattedSubtotal;

    // Barra Móvel Flutuante
    if (floatingBar) {
        if (totalQty > 0) {
            floatingBar.style.display = 'flex';
            if (floatingCount) floatingCount.innerText = `${totalQty} ${totalQty === 1 ? 'item' : 'itens'}`;
            if (floatingTotal) floatingTotal.innerText = formattedSubtotal;
        } else {
            floatingBar.style.display = 'none';
        }
    }

    renderCartItemsList(subtotal);
}

// Renderizar Lista de Itens no Drawer
function renderCartItemsList(subtotal) {
    const listContainer = document.getElementById('cart-items-container');
    const emptyState = document.getElementById('cart-empty-state');
    const checkoutForm = document.getElementById('cart-checkout-section');
    const subtotalEl = document.getElementById('cart-summary-subtotal');
    const feeEl = document.getElementById('cart-summary-fee');
    const totalEl = document.getElementById('cart-summary-total');

    if (!listContainer) return;

    if (cart.length === 0) {
        if (emptyState) emptyState.style.display = 'block';
        if (checkoutForm) checkoutForm.style.display = 'none';
        listContainer.innerHTML = '';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (checkoutForm) checkoutForm.style.display = 'block';

    listContainer.innerHTML = cart.map((item, idx) => {
        const itemTotal = item.unitPrice * item.quantity;
        return `
            <div class="cart-item-card">
                <img src="${item.img}" alt="${item.name}" class="cart-item-thumb" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=200&q=80';">
                
                <div class="cart-item-details">
                    <div class="cart-item-header">
                        <h4 class="cart-item-name">${item.name}</h4>
                        <button type="button" class="btn-remove-item" onclick="window.removeCartItem(${idx})" title="Remover item" aria-label="Remover item">
                            <i data-lucide="trash-2" style="width:15px;height:15px;"></i>
                        </button>
                    </div>

                    ${item.size ? `<div class="cart-item-spec"><strong>Porção:</strong> ${item.size}</div>` : ''}
                    ${item.doneness ? `<div class="cart-item-spec"><strong>Ponto:</strong> ${item.doneness}</div>` : ''}
                    
                    ${item.addons && item.addons.length > 0 ? `
                        <div class="cart-item-addons-list">
                            ${item.addons.map(a => `<span>+ ${a.name} (+R$ ${a.price.toFixed(2).replace('.', ',')})</span>`).join('')}
                        </div>
                    ` : ''}

                    ${item.obs ? `<div class="cart-item-obs"><em>Obs: ${item.obs}</em></div>` : ''}

                    <div class="cart-item-price-qty-row">
                        <div class="cart-qty-ctrl">
                            <button type="button" class="btn-qty-mini" onclick="window.cartQtyDec(${idx})" aria-label="Diminuir">-</button>
                            <span class="qty-val">${item.quantity}</span>
                            <button type="button" class="btn-qty-mini" onclick="window.cartQtyInc(${idx})" aria-label="Aumentar">+</button>
                        </div>
                        <span class="cart-item-total-price">R$ ${itemTotal.toFixed(2).replace('.', ',')}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    lucide.createIcons();

    // Atualizar Totais Financeiros
    const fee = selectedDeliveryType === 'delivery' ? selectedDeliveryZone.fee : 0;
    const finalTotal = subtotal + fee;

    if (subtotalEl) subtotalEl.innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    if (feeEl) {
        feeEl.innerText = selectedDeliveryType === 'delivery' 
            ? `R$ ${fee.toFixed(2).replace('.', ',')}` 
            : 'Grátis (Retirada)';
    }
    if (totalEl) totalEl.innerText = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;
}

// Renderizar Opções de Entrega / Bairros
function renderDeliveryZones() {
    const select = document.getElementById('delivery-neighborhood-select');
    if (!select) return;

    select.innerHTML = DELIVERY_ZONES.map((z, idx) => `
        <option value="${idx}">
            ${z.neighborhood} — R$ ${z.fee.toFixed(2).replace('.', ',')} (${z.time})
        </option>
    `).join('');
}

window.handleZoneChange = function(e) {
    const index = parseInt(e.target.value) || 0;
    selectedDeliveryZone = DELIVERY_ZONES[index];
    const subtotal = cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
    renderCartItemsList(subtotal);
};

// Alternar Tipo de Entrega
window.selectDeliveryType = function(type) {
    selectedDeliveryType = type;
    const btnTele = document.getElementById('btn-type-delivery');
    const btnRetirada = document.getElementById('btn-type-retirada');
    const addressBox = document.getElementById('delivery-address-group');
    const zoneGroup = document.getElementById('delivery-zone-group');

    if (type === 'delivery') {
        if (btnTele) btnTele.classList.add('active');
        if (btnRetirada) btnRetirada.classList.remove('active');
        if (addressBox) addressBox.style.display = 'block';
        if (zoneGroup) zoneGroup.style.display = 'block';
    } else {
        if (btnTele) btnTele.classList.remove('active');
        if (btnRetirada) btnRetirada.classList.add('active');
        if (addressBox) addressBox.style.display = 'none';
        if (zoneGroup) zoneGroup.style.display = 'none';
    }

    const subtotal = cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
    renderCartItemsList(subtotal);
};

// Alternar Método de Pagamento
window.selectPayment = function(method) {
    selectedPaymentMethod = method;
    const btnPix = document.getElementById('btn-pay-pix');
    const btnCard = document.getElementById('btn-pay-cartao');
    const btnCash = document.getElementById('btn-pay-dinheiro');
    const cashBox = document.getElementById('cash-change-group');

    [btnPix, btnCard, btnCash].forEach(b => { if (b) b.classList.remove('active'); });

    if (method === 'pix' && btnPix) btnPix.classList.add('active');
    if (method === 'cartao' && btnCard) btnCard.classList.add('active');
    if (method === 'dinheiro' && btnCash) {
        btnCash.classList.add('active');
        if (cashBox) cashBox.style.display = 'block';
    } else {
        if (cashBox) cashBox.style.display = 'none';
    }
};

// Despachar Pedido via WhatsApp no Padrão Comanda Limpa Onira.fly
window.sendOrderWhatsApp = function() {
    if (cart.length === 0) {
        alert('Seu pedido está vazio. Escolha um prato do cardápio!');
        return;
    }

    const nameInput = document.getElementById('client-name');
    const addressInput = document.getElementById('client-address');
    const cashChangeInput = document.getElementById('cash-change-value');

    const clientName = nameInput ? nameInput.value.trim() : '';
    if (!clientName) {
        alert('Por favor, informe seu Nome para identificação na comanda.');
        if (nameInput) nameInput.focus();
        return;
    }

    let clientAddress = '';
    if (selectedDeliveryType === 'delivery') {
        clientAddress = addressInput ? addressInput.value.trim() : '';
        if (!clientAddress) {
            alert('Por favor, informe o Endereço Completo de entrega (Rua, Número, Apto/Bloco).');
            if (addressInput) addressInput.focus();
            return;
        }
    }

    // Montar Comanda WhatsApp
    const subtotal = cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
    const fee = selectedDeliveryType === 'delivery' ? selectedDeliveryZone.fee : 0;
    const total = subtotal + fee;

    let text = `_pedido via site by Onira.fly_\n\n`;

    // Tipo de Pedido
    if (selectedDeliveryType === 'delivery') {
        text += `*Solicitação de Tele-Entrega*\n\n`;
    } else {
        text += `*Solicitação de Retirada no Balcão*\n\n`;
    }

    // Itens do Pedido
    cart.forEach(item => {
        text += `*${item.quantity}x* ${item.name}`;
        if (item.size) text += ` · ${item.size}`;
        if (item.doneness) text += ` · Ponto: ${item.doneness}`;
        text += `\n`;

        if (item.addons && item.addons.length > 0) {
            item.addons.forEach(a => {
                text += `+ ${a.name}\n`;
            });
        }

        if (item.obs) {
            text += `_Obs: ${item.obs}_\n`;
        }

        text += `*R$ ${(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}*\n\n`;
    });

    // Totais
    text += `*Itens: R$ ${subtotal.toFixed(2).replace('.', ',')}*\n`;
    if (selectedDeliveryType === 'delivery') {
        text += `Entrega (${selectedDeliveryZone.neighborhood}): R$ ${fee.toFixed(2).replace('.', ',')}\n`;
    } else {
        text += `Entrega: Retirada no Balcão (Grátis)\n`;
    }
    text += `*Total: R$ ${total.toFixed(2).replace('.', ',')}*\n\n`;

    // Identificação do Cliente
    text += `*${clientName}*\n`;
    if (selectedDeliveryType === 'delivery') {
        text += `${clientAddress} — ${selectedDeliveryZone.neighborhood}\n`;
    }

    // Forma de Pagamento
    if (selectedPaymentMethod === 'pix') {
        text += `Pagamento em Pix — combinamos a chave por aqui\n`;
    } else if (selectedPaymentMethod === 'cartao') {
        text += `Pagamento no cartão — favor trazer a maquininha\n`;
    } else if (selectedPaymentMethod === 'dinheiro') {
        const change = cashChangeInput ? cashChangeInput.value.trim() : '';
        text += change ? `Pagamento em dinheiro — troco para R$ ${change}\n` : `Pagamento em dinheiro — sem necessidade de troco\n`;
    }

    text += `\n_Enviado pelo site do Botequim Pantera_`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;

    window.open(whatsappUrl, '_blank');
};

// Toast Notifications
function showToast(message) {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        toast.className = 'toast-notification';
        document.body.appendChild(toast);
    }
    toast.innerText = message;
    toast.classList.add('visible');

    setTimeout(() => {
        toast.classList.remove('visible');
    }, 3000);
}

// Checar Status de Abertura (Horário do Botequim)
function checkBusinessStatus() {
    const statusTextHeader = document.getElementById('status-text-header');
    const statusDot = document.querySelector('.status-dot');
    
    // Botequim Pantera: Terça a Sábado 11:30 às 14:00 e 18:30 às 22:30
    const now = new Date();
    const day = now.getDay(); // 0 = Domingo, 1 = Segunda
    const hour = now.getHours();
    const minute = now.getMinutes();
    const timeInMinutes = hour * 60 + minute;

    let isOpen = false;
    if (day >= 2 && day <= 6) { // Terça a Sábado
        if ((timeInMinutes >= 690 && timeInMinutes <= 840) || (timeInMinutes >= 1110 && timeInMinutes <= 1365)) {
            isOpen = true;
        }
    }

    if (statusTextHeader) {
        if (isOpen) {
            statusTextHeader.innerText = 'Aberto Agora • Atendimento & Tele';
            if (statusDot) statusDot.style.background = '#10B981';
        } else {
            statusTextHeader.innerText = 'Aberto Hoje às 18h30 • Faça seu Pedido';
            if (statusDot) statusDot.style.background = '#DC2626';
        }
    }
}

// Comportamento Retrátil do Widget de Proposta (.onira-cta)
function setupScrollBehavior() {
    const cta = document.querySelector('.onira-cta');
    if (!cta) return;

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        cta.classList.add('scrolling');
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            cta.classList.remove('scrolling');
        }, 350);
    });
}

window.toggleOniraCta = function() {
    const cta = document.querySelector('.onira-cta');
    if (cta) {
        cta.classList.toggle('collapsed');
    }
};
