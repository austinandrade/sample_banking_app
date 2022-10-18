import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styles from '../style'
import ErrorFallback from './ErrorBoundary'

const Business = React.lazy(() => import('./Business'))
const Billing = React.lazy(() => import('./Billing'))
const CardDeal = React.lazy(() => import('./CardDeal'))
const CTA = React.lazy(() => import('./CTA'))
const Footer = React.lazy(() => import('./Footer'))

const FeaturesPage = () => {
  return (
    <div>
      {/* proper rendering of all stacking components */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
            <Suspense fallback={<div>Loading...</div>}>
              <Business />
              <CardDeal/>
              <Billing />          
              <CTA />
              <Footer/>
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  )
}

export default FeaturesPage