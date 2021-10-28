

import HeroSection from './component/herosection/HeroSection';
import  Navbar from "../src/component/navbar/Navbar"
import Contact from './component/Contact/Contact';
import About from './component/About/About';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Portfolio from "./component/portfolio/Portfolio"
function App() {
  return (

<Router>

    <div className="App">
   
    
   <Switch>

   <Route  exact path="/portfolio">
   <Portfolio />
   </Route>
   <Route  exact path="/contact">
   <Contact />
   </Route>
   <Route  exact path="/about">
   <About/>
   </Route>
   <Route  exact path="/">

   <Navbar />
   <HeroSection />
   
   </Route>
   </Switch>
   
    </div>
    </Router>
   
  );
}

export default App;
