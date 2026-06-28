import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import RatingWidget from './components/RatingWidget'
import AboutUs from './pages/AboutUs'
import Contect from './pages/Contect'
import Developer from './pages/Developer'
import News from './pages/News'
import Programs from './pages/Programs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RequestQuote from './pages/RequestQuote'
import Terms from './pages/Terms'
import ScrollToTop from './utils/ScrollToTop'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="site-app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contect />} />
          <Route path="/enroll" element={<RequestQuote />} />
          <Route path="/news" element={<News />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <RatingWidget />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
