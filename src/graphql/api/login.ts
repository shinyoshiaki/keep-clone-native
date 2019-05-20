import gql from "graphql-tag";
import GraphQLClient from "../client";
import { User } from "../generated/graphql";

const graphqlClient: GraphQLClient = new GraphQLClient();

export default async function loginApi(obj: {
  name: string;
  password: string;
}) {
  let result: any;

  try {
    const query = JSON.stringify({
      query: `
    query getUser {
      getUser(input: { name: "${obj.name}", password: "${obj.password}" }) {
        token
        code
        name
      }
    }
  `
    });
  } catch (err) {
    throw err;
  }

  if (result.getUser) {
    const user = result.getUser as User;
    return {
      token: user.token,
      code: user.code,
      name: user.name
    };
  }

  return undefined;
}
