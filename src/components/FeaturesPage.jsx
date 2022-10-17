import React from 'react'
import styles from '../style'
import { CTA, Footer, Business, CardDeal, Billing } from './index.js'

const FeaturesPage = () => {
  return (
    <div>
      {/* proper rendering of all stacking components */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business />
          <CardDeal/>
          <Billing />          
          <CTA />
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default FeaturesPage