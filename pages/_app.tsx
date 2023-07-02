import { useEffect } from 'react'
import { init } from '@socialgouv/matomo-next'
import PlausibleProvider from 'next-plausible'
import type { AppProps } from 'next/app'
import 'nextra-theme-docs/style.css'

function DrupalshipApp({ Component, pageProps }: AppProps) {

  const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL || ''
  const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID || ''

  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);

  return (
    <PlausibleProvider domain="drupalship.org">
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}

export default DrupalshipApp
