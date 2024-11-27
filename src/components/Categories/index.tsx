import { Category } from "../Category";
import { Heading } from "../Heading";
import { CategoryList, Container } from "./styles";

const categories = [
    {
        id: 'camisetas',
        displayName: 'Camisetas',
        icon: 'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/categories/camiseta.png',
    },
    {
        id: 'bolsas',
        displayName: 'Bolsas',
        icon: 'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/categories/bolsa.png',
    },
    {
        id: 'calcados',
        displayName: 'Calçados',
        icon: 'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/categories/calcados.png',
    },
    {
        id: 'calcas',
        displayName: 'Calças',
        icon: 'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/categories/calca.png',
    },
    {
        id: 'casacos',
        displayName: 'Casacos',
        icon: 'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/categories/casacos.png',
    },
    {
        id: 'oculos',
        displayName: 'Óculos',
        icon: 'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/categories/oculos.png',
    },
];

export const Categories = () => {
    return (<Container>
        <Heading>Busque por categoria:</Heading>
        <CategoryList>
            {categories.map(c => <li key={c.id}><Category name={c.displayName} image={c.icon} /></li>)}
        </CategoryList>
    </Container>)
}