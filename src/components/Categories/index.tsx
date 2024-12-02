import { useQuery } from "@apollo/client";
import { Category } from "../Category";
import { Heading } from "../Heading";
import { CategoryList, Container } from "./styles";
import { GET_CATEGORIES } from "../../graphql/queries/categories";

interface ICategory {
    id: number
    displayName: string
    icon: string
}

export const Categories = () => {

    const { data } = useQuery<{ categories: ICategory[] }>(GET_CATEGORIES);
    
    return (<Container>
        <Heading>Busque por categoria:</Heading>
        <CategoryList>
            {data?.categories.map(c => <li key={c.id}><Category name={c.displayName} image={c.icon} /></li>)}
        </CategoryList>
    </Container>)
}