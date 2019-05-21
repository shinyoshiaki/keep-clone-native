import graphqlClient from "../client";

export default async function AuthApi(obj: { token: string }) {
  const query = `
  query auth {
    auth(input: {
        token:"${obj.token}"
    })
  }
`;

  try {
    const res = await graphqlClient<string>(query);

    return res;
  } catch (error) {}

  return undefined;
}
