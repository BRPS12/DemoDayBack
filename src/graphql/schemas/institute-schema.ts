import { getInstitute } from "@/services/institute-service";
import gql from "graphql-tag";

export const instituteTypeDefs = gql`
  type Institute {
    id: ID!
    category: String
    name: String
    image: String
    review: String
    description: String
    backGroundImage: String
    specialCode: String
  }

  input InstituteCreateInput {
    category: String
    name: String
    image: String
    review: String
    description: String
    backGroundImage: String
    specialCode: String
  }

  type Query {
    getInstitutes: [Institute]!
    getInstitute(id: ID!): Institute
  }

  type Mutation {
    createInstitute(input: InstituteCreateInput!): Institute!
  }
`;
