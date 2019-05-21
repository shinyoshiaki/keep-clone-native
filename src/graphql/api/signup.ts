import { User } from "../generated/graphql";
import graphqlClient from "../client";

const signUpApi = async (obj: { name: string; password: string }) => {
  try {
    const query = `
    mutation createUser {
      createUser(input: { name: "${obj.name}", password: "${obj.password}" }) {
        code
        token
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
  } catch (err) {}

  return undefined;
};

export default signUpApi;
