import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styles from '../style'
import ErrorFallback from './ErrorBoundary';

const Hero = React.lazy(() => import('./Hero'));
const Stats = React.lazy(() => import('./Stats'));
const CTA = React.lazy(() => import('./CTA'));
const Footer = React.lazy(() => import('./Footer'));


const HomePage = () => {
  return (
    <div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
            <Suspense fallback={<div>Loading...</div>}>
              <Hero/>
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>

      {/* proper rendering of all stacking components */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
          <Suspense fallback={<div>Loading...</div>}>
            <Stats/>
            <CTA />
            <Footer/>
          </Suspense>
        </ErrorBoundary>
        </div>
      </div>
    </div>
  )
}

export default HomePage