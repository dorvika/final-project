export const isTokenExpired = (token) =>
  Date.now() >= JSON.parse(atob(token.split(".")[1])).exp * 1000;
