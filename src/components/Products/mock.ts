export interface Product {
    name: string;
    description: string;
    price: number;
    seller: string;
    colors: Array<{
      id: string;
      displayName: string;
    }>;
    sizes: Array<{
      id: string;
      displayName: string;
    }>;
    image: string;
  }

export const bolsas: Product[] = [
    {
        "name": "Bolsa Casual",
        "description": "Bolsa prática e estilosa, ideal para o dia a dia.",
        "price": 120.0,
        "seller": "Riachuelo",
        "colors": [
            { "id": "black", "displayName": "Preto" },
            { "id": "beige", "displayName": "Bege" },
            { "id": "brown", "displayName": "Marrom" }
        ],
        "sizes": [
            { "id": "unique", "displayName": "Único" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/bolsa-1.png"
    },
    {
        "name": "Bolsa Tote",
        "description": "Bolsa tote espaçosa e moderna para todas as ocasiões.",
        "price": 140.0,
        "seller": "Renner",
        "colors": [
            { "id": "gray", "displayName": "Cinza" },
            { "id": "navy", "displayName": "Azul Marinho" }
        ],
        "sizes": [
            { "id": "unique", "displayName": "Único" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/bolsa-2.png"
    },
    {
        "name": "Bolsa de Ombro",
        "description": "Bolsa de ombro em couro ecológico, compacta e elegante.",
        "price": 160.0,
        "seller": "C&A",
        "colors": [
            { "id": "white", "displayName": "Branco" },
            { "id": "red", "displayName": "Vermelho" }
        ],
        "sizes": [
            { "id": "unique", "displayName": "Único" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/bolsa-3.png"
    },
    {
        "name": "Bolsa Mochila",
        "description": "Bolsa mochila versátil para uso casual ou profissional.",
        "price": 180.0,
        "seller": "Riachuelo",
        "colors": [
            { "id": "black", "displayName": "Preto" },
            { "id": "green", "displayName": "Verde" }
        ],
        "sizes": [
            { "id": "unique", "displayName": "Único" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/bolsa-4.png"
    },
    {
        "name": "Bolsa de Viagem",
        "description": "Bolsa de viagem compacta, ideal para finais de semana.",
        "price": 200.0,
        "seller": "C&A",
        "colors": [
            { "id": "blue", "displayName": "Azul" },
            { "id": "black", "displayName": "Preto" }
        ],
        "sizes": [
            { "id": "unique", "displayName": "Único" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/bolsa-5.png"
    },
    {
        "name": "Bolsa Transversal",
        "description": "Bolsa transversal em tecido resistente, com vários compartimentos.",
        "price": 110.0,
        "seller": "Renner",
        "colors": [
            { "id": "gray", "displayName": "Cinza" },
            { "id": "black", "displayName": "Preto" }
        ],
        "sizes": [
            { "id": "unique", "displayName": "Único" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/bolsa-6.png"
    },
    {
        "name": "Bolsa Pequena",
        "description": "Bolsa pequena e prática, com design minimalista.",
        "price": 90.0,
        "seller": "Riachuelo",
        "colors": [
            { "id": "beige", "displayName": "Bege" },
            { "id": "pink", "displayName": "Rosa" }
        ],
        "sizes": [
            { "id": "unique", "displayName": "Único" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/bolsa-7.png"
    }
]

export const calcas: Product[] = [
    {
        "name": "Calça Jeans Skinny",
        "description": "Modelo ajustado com elastano para máximo conforto.",
        "price": 200.0,
        "seller": "Renner",
        "colors": [
            { "id": "light-blue", "displayName": "Azul Claro" },
            { "id": "dark-blue", "displayName": "Azul Escuro" }
        ],
        "sizes": [
            { "id": "36", "displayName": "36" },
            { "id": "38", "displayName": "38" },
            { "id": "40", "displayName": "40" },
            { "id": "42", "displayName": "42" },
            { "id": "44", "displayName": "44" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/calca-1.png"
    },
    {
        "name": "Calça Reta",
        "description": "Calça com corte reto e tecido de alta qualidade.",
        "price": 220.0,
        "seller": "Riachuelo",
        "colors": [
            { "id": "black", "displayName": "Preto" },
            { "id": "beige", "displayName": "Bege" }
        ],
        "sizes": [
            { "id": "36", "displayName": "36" },
            { "id": "38", "displayName": "38" },
            { "id": "40", "displayName": "40" },
            { "id": "42", "displayName": "42" },
            { "id": "44", "displayName": "44" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/calca-2.png"
    },
    {
        "name": "Calça Jogger",
        "description": "Calça jogger com elástico na cintura e punhos ajustáveis.",
        "price": 180.0,
        "seller": "C&A",
        "colors": [
            { "id": "gray", "displayName": "Cinza" },
            { "id": "black", "displayName": "Preto" }
        ],
        "sizes": [
            { "id": "36", "displayName": "36" },
            { "id": "38", "displayName": "38" },
            { "id": "40", "displayName": "40" },
            { "id": "42", "displayName": "42" },
            { "id": "44", "displayName": "44" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/calca-3.png"
    },
    {
        "name": "Calça Pantalona",
        "description": "Calça pantalona com tecido fluido e caimento perfeito.",
        "price": 250.0,
        "seller": "Renner",
        "colors": [
            { "id": "white", "displayName": "Branco" },
            { "id": "beige", "displayName": "Bege" }
        ],
        "sizes": [
            { "id": "36", "displayName": "36" },
            { "id": "38", "displayName": "38" },
            { "id": "40", "displayName": "40" },
            { "id": "42", "displayName": "42" },
            { "id": "44", "displayName": "44" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/calca-4.png"
    },
    {
        "name": "Calça Social",
        "description": "Calça social clássica para ocasiões formais e profissionais.",
        "price": 300.0,
        "seller": "Riachuelo",
        "colors": [
            { "id": "black", "displayName": "Preto" },
            { "id": "navy", "displayName": "Azul Marinho" }
        ],
        "sizes": [
            { "id": "36", "displayName": "36" },
            { "id": "38", "displayName": "38" },
            { "id": "40", "displayName": "40" },
            { "id": "42", "displayName": "42" },
            { "id": "44", "displayName": "44" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/calca-5.png"
    },
    {
        "name": "Calça Cargo",
        "description": "Calça cargo com bolsos utilitários e tecido durável.",
        "price": 210.0,
        "seller": "C&A",
        "colors": [
            { "id": "green", "displayName": "Verde" },
            { "id": "beige", "displayName": "Bege" }
        ],
        "sizes": [
            { "id": "36", "displayName": "36" },
            { "id": "38", "displayName": "38" },
            { "id": "40", "displayName": "40" },
            { "id": "42", "displayName": "42" },
            { "id": "44", "displayName": "44" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/calca-6.png"
    },
    {
        "name": "Calça Flare",
        "description": "Calça flare com estilo retrô e modelagem justa nas coxas.",
        "price": 230.0,
        "seller": "Renner",
        "colors": [
            { "id": "light-blue", "displayName": "Azul Claro" },
            { "id": "white", "displayName": "Branco" }
        ],
        "sizes": [
            { "id": "36", "displayName": "36" },
            { "id": "38", "displayName": "38" },
            { "id": "40", "displayName": "40" },
            { "id": "42", "displayName": "42" },
            { "id": "44", "displayName": "44" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/calca-7.png"
    }
]

export const camisetas: Product[] = [
    {
        "name": "Camiseta Básica",
        "description": "Camiseta 100% algodão, confortável e leve.",
        "price": 50.0,
        "seller": "C&A",
        "colors": [
            { "id": "white", "displayName": "Branco" },
            { "id": "black", "displayName": "Preto" },
            { "id": "gray", "displayName": "Cinza" }
        ],
        "sizes": [
            { "id": "p", "displayName": "P" },
            { "id": "m", "displayName": "M" },
            { "id": "g", "displayName": "G" },
            { "id": "gg", "displayName": "GG" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/camiseta-1.png"
    },
    {
        "name": "Camiseta Estampada",
        "description": "Camiseta com estampa moderna e acabamento premium.",
        "price": 70.0,
        "seller": "Renner",
        "colors": [
            { "id": "blue", "displayName": "Azul" },
            { "id": "red", "displayName": "Vermelho" },
            { "id": "black", "displayName": "Preto" }
        ],
        "sizes": [
            { "id": "p", "displayName": "P" },
            { "id": "m", "displayName": "M" },
            { "id": "g", "displayName": "G" },
            { "id": "gg", "displayName": "GG" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/camiseta-2.png"
    },
    {
        "name": "Camiseta Oversized",
        "description": "Modelo oversized, ideal para looks casuais e confortáveis.",
        "price": 80.0,
        "seller": "Riachuelo",
        "colors": [
            { "id": "black", "displayName": "Preto" },
            { "id": "white", "displayName": "Branco" },
            { "id": "green", "displayName": "Verde" }
        ],
        "sizes": [
            { "id": "p", "displayName": "P" },
            { "id": "m", "displayName": "M" },
            { "id": "g", "displayName": "G" },
            { "id": "gg", "displayName": "GG" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/camiseta-3.png"
    },
    {
        "name": "Camiseta Slim Fit",
        "description": "Camiseta com modelagem ajustada para um look elegante.",
        "price": 60.0,
        "seller": "C&A",
        "colors": [
            { "id": "navy", "displayName": "Azul Marinho" },
            { "id": "gray", "displayName": "Cinza" }
        ],
        "sizes": [
            { "id": "p", "displayName": "P" },
            { "id": "m", "displayName": "M" },
            { "id": "g", "displayName": "G" },
            { "id": "gg", "displayName": "GG" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/camiseta-4.png"
    },
    {
        "name": "Camiseta com Bolso",
        "description": "Camiseta casual com bolso frontal e toque moderno.",
        "price": 65.0,
        "seller": "Renner",
        "colors": [
            { "id": "green", "displayName": "Verde" },
            { "id": "brown", "displayName": "Marrom" }
        ],
        "sizes": [
            { "id": "p", "displayName": "P" },
            { "id": "m", "displayName": "M" },
            { "id": "g", "displayName": "G" },
            { "id": "gg", "displayName": "GG" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/camiseta-5.png"
    },
    {
        "name": "Camiseta Longline",
        "description": "Camiseta com barra alongada para estilo urbano.",
        "price": 90.0,
        "seller": "Riachuelo",
        "colors": [
            { "id": "black", "displayName": "Preto" },
            { "id": "red", "displayName": "Vermelho" }
        ],
        "sizes": [
            { "id": "p", "displayName": "P" },
            { "id": "m", "displayName": "M" },
            { "id": "g", "displayName": "G" },
            { "id": "gg", "displayName": "GG" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/camiseta-6.png"
    },
    {
        "name": "Camiseta Polo",
        "description": "Camiseta polo clássica com tecido de alta qualidade.",
        "price": 100.0,
        "seller": "Renner",
        "colors": [
            { "id": "white", "displayName": "Branco" },
            { "id": "blue", "displayName": "Azul" }
        ],
        "sizes": [
            { "id": "p", "displayName": "P" },
            { "id": "m", "displayName": "M" },
            { "id": "g", "displayName": "G" },
            { "id": "gg", "displayName": "GG" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/camiseta-7.png"
    }
]

export const jaquetas: Product[] = [
    {
        "name": "Jaqueta Jeans",
        "description": "Modelo unissex oversized com gola de camurça. Atemporal e autêntica!",
        "price": 150.0,
        "seller": "Riachuelo",
        "colors": [
            { "id": "light-blue", "displayName": "Azul Claro" },
            { "id": "offwhite", "displayName": "Offwhite" },
            { "id": "black", "displayName": "Preto" }
        ],
        "sizes": [
            { "id": "p", "displayName": "P" },
            { "id": "m", "displayName": "M" },
            { "id": "g", "displayName": "G" },
            { "id": "gg", "displayName": "GG" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/jaqueta-1.png"
    },
    {
        "name": "Jaqueta de Couro",
        "description": "Jaqueta em couro sintético com acabamento premium.",
        "price": 250.0,
        "seller": "Renner",
        "colors": [
            { "id": "black", "displayName": "Preto" },
            { "id": "brown", "displayName": "Marrom" }
        ],
        "sizes": [
            { "id": "p", "displayName": "P" },
            { "id": "m", "displayName": "M" },
            { "id": "g", "displayName": "G" },
            { "id": "gg", "displayName": "GG" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/jaqueta-2.png"
    },
    {
        "name": "Jaqueta Bomber",
        "description": "Jaqueta bomber estilosa e confortável para qualquer ocasião.",
        "price": 200.0,
        "seller": "C&A",
        "colors": [
            { "id": "navy", "displayName": "Azul Marinho" },
            { "id": "black", "displayName": "Preto" }
        ],
        "sizes": [
            { "id": "p", "displayName": "P" },
            { "id": "m", "displayName": "M" },
            { "id": "g", "displayName": "G" },
            { "id": "gg", "displayName": "GG" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/jaqueta-3.png"
    },
    {
        "name": "Jaqueta de Nylon",
        "description": "Jaqueta leve em nylon com capuz removível.",
        "price": 180.0,
        "seller": "Riachuelo",
        "colors": [
            { "id": "gray", "displayName": "Cinza" },
            { "id": "black", "displayName": "Preto" }
        ],
        "sizes": [
            { "id": "p", "displayName": "P" },
            { "id": "m", "displayName": "M" },
            { "id": "g", "displayName": "G" },
            { "id": "gg", "displayName": "GG" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/jaqueta-4.png"
    },
    {
        "name": "Jaqueta Parka",
        "description": "Jaqueta parka longa com forro quente para o inverno.",
        "price": 300.0,
        "seller": "Renner",
        "colors": [
            { "id": "green", "displayName": "Verde" },
            { "id": "beige", "displayName": "Bege" }
        ],
        "sizes": [
            { "id": "p", "displayName": "P" },
            { "id": "m", "displayName": "M" },
            { "id": "g", "displayName": "G" },
            { "id": "gg", "displayName": "GG" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/jaqueta-5.png"
    },
    {
        "name": "Jaqueta Puffer",
        "description": "Jaqueta puffer acolchoada e resistente à água.",
        "price": 220.0,
        "seller": "C&A",
        "colors": [
            { "id": "black", "displayName": "Preto" },
            { "id": "red", "displayName": "Vermelho" }
        ],
        "sizes": [
            { "id": "p", "displayName": "P" },
            { "id": "m", "displayName": "M" },
            { "id": "g", "displayName": "G" },
            { "id": "gg", "displayName": "GG" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/jaqueta-6.png"
    },
    {
        "name": "Jaqueta Esportiva",
        "description": "Jaqueta esportiva com tecido respirável e fechamento em zíper.",
        "price": 190.0,
        "seller": "Renner",
        "colors": [
            { "id": "blue", "displayName": "Azul" },
            { "id": "gray", "displayName": "Cinza" }
        ],
        "sizes": [
            { "id": "p", "displayName": "P" },
            { "id": "m", "displayName": "M" },
            { "id": "g", "displayName": "G" },
            { "id": "gg", "displayName": "GG" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/jaqueta-7.png"
    }
]

export const oculos: Product[] = [
    {
        "name": "Óculos Aviador",
        "description": "Clássico modelo aviador com lentes polarizadas.",
        "price": 150.0,
        "seller": "Óticas Carol",
        "colors": [
            { "id": "gold", "displayName": "Dourado" },
            { "id": "black", "displayName": "Preto" }
        ],
        "sizes": [
            { "id": "unique", "displayName": "Único" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/oculos-1.png"
    },
    {
        "name": "Óculos Redondo",
        "description": "Modelo redondo retrô com armação de metal leve.",
        "price": 120.0,
        "seller": "Chilli Beans",
        "colors": [
            { "id": "silver", "displayName": "Prata" },
            { "id": "black", "displayName": "Preto" }
        ],
        "sizes": [
            { "id": "unique", "displayName": "Único" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/oculos-2.png"
    },
    {
        "name": "Óculos Esportivo",
        "description": "Óculos esportivo com proteção UV400, ideal para atividades ao ar livre.",
        "price": 180.0,
        "seller": "Decathlon",
        "colors": [
            { "id": "red", "displayName": "Vermelho" },
            { "id": "blue", "displayName": "Azul" }
        ],
        "sizes": [
            { "id": "unique", "displayName": "Único" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/oculos-3.png"
    },
    {
        "name": "Óculos Wayfarer",
        "description": "Modelo wayfarer moderno com armação robusta.",
        "price": 160.0,
        "seller": "Óticas Diniz",
        "colors": [
            { "id": "black", "displayName": "Preto" },
            { "id": "tortoise", "displayName": "Tartaruga" }
        ],
        "sizes": [
            { "id": "unique", "displayName": "Único" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/oculos-4.png"
    },
    {
        "name": "Óculos de Sol Cat Eye",
        "description": "Estiloso modelo cat eye com lentes escuras.",
        "price": 140.0,
        "seller": "Óticas Carol",
        "colors": [
            { "id": "pink", "displayName": "Rosa" },
            { "id": "black", "displayName": "Preto" }
        ],
        "sizes": [
            { "id": "unique", "displayName": "Único" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/oculos-5.png"
    },
    {
        "name": "Óculos Clubmaster",
        "description": "Óculos clubmaster clássico com design atemporal.",
        "price": 170.0,
        "seller": "Chilli Beans",
        "colors": [
            { "id": "brown", "displayName": "Marrom" },
            { "id": "gold", "displayName": "Dourado" }
        ],
        "sizes": [
            { "id": "unique", "displayName": "Único" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/oculos-6.png"
    },
    {
        "name": "Óculos Retrô",
        "description": "Óculos de armação grande com design retrô.",
        "price": 130.0,
        "seller": "Renner",
        "colors": [
            { "id": "transparent", "displayName": "Transparente" },
            { "id": "black", "displayName": "Preto" }
        ],
        "sizes": [
            { "id": "unique", "displayName": "Único" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/oculos-7.png"
    }
]

export const tenis = [
    {
        "name": "Tênis Esportivo",
        "description": "Tênis com amortecimento ideal para caminhadas e corridas.",
        "price": 300.0,
        "seller": "Adidas",
        "colors": [
            { "id": "blue", "displayName": "Azul" },
            { "id": "gray", "displayName": "Cinza" }
        ],
        "sizes": [
            { "id": "37", "displayName": "37" },
            { "id": "38", "displayName": "38" },
            { "id": "39", "displayName": "39" },
            { "id": "40", "displayName": "40" },
            { "id": "41", "displayName": "41" },
            { "id": "42", "displayName": "42" }
        ],
        "image": "https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/tenis.png"
    }
]

export const destaques = [bolsas[0], calcas[0], camisetas[0], jaquetas[0], oculos[0], tenis[0]]