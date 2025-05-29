const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;

const app = new express();

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Nasłuchiwanie");
});
