import { Memo, RemoveMemo } from "../generated/graphql";
import graphqlClient from "../client";

async function removepostApi(obj: RemoveMemo) {
  const query = `
  mutation RemoveMemo {
    removeMemo(
      input: {
        token: "${obj.token}"
        memoCode: "${obj.memoCode}"
      }
    ) {
      code
    }
  }
`;

  try {
    const memo = await graphqlClient<Memo>(query);
    return {
      code: memo.code
    };
  } catch (error) {}

  return undefined;
}

export default removepostApi;
