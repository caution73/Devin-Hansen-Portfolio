import Carousel from "../components/Carousel";
import CarouselImages from "../assets/CarouselImages";

export default function Home(){
    return(
        <div id="homePage">
            <h1>Portfolio Highlights</h1>
            <Carousel images={CarouselImages}/>
        </div>
    )
}