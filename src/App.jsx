//Styles CSS
import "./App.css"

//Imports Components jsx
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import About from "./components/About/About"
import Reviews from "./components/Reviews/Reviews"
import ContactUs from "./components/ContactUs/ContactUs"
import Footer from "./components/Footer/Footer"

//Variable const
const App = () => {
  return(
        <>

          <div className="container">
              <Hero />
              <Services />
              <About />
              <Reviews />
              <ContactUs />
              <Footer />
          </div>

        </>
    )
  }

export default App