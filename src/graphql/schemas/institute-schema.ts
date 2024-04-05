import { Institute } from "./../generated/index";
import { addReview } from "./../../services/institute-service";
import gql from "graphql-tag";

export const instituteTypeDefs = gql`
  type Institute {
    id: ID!
    category: String
    name: String
    image: [String]
    review: Float
    reviewCount: Int
    position: [String]
    description: String
    backGroundImage: String
    userId: String
    pending: Boolean
    comment: [String]
  }

  input InstituteCreateInput {
    category: String
    name: String
    image: [String]
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
    deleteInstitute(id: ID!): Institute!
    addComment(id: ID!, comment: String!): Institute!
    deleteComment(id: ID!, comment: String!): Institute!
    addReview(id: ID!, review: Float!): Institute!
  }
`;
