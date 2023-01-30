import Head from "next/head";
import React, { ReactNode, useEffect } from "react";
import { AUTH_TOKEN } from "../constant";
import { getTokenFromURL } from "../services/UtilService";
import Router from "next/router";
import { MAIN_DOMAIN_URL } from "../config";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  useEffect(() => {
    let token = getTokenFromURL(window.location.href);
    if (token) {
      localStorage.setItem(AUTH_TOKEN, token);
      Router.replace(window.location.href.replace(window.location.search, ""));
    }
    token = localStorage.getItem(AUTH_TOKEN);
    // if token not found
    if (!token) {
      window.location.replace(`${MAIN_DOMAIN_URL}/logout`);
    }
  }, []);
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
  );
};

export default Layout;
