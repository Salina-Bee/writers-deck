import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
// --i18n
// import {useTranslation} from 'react-i18next';

// components
import HomeLayout from "./components/HomeLayout.js"

// pages
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Contact from "./pages/Contact.js"
import UserHome from "./pages/UserHome.js"
import Login from "./pages/Login.js"
import ProjectDetails from "./pages/ProjectDetails.js"
import CardDetails from "./pages/CardDetails.js";

// context 
import { useAuthContext } from "./hooks/useAuthContext"

function App() {

  const { user } = useAuthContext()

  // note: find a way to check if jwt has expired: then logout

  return (
    <div className="App">
      <Router>
      <div className="content font-body bg-slate-200">       
          <Routes>
          
            <Route path='/writers-deck' element={<HomeLayout/>}>
              <Route index element={<Home/>} />
              <Route path="about-us" element={<About/>}/>
              <Route path="contact" element={<Contact/>}/>
            </Route>
            <Route path="/writers-deck/login" element={!user ? <Login/> : <Navigate to="/writers-deck/projects"/>}/>
            <Route path="/writers-deck/card" element={user ? <CardDetails/> : <Navigate to="/writers-deck/login"/>}/>
            <Route path="/writers-deck/projects" element={user ? <UserHome/> : <Navigate to="/writers-deck/login"/>}/>
            <Route path="/writers-deck/projects/:id" element={user ? <ProjectDetails/> : <Navigate to="/writers-deck/login"/>}/>
            
            
          </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
