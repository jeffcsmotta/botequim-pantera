/**
 * Botequim Pantera - Lógica do Painel Admin
 * Gestão de Estoque, Preços e Produtos
 * Onira Labs Stack
 */

let adminProducts = [];
let activeAdminCategory = 'todos';
let adminSearchQuery = '';
let currentPinInput = '';
const DEFAULT_PIN = '1234';

document.addEventListener('DOMContentLoaded', () => {
    initOwnerAuth();
    loadAdminProducts();
    renderAdminUI();
    checkBiometricsSupport();

    if (window.lucide) {
        window.lucide.createIcons();
    }
});

// Suporte a Biometria
async function checkBiometricsSupport() {
    const btnBio = document.getElementById('btn-biometric');
    if (window.PublicKeyCredential && btnBio) {
        try {
            const available = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
            if (available) {
                btnBio.style.display = 'inline-flex';
            }
        } catch (e) {}
    }
}

window.authenticateWithBiometrics = async function() {
    sessionStorage.setItem('pantera_owner_auth', 'true');
    showAdminToast('✓ Autenticado com Biometria / TouchID!');
    
    const pinModal = document.getElementById('pin-modal');
    const adminApp = document.getElementById('admin-app');
    if (pinModal) pinModal.style.display = 'none';
    if (adminApp) adminApp.style.display = 'block';

    if (window.lucide) window.lucide.createIcons();
};

function initOwnerAuth() {
    const isAuth = sessionStorage.getItem('pantera_owner_auth') === 'true';
    const pinModal = document.getElementById('pin-modal');
    const adminApp = document.getElementById('admin-app');

    if (isAuth) {
        if (pinModal) pinModal.style.display = 'none';
        if (adminApp) adminApp.style.display = 'block';
    } else {
        if (pinModal) pinModal.style.display = 'flex';
        if (adminApp) adminApp.style.display = 'none';
    }
}

// Manipulação de PIN
window.appendPin = function(num) {
    if (currentPinInput.length >= 4) return;
    currentPinInput += num;
    updatePinDisplay();

    if (currentPinInput.length === 4) {
        setTimeout(submitPin, 150);
    }
};

window.clearPin = function() {
    currentPinInput = '';
    updatePinDisplay();
};

function updatePinDisplay() {
    for (let i = 0; i < 4; i++) {
        const dot = document.getElementById(`dot-${i}`);
        if (dot) {
            dot.classList.toggle('filled', i < currentPinInput.length);
        }
    }
}

window.submitPin = function() {
    const savedPin = localStorage.getItem('pantera_owner_pin') || DEFAULT_PIN;
    if (currentPinInput === savedPin) {
        sessionStorage.setItem('pantera_owner_auth', 'true');
        showAdminToast('✓ Acesso Autorizado!');
        
        const pinModal = document.getElementById('pin-modal');
        const adminApp = document.getElementById('admin-app');
        if (pinModal) pinModal.style.display = 'none';
        if (adminApp) adminApp.style.display = 'block';

        if (window.lucide) window.lucide.createIcons();
    } else {
        showAdminToast('❌ PIN Incorreto! Tente 1234.');
        currentPinInput = '';
        updatePinDisplay();
    }
};

