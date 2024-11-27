import { Product } from "../Products/mock"
import { Button } from "../Button"
import { Card, CardImage, CardContent, CardFooter, CardBody } from "./styles"

interface CardProductInterface {
    product: Product
}

export const CardProduct = ({ product }: CardProductInterface) => {
    return (<Card>
        <CardImage src={product.image} alt={product.name} />
        <CardBody>
            <CardContent>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <strong>{product.price}</strong>
            </CardContent>
            <CardFooter>
                <Button>Ver mais</Button>
            </CardFooter>
        </CardBody>
    </Card>)
}