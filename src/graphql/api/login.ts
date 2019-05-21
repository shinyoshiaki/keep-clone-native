import { User } from "../generated/graphql";
import graphqlClient from "../client";

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
    const user = await graphqlClient<User>(query);
    return {
      token: user.token,
      code: user.code,
      name: user.name
    };
  } catch (err) {
    console.error(err);
  }

  return undefined;
}
