// --react-router-dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// --i18n
import {useTranslation} from 'react-i18next';

// components
import Layout from "./components/Layout"

// pages
import Home from "./pages/Home.js"
import Explore from "./pages/Explore.js"
import Contest from "./pages/Contest.js"

function App() {
  return (
    <div className="App">
      <Router>
      <div className="content font-body text-slate-100">       
          <Routes>
            <Route path='/writers-deck' element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="explore" element={<Explore/>}/>
              <Route path="contests" element={<Contest/>}/>
            </Route>
          </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
