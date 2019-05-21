import { Memo, EditMemo } from "../generated/graphql";
import graphqlClient from "../client";

async function editpostApi(obj: EditMemo) {
  const query = `
  mutation EditMemo {
    editMemo(
      input: {
        token: "${obj.token}"
        memoCode: "${obj.memoCode}"
        title: "${obj.title}"
        text: "${obj.text}"
        tag: ${JSON.stringify(obj.tag)}
      }
    ) {
      time
    }
  }
`;

  try {
    const res = await graphqlClient<Memo>(query);
    return {
      time: res.time
    };
  } catch (error) {}

  return undefined;
}

export default editpostApi;
