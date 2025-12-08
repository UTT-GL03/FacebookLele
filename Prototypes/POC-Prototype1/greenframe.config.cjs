module.exports = {
  baseURL: "http://localhost",
  projectName: "FacebookLele",
  scenarios: [
    {
      name: "Consulter un post",
      path: "./scenarios/consult_post.cjs",
    },
    {
      name: "Consulter la liste des posts",
      path: "./scenarios/consult_home.cjs",
    }
  ],
  containers: ["poc-prototype1-static_hosting-1"],
};