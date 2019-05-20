export const gqlUrl =
  process.env.NODE_ENV === "production"
    ? "https://echosome.tk:1333/query"
    : "https://echosome.tk:1333/query";
