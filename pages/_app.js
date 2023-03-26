import Layout from "../layout";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";


function MyApp({ Component, pageProps}) {
  return <SessionProvider>

    <ChakraProvider>
      <Layout>
      <Component {...pageProps} />
        
      </Layout>
    </ChakraProvider>
    </SessionProvider>

  
}

export default MyApp;
