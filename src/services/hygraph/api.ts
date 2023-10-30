import { GraphQLClient } from "graphql-request";

export const hygraphApi = new GraphQLClient(
  `https://api-sa-east-1.hygraph.com/v2/${process.env.HYGRAPH_API_ID}/master`,
  {
    headers: {
      authorization: process.env.HYGRAPH_API_TOKEN!,
    },
  }
);
