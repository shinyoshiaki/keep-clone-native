import { gqlUrl } from "../environment";

export default async function graphqlClient<T>(query: string) {
  const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  };
  const res = await fetch(gqlUrl, opts);
  const result = await res.json();
  const data = result.data;

  const key = Object.keys(data)[0];

  return data[key] as T;
}
