// --react-router-dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// --i18n
// import {useTranslation} from 'react-i18next';

// components
import Layout from "./components/Layout"

// pages
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Contact from "./pages/Contact.js"
import UserHome from "./pages/UserHome.js"


function App() {
  return (
    <div className="App">
      <Router>
      <div className="content font-body bg-slate-200">       
          <Routes>
            <Route path='/writers-deck' element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="about-us" element={<About/>}/>
              <Route path="contact" element={<Contact/>}/>
              <Route path="userHome" element={<UserHome/>}/>
            </Route>
          </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
