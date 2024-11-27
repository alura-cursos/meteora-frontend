import { Banner } from "../../components/Banner"
import { Categories } from "../../components/Categories"
import { Features } from "../../components/Features"
import { MainContainer } from "../../components/MainContainer"
import { Newsletter } from "../../components/Newsletter"
import { Products } from "../../components/Products"

const Home = () => {
    return <>
        <Banner src="https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/banners/banner-carousel-1.png" alt="" />
        <MainContainer>
            <Categories />
            <Products />
        </MainContainer>
        <Features />
        <Newsletter />
    </>
}

export default Home 