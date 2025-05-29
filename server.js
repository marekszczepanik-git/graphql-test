const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const schema = require('./Schema/schema')

const app = new express();

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Nasłuchiwanie");
});
