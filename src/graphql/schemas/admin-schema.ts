import { registerAdmin } from "./../../services/admin-service";
import gql from "graphql-tag";

export const adminTypeDefs = gql`
  type Admin {
    id: ID!
    email: String!
    password: String!
    image: String
    name: String!
    phoneNumber: Float
    role: String
    specialCode: Float
  }

  input AdminRegisterInput {
    email: String!
    password: String!
    image: String
    name: String
    phoneNumber: Float
    specialCode: Float
  }

  type Query {
    getAdmins: [Admin]!
    getAdmin(id: ID!): Admin
  }

  type Mutation {
    registerAdmin(input: AdminRegisterInput!): Admin!
    requestAdminLogin(
      email: String!
      password: String!
      specialCode: Float!
    ): Admin!
    updateAdmin(
      name: String!
      password: String!
      image: String!
      id: ID!
    ): Admin!
  }
`;
