import { registerAdmin } from "./../../services/admin-service";
import gql from "graphql-tag";

export const adminTypeDefs = gql`
  type Admin {
    id: ID!
    email: String!
    password: String!
    image: String
    name: String!
    phoneNumber: String
    role: String
    specialCode: String
  }

  input AdminRegisterInput {
    email: String!
    password: String!
    image: String
    name: String
    phoneNumber: String
    specialCode: String
  }

  type Query {
    getAdmins: [Admin]!
    getAdmin(id: ID!): Admin
  }

  type Mutation {
    registerAdmin(input: AdminRegisterInput!): Admin!
    requestLogin(
      email: String!
      password: String!
      specialCode: String!
    ): Admin!
    updateAdmin(
      name: String!
      password: String!
      image: String!
      id: ID!
    ): Admin!
  }
`;
