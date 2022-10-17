import React from 'react'
import styles from '../style'
import { CTA, Footer, Clients, Testimonials } from './index.js'

const ClientsPage = () => {
  return (
    <div>
      {/* proper rendering of all stacking components */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Testimonials/> 
          <Clients/>        
          <CTA/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default ClientsPage