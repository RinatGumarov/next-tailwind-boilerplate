/* eslint-disable react/jsx-props-no-spreading */
import {DefaultSeo} from 'next-seo'
import {AppProps} from 'next/app'
import React, {FC} from 'react'
import 'tailwindcss/tailwind.css'
import {disableReactDevTools} from '../utils/disableReactDevTools'
import {seoDefault} from '../utils/seo'

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools()
}

const MyApp: FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <DefaultSeo {...seoDefault} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
