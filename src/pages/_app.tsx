import {AppProps} from 'next/app'
import React, {FC} from 'react'
import 'tailwindcss/tailwind.css'

const MyApp: FC<AppProps> = ({Component, pageProps}) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}

export default MyApp
