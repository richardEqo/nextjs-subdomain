import { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from "../redux/store";

// const clientSideEmotionCache = createCache({ key: 'css', prepend: true });
// type ExtendedAppProps = AppProps & {
//   Component: NextPage;
// };

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={createStore(pageProps.preloadedState)}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default MyApp;