// Catálogo Padrão de Fábrica (Botequim Pantera Real)
const DEFAULT_PRODUCTS = [
    {
        id: "pantera-001",
        name: "Bauru ao Prato (Individual)",
        category: "baurus",
        group: "Mais Vendidos",
        desc: "Serve 1 pessoa • Bauru individual de coxão mole com presunto e queijo ao molho de tomate. Acompanha arroz, fritas, salada mista e pães.",
        badge: "Campeão Sabores do Sul ⭐",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=80",
        price: 78.00,
        hasAdicionais: true
    },
    {
        id: "pantera-002",
        name: "1/2 Bauru Tradicional (Serve 2 Pessoas)",
        category: "baurus",
        group: "Baurus Caxienses",
        desc: "Serve 2 pessoas • Meio bauru tradicional: coxão mole, presunto de primeira e queijo derretido no molho de tomate caseiro. Acompanha arroz branco, fritas, salada mista e pães.",
        badge: "Para Dividir 👥",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&w=700&q=80",
        price: 162.00,
        hasAdicionais: true
    },
    {
        id: "pantera-003",
        name: "Bauru Rei Inteiro (Serve ~4 Pessoas)",
        category: "baurus",
        group: "Baurus Caxienses",
        desc: "Serve ~4 pessoas • Coxão mole, presunto e queijo no molho de tomate com verde, milho, ervilha e palmito. Acompanha arroz, fritas, salada mista e pães.",
        badge: "Rei da Casa 👑",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?auto=format&fit=crop&w=700&q=80",
        price: 280.00,
        hasAdicionais: true
    },
    {
        id: "pantera-004",
        name: "Bauru Abraçadinho Inteiro (Serve ~4 Pessoas)",
        category: "baurus",
        group: "Baurus Caxienses",
        desc: "Serve ~4 pessoas • Abraçadinho inteiro sem presunto: coxão mole com queijo derretido no molho de tomate caseiro. Acompanha arroz, fritas, salada mista e pães frescos.",
        badge: "Para Compartilhar 👥",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?auto=format&fit=crop&w=700&q=80",
        price: 255.00,
        hasAdicionais: true
    },
    {
        id: "pantera-005",
        name: "1/2 Bauru Abraçadinho (Serve 2 Pessoas)",
        category: "baurus",
        group: "Baurus Caxienses",
        desc: "Serve 2 pessoas • Meio abraçadinho sem presunto: coxão mole com queijo derretido no molho de tomate caseiro. Acompanha arroz, fritas, salada mista e pães.",
        badge: "Para Dividir 👥",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=80",
        price: 158.00,
        hasAdicionais: true
    },
    {
        id: "pantera-036",
        name: "Bauru ao Prato Vegetariano",
        category: "baurus",
        group: "Baurus Caxienses",
        desc: "Serve 1 pessoa • Ovos mexidos, queijo ao molho de tomate com verde, milho, ervilha e palmito. Acompanha arroz, fritas, salada mista e pães.",
        badge: "Vegetariano 🌱",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=700&q=80",
        price: 63.00,
        hasAdicionais: true
    },
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
        hasAdicionais: true
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
        hasAdicionais: true
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
        hasAdicionais: true
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
        hasAdicionais: true
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
        hasAdicionais: true
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
        hasAdicionais: true
    },
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
        hasAdicionais: true
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
        hasAdicionais: true
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
        hasAdicionais: true
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
        hasAdicionais: true
    },
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

function loadAdminProducts() {
    const saved = localStorage.getItem('pantera_catalog');
    if (saved) {
        try {
            adminProducts = JSON.parse(saved);
        } catch (e) {
            adminProducts = [...DEFAULT_PRODUCTS];
        }
    } else {
        adminProducts = [...DEFAULT_PRODUCTS];
        saveAdminProducts();
    }
}

function saveAdminProducts() {
    localStorage.setItem('pantera_catalog', JSON.stringify(adminProducts));
}

function renderAdminUI() {
    renderAdminKPIs();
    renderAdminCatalogTable();
}

function renderAdminKPIs() {
    const total = adminProducts.length;
    const active = adminProducts.filter(p => !p.isPaused).length;
    const paused = adminProducts.filter(p => p.isPaused).length;
    const categories = new Set(adminProducts.map(p => p.category)).size;

    const elTotal = document.getElementById('kpi-total');
    const elActive = document.getElementById('kpi-active');
    const elPaused = document.getElementById('kpi-paused');
    const elCats = document.getElementById('kpi-categories');

    if (elTotal) elTotal.innerText = total;
    if (elActive) elActive.innerText = active;
    if (elPaused) elPaused.innerText = paused;
    if (elCats) elCats.innerText = categories;
}

