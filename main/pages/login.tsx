import Link from 'next/link';
import Layout from '../components/Layout';
import { API_URL, DASHBOARD_URL } from '../config';
import { AUTH_TOKEN } from '../constant';

const LoginPage = () => {

  const handleLogin = async () => {
    try {
      const url = `${API_URL}/api/login`;
      const resp = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });

      const json = await resp.json();

      if (json.token) {
        localStorage.setItem(AUTH_TOKEN, json.token)
        window.location.href = `${DASHBOARD_URL}?token=${json.token}`
      }
    }
    catch (ex) {
      console.log(ex);
    }
  }
  return (
    <Layout title="Login">
      <h1>Login</h1>
      <p>This is the login page</p>
      <button onClick={handleLogin}>
        Login
      </button>
      <p>
        <Link href="/">Go home</Link>
      </p>
    </Layout>
  )
}

export default LoginPage

