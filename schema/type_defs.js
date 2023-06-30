// const { gql } = require('@apollo/server');

const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: fixNationality!
    friends:[User]
    favoriteMovies:[Movie]
  }

  type Movie{
    id:ID!
    name:String!
    username:String!
    year:Int!
  }

  type Query {
    users: [User]!
    user(name:String!, id:ID!):User!
    movies:[Movie!]!
  #  movie(name:String!):Movie! 
  }

  enum fixNationality{
    pakistani
    canada
    america
  }
`;

module.exports = typeDefs