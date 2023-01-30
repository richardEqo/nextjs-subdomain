import qs from "querystring";

export const getTokenFromURL = (url: string) => {
  const qString = url.split("?");

  if (qString.length > 0 && qString[1]) {
    const objQuery = qs.parse(qString[1]?.replace("?", ""));
    if (objQuery["token"]) {
      return (objQuery["token"] as string) || "";
    }
  }
  return "";
};
