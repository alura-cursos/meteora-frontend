import { CardProduct } from "../CardProduct"
import { Heading } from "../Heading"
import { destaques } from "./mock"
import { GridContainer, ProductContainer } from "./styles"

export const Products = () => {
    return <ProductContainer>
        <Heading>Produtos que estão bombando!</Heading>
        <GridContainer>
            {destaques.map((product) => (
                <CardProduct key={product.image} product={product} />
            ))}
        </GridContainer>
    </ProductContainer>
}