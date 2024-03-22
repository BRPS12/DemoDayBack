import { updateUser } from "@/services/user-service";
import gql from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
    image: String
    name: String!
    age: String!
    phoneNumber: String
    role: String
  }

  input UserRegisterInput {
    email: String!
    password: String!
    image: String
    name: String
    age: String
    phoneNumber: String
    role: String
  }

  type Query {
    getUsers: [User]!
    getUser(id: ID!): User
  }

  type Mutation {
    registerUser(input: UserRegisterInput!): User!
    requestLogin(email: String!, password: String!): User!
    updateUser(
      name: String!
      password: String!
      image: String!
      age: String!
      id: ID!
    ): User!
  }
`;
