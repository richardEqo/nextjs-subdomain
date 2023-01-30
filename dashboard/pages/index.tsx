import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Dashboard">
    <h1>Welcome to our Dashboard</h1>
    <p>
      <Link href="/profile">Profile</Link>
    </p>
    <p>
      <Link href="/analytics">Analytics</Link>
    </p>
    <p>
      <Link href="/logout" >Logout</Link>
    </p>
  </Layout>
)

export default IndexPage
