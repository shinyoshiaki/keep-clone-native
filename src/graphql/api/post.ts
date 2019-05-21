import gql from "graphql-tag";
import GraphQLClient from "../client";
import { NewMemo, Memo } from "../generated/graphql";
import graphqlClient from "../client";

async function postApi(obj: NewMemo) {
  const query = `
  mutation createMemo {
    createMemo(
      input: {
        token: "${obj.token}"
        title: "${obj.title}"
        text: "${obj.text}"
        tag:${JSON.stringify(obj.tag)}
      }
    ) {
      time
      code
    }
  }
`;

  try {
    const memo = await graphqlClient<Memo>(query);
    return {
      time: memo.time,
      code: memo.code
    };
  } catch (error) {}

  return undefined;
}

export default postApi;
