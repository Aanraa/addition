import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import "highlight.js/styles/stackoverflow-dark.css";
import { useRouter } from "next/router";

import { ThemeProvider } from "next-themes";
import { UserWrapper } from "../context/user";
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <UserWrapper>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </UserWrapper>
    </ThemeProvider>
  );
}

//vs2015
//tomorrow-night-blue
//monokai
//monokai sublime
//stackoverflow-dark
//sunburst
//a11y-dark
//ir-black
