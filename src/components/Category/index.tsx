import { FigCaption, Figure, Img } from "./styles"

interface CategoryProps {
    name: string
    image: string
}

export const Category = ({ name, image} : CategoryProps) => {
    return <Figure>
        <Img src={image} alt={name} />
        <FigCaption>
            {name}
        </FigCaption>
    </Figure>
}