import { changeStatus } from "./../../services/institute-service";
import { getInstitute } from "@/services/institute-service";
import gql from "graphql-tag";

export const instituteTypeDefs = gql`
  type Institute {
    id: ID!
    category: String
    name: String
    image: [String]
    review: String
    position: [String]
    description: String
    backGroundImage: String
    userId: String
    pending: Boolean
  }

  input InstituteCreateInput {
    category: String
    name: String
    image: [String]
    review: String
    position: [String]
    description: String
    backGroundImage: String
    userId: String
  }

  type Query {
    getInstitutes: [Institute]!
    getInstitute(id: ID!): Institute
  }

  type Mutation {
    createInstitute(input: InstituteCreateInput!): Institute!
    changeStatus(id: ID!): Institute!
  }
`;
