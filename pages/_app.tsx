import { AppProps } from "next/app";
import GlobalStyles from "../common-styles/global";
import Theme from "../common-styles/theme";
import Meta from "../components/meta";
import Header from "../components/Header/Header";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Theme>
      <Meta />
      <Header />
      <GlobalStyles />
      <Component {...pageProps} />
    </Theme>
  );
};

export default App;
