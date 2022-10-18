import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './style';
import Navbar from "./components/Navbar";

const HomePage = React.lazy(() => import('./components/HomePage'));
const FeaturesPage = React.lazy(() => import('./components/FeaturesPage'));
const ClientsPage = React.lazy(() => import('./components/ClientsPage'));

const App = () => (
  <BrowserRouter>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='Features' element={<FeaturesPage/>}/>
            <Route path='Clients' element={<ClientsPage/>}/>
        </Routes>
      </Suspense>
    </div>
  </BrowserRouter>
 );

export default App