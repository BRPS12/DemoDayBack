import { updateUser } from "@/services/user-service";
import gql from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
    image: String
    name: String!
    age: Float!
    phoneNumber: Float
    role: String
  }

  input UserRegisterInput {
    email: String!
    password: String!
    image: String
    name: String
    age: Float
    phoneNumber: Float
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
      age: Float!
      id: ID!
    ): User!
  }
`;
