import {NextPage} from 'next'

const disallowBlock = `Disallow: /*.json`
export const allowRobots = `User-agent: *
${disallowBlock}
`

export const disallowRobots = `User-agent: *
Disallow: /
`

const Robots: NextPage = () => {
  return null
}
Robots.getInitialProps = ({res}) => {
  res?.setHeader('Content-Type', 'text/plain')
  res?.write(allowRobots)
  res?.end()
  return {}
}

export default Robots
