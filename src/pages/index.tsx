import classNames from 'classnames'
import {NextPage} from 'next'
import {NextSeo} from 'next-seo'
import {
  ESLintIcon,
  NextJsIcon,
  NPMIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from '../components/icons'

const features = [
  {
    name: 'React.js',
    description:
      'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".',
    icon: ReactIcon,
    withPadding: false,
  },
  {
    name: 'Typescript',
    description:
      'TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.',
    icon: TypescriptIcon,
    withPadding: false,
  },
  {
    name: 'Tailwind',
    description:
      'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
    icon: TailwindIcon,
    withPadding: true,
  },
  {
    name: 'Next.js',
    description:
      'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
    icon: NextJsIcon,
    withPadding: true,
  },
  {
    name: 'ES Lint',
    description:
      'ESLint statically analyzes your code to quickly find problems. ESLint is built into most text editors and you can run ESLint as part of your continuous integration pipeline.',
    icon: ESLintIcon,
    withPadding: false,
  },
  {
    name: 'NPM',
    description:
      'The npm Registry is a public collection of packages of open-source code for Node.js, front-end web apps, mobile apps, robots, routers, and countless other needs of the JavaScript community',
    icon: NPMIcon,
    withPadding: false,
  },
]

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Main" />
      <div className="flex justify-center relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold font-headind tracking-wider text-indigo-600 uppercase">
            Develop faster
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Everything you need to start writing code
          </p>
          <p className="mt-5 max-w-prose text-xl text-gray-500">
            This boilerplate is filled with most popular and very convinient instruments. Everything
            is configured for you.{' '}
            <a
              className="text-blue-400 hover:underline"
              href="https://github.com/RinatGumarov/next-tailwind-boilerplate"
              rel="noopener nofollow noreferrer"
              target="_blank"
            >
              Source code on GitHub
            </a>
          </p>
          <div className="mt-12">
            <div className="flex flex-wrap flex-col sm:flex-row gap-8 justify-center items-stretch">
              {features.map((feature) => (
                <div key={feature.name} className="sm:w-96 pt-6">
                  <div className="bg-gray-50 h-full rounded-lg px-6 pb-8">
                    <div className="space-y-4">
                      <span
                        className={classNames(
                          '-mt-5 inline-flex items-center bg-white overflow-hidden border justify-center rounded-md shadow-lg'
                        )}
                      >
                        <feature.icon
                          className={classNames(
                            'text-white h-10 w-10',
                            feature.withPadding && 'p-1'
                          )}
                          aria-hidden="true"
                        />
                      </span>

                      <h3 className="text-lg font-headind font-medium text-gray-900 tracking-tight">
                        {feature.name}
                      </h3>
                      <p className="text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
