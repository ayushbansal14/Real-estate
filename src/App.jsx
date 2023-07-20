
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import './App.css'
import Companies from "./components/Companies/Companies"
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/value/value";
function App() {
  return (
 <div className="App">
  <div>
    <div className="white-gradient"/>
  <Header/>
    <Hero/>
    </div>
    <Companies/>
    <Residencies/>
    <Value/>
 </div>
  );
}

export default App;
