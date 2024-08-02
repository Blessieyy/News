
import {NewsContextProvider} from "./components/NewsContext"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from './components/Categories'
import Navbar from "./navbar";
import News from "./components/News";
import business from './Categories/Business'
import Entertainment from './Categories/Entertainment'
import General from './Categories/General'
import politics from './Categories/Politics'
import sports from './Categories/Sports'


function App() {
  return (
    <div className="App">
     
      <NewsContextProvider>
        <div>
      <BrowserRouter>
    <Navbar />
    <Routes className>
    
      <Route  path='/general' element={<Categories cat="general" />}/>
      <Route  path='/business' element={<Categories cat="business" />}/>
      <Route  path='/entertainment' element={<Categories cat="entertainment" />}/>
      <Route  path='/technology' element={<Categories cat="technology" />}/>
      <Route  path='/sports' element={<Categories cat="sports" />}/>
    </Routes>
    </BrowserRouter>
    </div>
        <News />
      
     </NewsContextProvider>

    </div>
  );
}

export default App;
