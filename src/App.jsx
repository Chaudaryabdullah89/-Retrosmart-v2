import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import './App.css'
import Nav from '../components/nav'
import Footer from '../components/Footer'
import EcoInstallation from '../Pages/EcoInstallation'
import Externalwallinsulation from '../Pages/Externalwallinsulation'
import Internalwallinsulation from '../Pages/Internalwallinsulation'
import Loftinsulation from '../Pages/Loftinsulation'
import Smartheatingcontrols from '../Pages/Smartheatingcontrols'
import Retrofitassessment from '../Pages/Retrofitassessment'
import Retrofitcoordination from '../Pages/Retrofitcoordination'
import Retrofitdesign from '../Pages/Retrofitdesign'
import Retrofitevaluation from '../Pages/Retrofitevaluation'
import Aboutus from '../Pages/Aboutus'
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'
import Grant from '../Pages/Grant'
import Eligibilitycheck from '../Pages/Eligibility'
function App() {
  

  return (
    <>
    <Nav />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Eco-Installation' element={<EcoInstallation />} />
      <Route path='/External-Wall-Insulation' element={<Externalwallinsulation />} />
      <Route path='/Internal-Wall-Insulation' element={<Internalwallinsulation />} />
      <Route path='/Loft-Insulation' element={<Loftinsulation />} />
      <Route path='/Smart-Heating-Controls' element={<Smartheatingcontrols />} />
      <Route path='/Retrofit-Assessment' element={<Retrofitassessment />} />
      <Route path='/Retrofit-Coordination' element={<Retrofitcoordination />} />
      <Route path='/Retrofit-Design' element={<Retrofitdesign />} />
     <Route path='/Retrofit-Evaluation' element={<Retrofitevaluation />} />
     <Route path='/About-Us' element={<Aboutus />} />
     <Route path='/Services' element={<Services />} />
     <Route path='/Contact' element={<Contact />} />
      <Route path='/Grant-And-Funding' element={<Grant />} />
      <Route path='/eligibility' element={<Eligibilitycheck />} />
     </Routes>
     <Footer />
     </>
  )
}

export default App
