import { useQuery } from "@apollo/client"
import { CardProduct } from "../CardProduct"
import { Heading } from "../Heading"
import { GridContainer, ProductContainer } from "./styles"
import { GET_PRODUCTS } from "../../graphql/queries/products"

interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export const Products = () => {
    const { data } = useQuery<{ products: IProduct[] }>(GET_PRODUCTS)
    return <ProductContainer>
        <Heading>Produtos que estão bombando!</Heading>
        <GridContainer>
            {data?.products.map((product) => (
                <CardProduct key={product.id} product={product} />
            ))}
        </GridContainer>
    </ProductContainer>
}