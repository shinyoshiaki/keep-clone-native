import { Memo, GetAllMemo } from "../generated/graphql";
import graphqlClient from "../client";

async function allPostApi(obj: GetAllMemo) {
  const query = `
  query getAllMemo {
    getAllMemo(
      input: { token: "${obj.token}" }
    ) {
      owner
      code
      title
      time
      text
      tag
    }
  }`;

  try {
    const res = await graphqlClient<Memo[]>(query);
    return res.map(memo => {
      memo.tag = memo.tag.split(",") as any;
      return memo;
    }) as any;
  } catch (error) {}

  return undefined;
}

export default allPostApi;
