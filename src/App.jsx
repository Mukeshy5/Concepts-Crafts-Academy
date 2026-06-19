import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import AboutUs from './pages/AboutUs'
import Contect from './pages/Contect'
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
          <Route path="/contact" element={<Contect />} />
          <Route path="/enroll" element={<RequestQuote />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
