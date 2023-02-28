import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "apollo-link-context";
const token = process.env.NEXT_PUBLIC__CONTENTFUL_CPA;
const space = process.env.NEXT_PUBLIC__CONTENTFUL_SPACE_ID;

function createApolloClient() {
  const authLink = setContext((_, { headers }) => ({
    headers: { ...headers, authorization: token ? `Bearer ${token}` : "" },
  }));
  const link = new HttpLink({
    uri: `https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`,
  });
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: authLink.concat(link),
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;
