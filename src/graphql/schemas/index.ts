import mergeTypeDefs from "graphql-tools-merge-typedefs";
import { userTypeDefs } from "./user-schema";
import { instituteTypeDefs } from "./institute-schema";

export const typeDefs = mergeTypeDefs([userTypeDefs, instituteTypeDefs]);
