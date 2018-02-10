// const baseRoute = 'http://localhost:3030';
// const baseRoute = 'https://dry-temple-99897.herokuapp.com';
const baseRoute =  'https://itunes-search-iypahdbpmn.now.sh';
const baseUrl = `${baseRoute}/api`;
const apiSettings = {
  login: `${baseUrl}/accounts/login`,
  signup: `${baseUrl}/accounts/signup`,
  upvote: `${baseUrl}/upvote`,
  search: `${baseUrl}/search`,
  //START: {Adding Push} {2} out of {5}
  getVapidKey: `${baseUrl}/getvapidkey`,
  subscribe: `${baseUrl}/subscribe`
  //END: {Adding Push} {2} out of {5}
};
export default apiSettings;
