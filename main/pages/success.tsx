import { NextPageContext } from 'next';
import Layout from '../components/Layout';

const Success = () => {

  return (
    <Layout title="Login Success">
      <h1>Successfully Login</h1>
    </Layout>
  )
}

function getCookie(cookie, cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

Success.getInitialProps = async (ctx: NextPageContext) => {

  const authCookie = getCookie(ctx.req?.headers.cookie, "auth")
  if (authCookie) {
    ctx.res?.writeHead(302, {
      Location: 'http://localhost:3084'
    });
    ctx.res?.end();
    return;
  }

  return {}
}


export default Success

