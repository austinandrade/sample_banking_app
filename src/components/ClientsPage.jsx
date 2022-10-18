import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styles from '../style'
import ErrorFallback from './ErrorBoundary'

const CTA = React.lazy(() => import('./CTA'))
const Footer = React.lazy(() => import('./Footer'))
const Clients = React.lazy(() => import('./Clients'))
const Testimonials = React.lazy(() => import('./Testimonials'))


const ClientsPage = () => {
  return (
    <div>
      {/* proper rendering of all stacking components */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
            <Suspense fallback={<div>Loading...</div>}>
              <Testimonials/> 
              <Clients/>        
              <CTA/>
              <Footer/>
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  )
}

export default ClientsPage