import { AppProps } from "next/app";
import { useRouter } from "next/router";
import GlobalStyles from "../common-styles/global";
import { Container } from "../common-styles/styles";
import Theme from "../common-styles/theme";
import Meta from "../components/meta";
import Header from "../components/Header/Header";
import Tabs from "../components/Tabs/Tabs";
import { UserDataProvider } from "../components/Context/user-data";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <UserDataProvider>
      <Theme>
        <Meta />
        <Header />
        <Container>
          {router.pathname !== "/login" && <Tabs />}
          <Component {...pageProps} />
        </Container>
        <GlobalStyles />
      </Theme>
    </UserDataProvider>
  );
};

export default App;
