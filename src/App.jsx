import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './style';
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer, HomePage, FeaturesPage, ClientsPage} from './components';

const App = () => (
  <BrowserRouter>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      {/* Hero Component */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      {/* proper rendering of all stacking components */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <CTA />
          <Footer/>
        </div>
      </div>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='Features' element={<FeaturesPage/>}/>
        <Route path='Clients' element={<ClientsPage/>}/>
        
      </Routes>

    </div>
  </BrowserRouter>
 );

export default App