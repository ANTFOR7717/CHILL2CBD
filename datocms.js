import { GraphQLClient } from "graphql-request";
export function request({ query, variables, preview }) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${'32f3dfe410276118faa42255f69299'}`
    }
  });
  return client.request(query, variables);
}
