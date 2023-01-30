import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home">
    <h1>Landing Page 👋</h1>
    <p>
      <Link href="/login">Login</Link>
    </p>
  </Layout>
)

export default IndexPage
