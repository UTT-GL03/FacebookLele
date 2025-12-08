module.exports = {
  baseURL: "http://localhost",
  projectName: "FacebookLele",
  scenarios: [
    {
      name: "Consulter un post",
      path: "./scenarios/consult_post.js",
    },
    {
      name: "Consulter la liste des posts",
      path: "./scenarios/consult_index.js",
    }
  ],
  containers: ["poc-prototype1-static_hosting-1"],
};