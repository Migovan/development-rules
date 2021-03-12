import { AppProps } from "next/app";
import GlobalStyles from "../common-styles/global";
import { Container } from "../common-styles/styles";
import Theme from "../common-styles/theme";
import Meta from "../components/meta";
import Header from "../components/Header/Header";
import Tabs from "../components/Tabs/Tabs";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Theme>
      <Meta />
      <Header />
      <Container>
        <Tabs />
        {/* <hr style={{ border: 0, margin: "15 0", height: 1 }} /> */}
        <Component {...pageProps} />
      </Container>
      <GlobalStyles />
    </Theme>
  );
};

export default App;
