

import './App.css';
import {Header} from "./header"
import {HeroSection} from "./HeroSection" 
import {Footer} from "./Footer" 


function App() {
  console.log('app comp');
  
  return (
    <div>
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
