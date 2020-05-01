const prodBaseUrl = "http://misiaszek-valentin.com:8000/api";
const devBaseUrl = "http://c6478ee1.ngrok.io/api";
let baseUrl: string;

baseUrl = devBaseUrl;

export const apiRoutes = Object.freeze({
  auth: baseUrl + "/auth",
  users: baseUrl + "/users",
  dreams: baseUrl + "/dreams",
  stats: baseUrl + "/stats"
});
