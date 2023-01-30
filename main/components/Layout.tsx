import Head from 'next/head'
import { ReactNode } from 'react'
import { API_URL } from '../config'

import useAuth from '../hooks/useAuth'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {

  const authToken = useAuth();
  if (authToken) {
    window.location.replace(`${API_URL}?token=${authToken}`)
    return null
  }
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  )
}

export default Layout
