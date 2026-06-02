import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Footer from './components/Footer';
import ContactForm from './Pages/ContactForm';
import ProjectOverview from './Pages/ProjectOverview';
import ScrollToTop from './components/ScrollToTop';
import Experience from './Pages/Experience';
import Education from './Pages/Education';
import OtherDetails from './Pages/OtherDetails';


function App() {
  return (
    <Router>
       <ScrollToTop />
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<ContactForm />} /> */}
          <Route path="/project/:id" element={<ProjectOverview/>} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/other" element={<OtherDetails />} />
        </Routes>
        <ContactForm/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
