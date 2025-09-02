//Styles CSS
import "./App.css"


//Imports Components jsx
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"

//Variable const
const App = () => {
  return(
        <>

          <div className="container">
              <Hero />
              <Services />
          </div>

        </>
    )
  }

export default App