function renderAdminCatalogTable() {
    const tbody = document.getElementById('admin-products-tbody');
    if (!tbody) return;

    let items = adminProducts.filter(p => {
        if (activeAdminCategory !== 'todos' && p.category !== activeAdminCategory) {
            return false;
        }
        if (adminSearchQuery.trim() !== '') {
            const q = adminSearchQuery.toLowerCase();
            return p.name.toLowerCase().includes(q) || (p.desc && p.desc.toLowerCase().includes(q));
        }
        return true;
    });

    if (items.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" class="admin-table-empty">
                    <p>Nenhum prato encontrado com os filtros atuais.</p>
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = items.map(p => `
        <tr class="admin-row ${p.isPaused ? 'row-paused' : ''}">
            <td class="col-thumb">
                <img src="${p.img}" alt="${p.name}" class="admin-thumb-img" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=100&q=80';">
            </td>
            <td class="col-name">
                <div class="product-name-title">${p.name}</div>
                <div class="product-cat-tag">${formatCategoryName(p.category)}</div>
            </td>
            <td class="col-price">
                <span class="price-emerald">R$ ${p.price.toFixed(2).replace('.', ',')}</span>
            </td>
            <td class="col-status">
                <span class="badge-status ${p.isPaused ? 'status-paused' : 'status-active'}">
                    ${p.isPaused ? 'Pausado / Esgotado' : 'Ativo na Loja'}
                </span>
            </td>
            <td class="col-toggle">
                <label class="switch-toggle" title="Pausar ou Ativar Prato">
                    <input type="checkbox" ${p.isPaused ? '' : 'checked'} onchange="window.toggleProductStatus('${p.id}')">
                    <span class="slider round"></span>
                </label>
            </td>
            <td class="col-actions">
                <button type="button" class="btn-action-icon" onclick="window.openEditModal('${p.id}')" title="Editar Informações">
                    <i data-lucide="edit-3" style="width:16px;height:16px;"></i>
                </button>
                <button type="button" class="btn-action-icon btn-del" onclick="window.deleteProductAdmin('${p.id}')" title="Remover Prato">
                    <i data-lucide="trash-2" style="width:16px;height:16px;"></i>
                </button>
            </td>
        </tr>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
}

function formatCategoryName(cat) {
    const map = {
        baurus: 'Baurus Caxienses',
        pratos: 'À La Minutas & Pratos',
        petiscos: 'Petiscos & Porções',
        sanduiches: 'Sanduíches & Xis',
        chopps: 'Chopps & Cervejas',
        drinks: 'Drinks & Caipirinhas',
        bebidas: 'Bebidas',
        sobremesas: 'Sobremesas'
    };
    return map[cat] || cat;
}

window.filterAdminCategory = function(cat) {
    activeAdminCategory = cat;
    document.querySelectorAll('.admin-cat-chip').forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-cat') === cat);
    });
    renderAdminCatalogTable();
};

window.handleAdminSearch = function(e) {
    adminSearchQuery = e.target.value;
    renderAdminCatalogTable();
};

window.toggleProductStatus = function(id) {
    const p = adminProducts.find(x => x.id === id);
    if (p) {
        p.isPaused = !p.isPaused;
        saveAdminProducts();
        renderAdminUI();
        showAdminToast(p.isPaused ? `⏸️ ${p.name} pausado!` : `✓ ${p.name} ativado!`);
    }
};

window.deleteProductAdmin = function(id) {
    const p = adminProducts.find(x => x.id === id);
    if (!p) return;

    if (confirm(`Tem certeza que deseja remover "${p.name}" do cardápio?`)) {
        adminProducts = adminProducts.filter(x => x.id !== id);
        saveAdminProducts();
        renderAdminUI();
        showAdminToast(`Item removido.`);
    }
};

// Modal de Adicionar / Editar
window.openAddModal = function() {
    document.getElementById('edit-id').value = '';
    document.getElementById('edit-name').value = '';
    document.getElementById('edit-cat').value = 'baurus';
    document.getElementById('edit-price').value = '';
    document.getElementById('edit-desc').value = '';
    document.getElementById('edit-img').value = '';
    document.getElementById('edit-badge').value = '';

    const modalTitle = document.getElementById('modal-edit-title');
    if (modalTitle) modalTitle.innerText = 'Novo Prato no Cardápio';

    const modal = document.getElementById('admin-edit-modal');
    if (modal) modal.style.display = 'flex';
};

window.openEditModal = function(id) {
    const p = adminProducts.find(x => x.id === id);
    if (!p) return;

    document.getElementById('edit-id').value = p.id;
    document.getElementById('edit-name').value = p.name;
    document.getElementById('edit-cat').value = p.category;
    document.getElementById('edit-price').value = p.price;
    document.getElementById('edit-desc').value = p.desc || '';
    document.getElementById('edit-img').value = p.img || '';
    document.getElementById('edit-badge').value = p.badge || '';

    const modalTitle = document.getElementById('modal-edit-title');
    if (modalTitle) modalTitle.innerText = `Editar: ${p.name}`;

    const modal = document.getElementById('admin-edit-modal');
    if (modal) modal.style.display = 'flex';
};

window.closeEditModal = function() {
    const modal = document.getElementById('admin-edit-modal');
    if (modal) modal.style.display = 'none';
};

window.saveProductForm = function(e) {
    e.preventDefault();

    const id = document.getElementById('edit-id').value;
    const name = document.getElementById('edit-name').value.trim();
    const category = document.getElementById('edit-cat').value;
    const price = parseFloat(document.getElementById('edit-price').value) || 0;
    const desc = document.getElementById('edit-desc').value.trim();
    const img = document.getElementById('edit-img').value.trim() || 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80';
    const badge = document.getElementById('edit-badge').value.trim();

    if (!name || price <= 0) {
        alert('Por favor preencha o nome e um preço válido!');
        return;
    }

    if (id) {
        // Edição
        const p = adminProducts.find(x => x.id === id);
        if (p) {
            p.name = name;
            p.category = category;
            p.price = price;
            p.desc = desc;
            p.img = img;
            p.badge = badge;
        }
        showAdminToast('✓ Prato atualizado com sucesso!');
    } else {
        // Novo
        const newId = 'pantera-' + String(Date.now()).slice(-4);
        adminProducts.unshift({
            id: newId,
            name,
            category,
            price,
            desc,
            img,
            badge,
            hasAdicionais: true,
            isPaused: false
        });
        showAdminToast('✓ Novo prato cadastrado!');
    }

    saveAdminProducts();
    renderAdminUI();
    window.closeEditModal();
};

// Backup e Restauração
window.exportCatalogBackup = function() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(adminProducts, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `botequim_pantera_cardapio_${new Date().toISOString().slice(0,10)}.json`);
    dlAnchor.click();
    showAdminToast('✓ Backup exportado com sucesso!');
};

window.importCatalogBackup = function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const imported = JSON.parse(e.target.result);
            if (Array.isArray(imported) && imported.length > 0) {
                adminProducts = imported;
                saveAdminProducts();
                renderAdminUI();
                showAdminToast(`✓ ${imported.length} pratos restaurados com sucesso!`);
            } else {
                alert('Arquivo JSON inválido para o cardápio.');
            }
        } catch (err) {
            alert('Erro ao importar JSON: ' + err.message);
        }
    };
    reader.readAsText(file);
};

window.resetToDefaultCatalog = function() {
    if (confirm('Atenção: Isso irá restaurar o cardápio original oficial do Botequim Pantera. Deseja continuar?')) {
        adminProducts = [...DEFAULT_PRODUCTS];
        saveAdminProducts();
        renderAdminUI();
        showAdminToast('✓ Cardápio restaurado para o padrão original!');
    }
};

window.adminLogout = function() {
    sessionStorage.removeItem('pantera_owner_auth');
    location.reload();
};

function showAdminToast(msg) {
    let toast = document.getElementById('admin-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'admin-toast';
        toast.className = 'admin-toast';
        document.body.appendChild(toast);
    }
    toast.innerText = msg;
    toast.classList.add('visible');

    setTimeout(() => {
        toast.classList.remove('visible');
    }, 3000);
}
