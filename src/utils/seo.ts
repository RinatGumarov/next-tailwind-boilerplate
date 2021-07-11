import {DefaultSeoProps} from 'next-seo'

export const seoDefault: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    url: 'https://next-tailwind-boilerplate.vercel.app',
    images: [
      {
        url: '/next-boilerplate-banner.png',
        width: 800,
        height: 600,
        alt: 'Next Tailwind Boilerplate banner',
      },
    ],
  },
  titleTemplate: '%s | Next Boilerplate',
  defaultTitle: 'Next Boilerplate',
  description: 'Nothing to configure boilerplate created by Rinat Gumarov',
}
