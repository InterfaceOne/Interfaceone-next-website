import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apollo";
// import NProgress from "nprogress";
// import "nprogress/nprogress.css";
import Router from "next/router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import * as S from "../components/hero.styles";
import Image from "next/image";
import Script from "next/script";
import Head from "next/head";

// Router.events.on("routeChangeStart", () => NProgress.start());
// Router.events.on("routeChangeComplete", () => NProgress.done());
// Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <>
      {isLoading ? (
        <S.Greetings>
          <Image
            src="https://media.giphy.com/media/gd53yFKdjfVvZiIgqA/giphy.gif"
            alt="greetings"
            priority
            width={250}
            height={500}
            unoptimized={true}
          />
        </S.Greetings>
      ) : (
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      )}
    </>
  );
}

export default MyApp;
