import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Activity from './Pages/Activity';
import Team from './Pages/Team';
import Ask from './Pages/Ask';
import Plan from './Pages/Plan'
import Header from './Components/Header'
import Footer from './Components/Footer'
import QuranSearch from './Pages/QuranSearch'
import TafseerBooks from './Pages/TafseerBooks'

import { BrowserRouter ,Routes, Route, Router  }from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
          <BrowserRouter>   
            <Routes>
              < Route path='/' element={<Home/>} />
              < Route path='/about' element={<About/>} />
              < Route path='/activity' element={<Activity/>} />
              < Route path='/team' element={<Team/>} />
              
              < Route path='/QA' element={<Ask/>} />
              <Route path = "/QuranSearch" element={<QuranSearch/>} />
              <Route path = "/TafseerBooks" element={<TafseerBooks/>} />
              < Route path='/plan' element={<Plan/>} />      
                {/* < Route path='/contact' element={<Contact/>} /> */}    
            
            </Routes>
          </BrowserRouter>
          
     <Footer />
 

    </div>
  );
}

export default App;
