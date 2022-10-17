import React from 'react'
import styles from '../style'
import { Hero, Stats, CTA, Footer } from './index.js';


const HomePage = () => {
  return (
    <div>
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
    </div>
  )
}

export default HomePage