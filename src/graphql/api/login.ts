import gql from "graphql-tag";
import GraphQLClient from "../client";
import { User } from "../generated/graphql";

const graphqlClient: GraphQLClient = new GraphQLClient();

export default async function loginApi(obj: {
  name: string;
  password: string;
}) {
  try {
    const query = `
    query getUser {
      getUser(input: { name: "${obj.name}", password: "${obj.password}" }) {
        token
        code
        name
      }
    }
  `;
    const url = "https://echosome.tk:1333/query";
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    };
    const res = await fetch(url, opts);
    const result = await res.json();
    const data = result.data;

    if (data.getUser) {
      const user = data.getUser as User;
      return {
        token: user.token,
        code: user.code,
        name: user.name
      };
    }
  } catch (err) {
    console.error(err);
  }

  return undefined;
}
