import { HERO_CONTENT } from "../../utils/index"
import "./Hero.css"


const Hero = () => {

    return(

        <section className="hero">
            <div className="hero__content">

                <h1 className="hero__title">
                    {HERO_CONTENT.title}
                
                </h1>

                <p className="hero__subtitle">
                    {HERO_CONTENT.subtitle}
                </p>

                <img
                    src={HERO_CONTENT.image}
                    alt="Hero banner"
                    className="hero_img" 
                /> 

            </div>
        </section>

    )

}

export default Hero